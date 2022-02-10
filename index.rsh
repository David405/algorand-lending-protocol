'reach 0.1';

export const main = Reach.App(() => {

    /* data definitions */
    const Msg = Data({
        Deposit : UInt,
        Withdraw: UInt,
        Borrow  : UInt,
        Repay   : UInt,
        Transfer: Object({amt: UInt, to: Address})
    });

    const MaybeMsg = Maybe(Msg);

    /* participant interfaces */
    const Deployer = Participant('Deployer', {
        log: Fun(true, Null),
    });

    const Lender = ParticipantClass('Lender', {
        getMsg: Fun(true, Msg),
        printTokenBalance: Fun(true, Null),
        informTokenId: Fun(true, Null)
    });

    const Borrower = ParticipantClass('Borrower', {
        getMsg: Fun(true, Msg)
    });

    /* util functions */
    const log = (s, d) => {
      if (s == "FirstPub") {
        Deployer.interact.log(["First publication by : ", d]);
      }

      else if (s == "Transaction") {
        const msg = d[1];
        switch(msg) {
          case Deposit:
            Deployer.interact.log(["Transaction by       : ", d]);
          case Withdraw:
            Deployer.interact.log(["Transaction by       : ", d]);
          case Borrow:
            Deployer.interact.log(["Transaction by       : ", d]);
          case Repay:
            Deployer.interact.log(["Transaction by       : ", d]);
          case Transfer:
            Deployer.interact.log(["Transaction by       : ", [d[0], msg.to, ["Transfer", msg.amt]]]);
        }
      }

      else if (s == "LendingTransaction") {
        Deployer.interact.log(["Lending transaction  : ", d]);
      }

      else if (s == "BorrowerTransaction") {
        Deployer.interact.log(["Borrower transaction : ", d]);
      }

      else if (s == "LenderPaid") {
        Deployer.interact.log(["Lender paid          : ", d]);
      }

      else if (s == "LenderWithdrew") {
        Deployer.interact.log(["Lender withdrew      : ", d]);
      }

      else if (s == "BorrowerBorrowed") {
        Deployer.interact.log(["Borrower borrowed    : ", d]);
      }

      else if (s == "BorrowerRepaid") {
        Deployer.interact.log(["Borrower repaid      : ", d]);
      }

      else if (s == "TransferTransaction") {
        Deployer.interact.log(["Lender transferred   : ", d]);
      }

      else if (s == "TokenBalance") {
        Deployer.interact.log(["Pool token balance   : ", d]);
      }

      else if (s == "InterestEarned") {
        Deployer.interact.log(["Interest earned      : ", d]);
      }

      else if (s == "TotalInterest") {
        Deployer.interact.log(["Total interest       : ", d]);
      }

      else {
        Deployer.interact.log([s, d]);
      }
    };

    const min = (x,y) => x < y ? x : y;

    /* deploy app */
    init();

    /* first consensus for setup */
    Deployer.publish();
    log("FirstPub", [this]);

    /* setup linear state */
    const deposits = new Map(UInt);
    const loans    = new Map(UInt);

    /* setup non-network token */
    const token = new Token({
      name: Bytes(32).pad("token"),
      symbol: Bytes(8).pad("token"),
      supply: 1000
    });
    log("TokenBalance", [null, balance(token)]);

    /* additional linear state for interest calculation */
    const lastDepositTime = new Map(UInt);
    const lastBorrowTime = new Map(UInt);
    const lenderInterest = new Map(UInt);
    const borrowerInterest = new Map(UInt);

    commit();

    /* inform all lenders of token ID for opt-in */
    Lender.interact.informTokenId(token);

    Deployer.publish();

    /* while loop for executing transactions */
    var [lastAddr, lastMsg] = [this, MaybeMsg.None(null)]
    invariant(
      (balance() == deposits.sum() - loans.sum())
      && (deposits.all((v) => v >= 0))
      && (loans.all((v) => v >= 0))
    )
    while(true) {
        commit();

        /* local steps to retrieve transaction message */
        Lender.only(() => { 
          const msg = declassify(interact.getMsg());
        });
        Borrower.only(() => {
          const msg = declassify(interact.getMsg());
        });

        /* transaction race */
        race(Lender, Borrower).publish(msg).pay([
          msg.match({
            Deposit : ((v) => v),
            Withdraw: ((_) => 0),
            Borrow  : ((_) => 0),
            Repay   : ((v) => min(v, fromSome(loans[this], 0))),
            Transfer: ((_) => 0)
          }),
          [
            msg.match({
              Deposit  : (_) => 0,
              Withdraw : (v) => v <= fromSome(deposits[this], 0) ? v : 0,
              Repay    : (_) => 0,
              Borrow   : (_) => 0,
              Transfer : ({amt, to}) => amt <= fromSome(deposits[this], 0) ? amt : 0
            }),
            token
          ]
        ]);

        log("Transaction", [this, msg]);

        /* take an action depending on the msg */
        switch(msg) {
          case Deposit:
            log("LenderPaid", [this, msg]);
            deposits[this] = fromSome(deposits[this], 0) + msg;

            if(msg <= balance(token)) {
              assert(msg <= balance(token));
              transfer(msg, token).to(this);
              log("TokenBalance", [null, balance(token)]);
            }

          case Withdraw:
            const canWithdraw = 
              (msg <= balance()) && (msg <= fromSome(deposits[this], 0));

            if(canWithdraw) {
              assert(canWithdraw);
              log("LenderWithdrew", [this, msg]);
              log("TokenBalance", [null, balance(token)]);
              transfer(msg).to(this);
              deposits[this] = fromSome(deposits[this], 0) - msg;
            } else {
              assert(not(canWithdraw))
            }

          case Borrow:
            if(msg <= balance()) {
              assert(msg <= balance());
              log("BorrowerBorrowed", [this, msg]);
              transfer(msg).to(this);
              loans[this] = fromSome(loans[this], 0) + msg;
            }

          case Repay:
            const currLoan = fromSome(loans[this], 0);
            const toPay    = min(msg, currLoan);
            if(currLoan > 0) {
              assert(currLoan > 0);
              log("BorrowerRepaid", [this, toPay]);
              loans[this] = currLoan - toPay;
            }

          case Transfer:
            if(msg.amt <= fromSome(deposits[this], 0)) {
              transfer(msg.amt, token).to(msg.to);
              deposits[this] = fromSome(deposits[this], 0) - msg.amt;
              deposits[msg.to] = fromSome(deposits[msg.to], 0) + msg.amt;
              Lender.interact.printTokenBalance(token);
            }
        }

        /* interest calculation */
        if(isSome(lastMsg)) {
          const lastMsgVal = fromSome(lastMsg, Msg.Deposit(0));
          switch(lastMsgVal) {
            case Deposit:
              const addrDeposit = deposits[lastAddr];
              const addrLastDepositTime = lastDepositTime[lastAddr];
              lastDepositTime[lastAddr] = lastConsensusSecs();

              if(isSome(addrLastDepositTime)) {
                const principal = fromSome(addrDeposit, 0) - lastMsgVal;
                const time = (lastConsensusSecs() - fromSome(addrLastDepositTime, 0)) 
                const rate = 1;
                const interest = principal * rate * time;
                lenderInterest[lastAddr] = fromSome(lenderInterest[lastAddr],0) + interest;
                log("InterestEarned", [lastAddr, interest]);
                log("TotalInterest",  [lastAddr, lenderInterest[lastAddr]]);
              }
            case Withdraw:
            case Borrow:
            case Repay:
            case Transfer:
          }
        }

        /* continue loop while updating loop variables */
        [lastAddr, lastMsg] = [this, MaybeMsg.Some(msg)];
        continue;
    }

    commit();
});
