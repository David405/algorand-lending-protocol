// Automatically generated with Reach 0.1.8 (34107655)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (34107655)';
export const _backendVersion = 9;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    amt: ctc3,
    to: ctc0
    });
  const ctc5 = stdlib.T_Data({
    Borrow: ctc3,
    Deposit: ctc3,
    Repay: ctc3,
    Transfer: ctc4,
    Withdraw: ctc3
    });
  const ctc6 = stdlib.T_Data({
    None: ctc2,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Data({
    None: ctc2,
    Some: ctc3
    });
  const map0_ctc = ctc7;
  
  const map1_ctc = ctc7;
  
  const map2_ctc = ctc7;
  
  const map3_ctc = ctc7;
  
  const map4_ctc = ctc7;
  
  const map5_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc1, ctc0, ctc6, ctc3, ctc3, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Borrower(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Borrower expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Borrower expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    amt: ctc1,
    to: ctc4
    });
  const ctc6 = stdlib.T_Data({
    Borrow: ctc1,
    Deposit: ctc1,
    Repay: ctc1,
    Transfer: ctc5,
    Withdraw: ctc1
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v498, time: v497, didSend: v24, from: v496 } = txn1;
  ;
  const v505 = 'token                           ';
  const v506 = 'token   ';
  const v507 = '                                                                                                ';
  const v508 = '                                ';
  const v509 = undefined;
  const v510 = await txn1.getOutput('internal', 'v509', ctc3, v509);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v520, time: v519, didSend: v57, from: v518 } = txn2;
  ;
  const v522 = stdlib.addressEq(v496, v518);
  stdlib.assert(v522, {
    at: './index.rsh:130:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Borrower'
    });
  const v523 = ['None', null];
  let v524 = v518;
  let v525 = v523;
  let v526 = v519;
  let v529 = v520;
  let v532 = stdlib.checkedBigNumberify('./index.rsh:101:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  let v533 = stdlib.checkedBigNumberify('./index.rsh:115:15:decimal', stdlib.UInt_max, 1000);
  
  while (await (async () => {
    
    return true;})()) {
    const v574 = ctc.selfAddress();
    const v576 = stdlib.protect(ctc6, await interact.getMsg(), {
      at: './index.rsh:147:49:application',
      fs: ['at ./index.rsh:146:22:application call to [unknown function] (defined at: ./index.rsh:146:26:function exp)'],
      msg: 'getMsg',
      who: 'Borrower'
      });
    
    let v577;
    switch (v576[0]) {
      case 'Borrow': {
        const v578 = v576[1];
        v577 = stdlib.checkedBigNumberify('./index.rsh:155:31:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Deposit': {
        const v579 = v576[1];
        v577 = v579;
        
        break;
        }
      case 'Repay': {
        const v580 = v576[1];
        const v581 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v574), null);
        const v582 = stdlib.fromSome(v581, stdlib.checkedBigNumberify('./index.rsh:156:60:decimal', stdlib.UInt_max, 0));
        const v583 = stdlib.lt(v580, v582);
        const v584 = v583 ? v580 : v582;
        v577 = v584;
        
        break;
        }
      case 'Transfer': {
        const v585 = v576[1];
        v577 = stdlib.checkedBigNumberify('./index.rsh:157:31:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Withdraw': {
        const v586 = v576[1];
        v577 = stdlib.checkedBigNumberify('./index.rsh:154:31:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      }
    let v587;
    switch (v576[0]) {
      case 'Borrow': {
        const v588 = v576[1];
        v587 = stdlib.checkedBigNumberify('./index.rsh:164:33:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Deposit': {
        const v589 = v576[1];
        v587 = stdlib.checkedBigNumberify('./index.rsh:161:33:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Repay': {
        const v590 = v576[1];
        v587 = stdlib.checkedBigNumberify('./index.rsh:163:33:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Transfer': {
        const v591 = v576[1];
        const v592 = v591.amt;
        const v594 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v574), null);
        const v595 = stdlib.fromSome(v594, stdlib.checkedBigNumberify('./index.rsh:165:73:decimal', stdlib.UInt_max, 0));
        const v596 = stdlib.le(v592, v595);
        const v597 = v596 ? v592 : stdlib.checkedBigNumberify('./index.rsh:165:84:decimal', stdlib.UInt_max, 0);
        v587 = v597;
        
        break;
        }
      case 'Withdraw': {
        const v598 = v576[1];
        const v599 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v574), null);
        const v600 = stdlib.fromSome(v599, stdlib.checkedBigNumberify('./index.rsh:162:63:decimal', stdlib.UInt_max, 0));
        const v601 = stdlib.le(v598, v600);
        const v602 = v601 ? v598 : stdlib.checkedBigNumberify('./index.rsh:162:72:decimal', stdlib.UInt_max, 0);
        v587 = v602;
        
        break;
        }
      }
    
    const txn3 = await (ctc.sendrecv({
      args: [v510, v524, v525, v529, v532, v533, v576],
      evt_cnt: 1,
      funcNum: 3,
      lct: v526,
      onlyIf: true,
      out_tys: [ctc6],
      pay: [v577, [[v587, v510]]],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        stdlib.simMapDupe(sim_r, 3, map3);
        stdlib.simMapDupe(sim_r, 4, map4);
        stdlib.simMapDupe(sim_r, 5, map5);
        
        const {data: [v630], secs: v632, time: v631, didSend: v259, from: v629 } = txn3;
        
        switch (v630[0]) {
          case 'Borrow': {
            const v633 = v630[1];
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:155:31:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:164:33:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: v510
              });
            const v687 = stdlib.le(v633, v532);
            if (v687) {
              const v698 = stdlib.sub(v532, v633);
              sim_r.txns.push({
                amt: v633,
                kind: 'from',
                to: v629,
                tok: undefined
                });
              const v699 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v629), null);
              const v700 = stdlib.fromSome(v699, stdlib.checkedBigNumberify('./index.rsh:204:51:decimal', stdlib.UInt_max, 0));
              const v701 = stdlib.add(v700, v633);
              await stdlib.simMapSet(sim_r, 1, v629, v701);
              let v702;
              switch (v525[0]) {
                case 'None': {
                  const v703 = v525[1];
                  v702 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v704 = v525[1];
                  v702 = true;
                  
                  break;
                  }
                }
              if (v702) {
                const v705 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v706 = stdlib.fromSome(v525, v705);
                switch (v706[0]) {
                  case 'Borrow': {
                    const v707 = v706[1];
                    const v708 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v708;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v698;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v709 = v706[1];
                    const v710 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v711 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v713;
                    switch (v711[0]) {
                      case 'None': {
                        const v714 = v711[1];
                        v713 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v715 = v711[1];
                        v713 = true;
                        
                        break;
                        }
                      }
                    if (v713) {
                      const v716 = stdlib.fromSome(v710, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v717 = stdlib.sub(v716, v709);
                      const v719 = stdlib.fromSome(v711, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v720 = stdlib.sub(v529, v719);
                      const v721 = stdlib.mul(v717, v720);
                      const v722 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v723 = stdlib.fromSome(v722, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v724 = stdlib.add(v723, v721);
                      await stdlib.simMapSet(sim_r, 4, v524, v724);
                      const v736 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v736;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v698;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v737 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v737;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v698;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v738 = v706[1];
                    const v739 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v739;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v698;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v740 = v706[1];
                    const v741 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v741;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v698;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v742 = v706[1];
                    const v743 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v743;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v698;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v744 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v744;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            else {
              let v745;
              switch (v525[0]) {
                case 'None': {
                  const v746 = v525[1];
                  v745 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v747 = v525[1];
                  v745 = true;
                  
                  break;
                  }
                }
              if (v745) {
                const v748 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v749 = stdlib.fromSome(v525, v748);
                switch (v749[0]) {
                  case 'Borrow': {
                    const v750 = v749[1];
                    const v751 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v751;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v752 = v749[1];
                    const v753 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v754 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v756;
                    switch (v754[0]) {
                      case 'None': {
                        const v757 = v754[1];
                        v756 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v758 = v754[1];
                        v756 = true;
                        
                        break;
                        }
                      }
                    if (v756) {
                      const v759 = stdlib.fromSome(v753, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v760 = stdlib.sub(v759, v752);
                      const v762 = stdlib.fromSome(v754, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v763 = stdlib.sub(v529, v762);
                      const v764 = stdlib.mul(v760, v763);
                      const v765 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v766 = stdlib.fromSome(v765, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v767 = stdlib.add(v766, v764);
                      await stdlib.simMapSet(sim_r, 4, v524, v767);
                      const v779 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v779;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v780 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v780;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v781 = v749[1];
                    const v782 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v782;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v783 = v749[1];
                    const v784 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v784;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v785 = v749[1];
                    const v786 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v786;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v787 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v787;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            break;
            }
          case 'Deposit': {
            const v1216 = v630[1];
            const v1235 = stdlib.add(v532, v1216);
            sim_r.txns.push({
              amt: v1216,
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:161:33:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: v510
              });
            const v1377 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v629), null);
            const v1378 = stdlib.fromSome(v1377, stdlib.checkedBigNumberify('./index.rsh:177:55:decimal', stdlib.UInt_max, 0));
            const v1379 = stdlib.add(v1378, v1216);
            await stdlib.simMapSet(sim_r, 0, v629, v1379);
            const v1381 = stdlib.le(v1216, v533);
            if (v1381) {
              const v1387 = stdlib.sub(v533, v1216);
              sim_r.txns.push({
                amt: v1216,
                kind: 'from',
                to: v629,
                tok: v510
                });
              let v1394;
              switch (v525[0]) {
                case 'None': {
                  const v1395 = v525[1];
                  v1394 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1396 = v525[1];
                  v1394 = true;
                  
                  break;
                  }
                }
              if (v1394) {
                const v1397 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v1398 = stdlib.fromSome(v525, v1397);
                switch (v1398[0]) {
                  case 'Borrow': {
                    const v1399 = v1398[1];
                    const v1400 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1400;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v1387;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v1401 = v1398[1];
                    const v1402 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v1403 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v1405;
                    switch (v1403[0]) {
                      case 'None': {
                        const v1406 = v1403[1];
                        v1405 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v1407 = v1403[1];
                        v1405 = true;
                        
                        break;
                        }
                      }
                    if (v1405) {
                      const v1408 = stdlib.fromSome(v1402, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v1409 = stdlib.sub(v1408, v1401);
                      const v1411 = stdlib.fromSome(v1403, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v1412 = stdlib.sub(v529, v1411);
                      const v1413 = stdlib.mul(v1409, v1412);
                      const v1414 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v1415 = stdlib.fromSome(v1414, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v1416 = stdlib.add(v1415, v1413);
                      await stdlib.simMapSet(sim_r, 4, v524, v1416);
                      const v1428 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v1428;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1235;
                      const cv533 = v1387;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v1429 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v1429;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1235;
                      const cv533 = v1387;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v1430 = v1398[1];
                    const v1431 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1431;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v1387;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v1432 = v1398[1];
                    const v1433 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1433;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v1387;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v1434 = v1398[1];
                    const v1435 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1435;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v1387;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v1436 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1436;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            else {
              let v1437;
              switch (v525[0]) {
                case 'None': {
                  const v1438 = v525[1];
                  v1437 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1439 = v525[1];
                  v1437 = true;
                  
                  break;
                  }
                }
              if (v1437) {
                const v1440 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v1441 = stdlib.fromSome(v525, v1440);
                switch (v1441[0]) {
                  case 'Borrow': {
                    const v1442 = v1441[1];
                    const v1443 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1443;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v1444 = v1441[1];
                    const v1445 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v1446 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v1448;
                    switch (v1446[0]) {
                      case 'None': {
                        const v1449 = v1446[1];
                        v1448 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v1450 = v1446[1];
                        v1448 = true;
                        
                        break;
                        }
                      }
                    if (v1448) {
                      const v1451 = stdlib.fromSome(v1445, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v1452 = stdlib.sub(v1451, v1444);
                      const v1454 = stdlib.fromSome(v1446, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v1455 = stdlib.sub(v529, v1454);
                      const v1456 = stdlib.mul(v1452, v1455);
                      const v1457 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v1458 = stdlib.fromSome(v1457, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v1459 = stdlib.add(v1458, v1456);
                      await stdlib.simMapSet(sim_r, 4, v524, v1459);
                      const v1471 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v1471;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1235;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v1472 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v1472;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1235;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v1473 = v1441[1];
                    const v1474 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1474;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v1475 = v1441[1];
                    const v1476 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1476;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v1477 = v1441[1];
                    const v1478 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1478;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v1479 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1479;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            break;
            }
          case 'Repay': {
            const v1799 = v630[1];
            const v1800 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v629), null);
            const v1801 = stdlib.fromSome(v1800, stdlib.checkedBigNumberify('./index.rsh:156:60:decimal', stdlib.UInt_max, 0));
            const v1802 = stdlib.lt(v1799, v1801);
            const v1803 = v1802 ? v1799 : v1801;
            const v1822 = stdlib.add(v532, v1803);
            sim_r.txns.push({
              amt: v1803,
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:163:33:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: v510
              });
            const v2072 = stdlib.gt(v1801, stdlib.checkedBigNumberify('./index.rsh:210:27:decimal', stdlib.UInt_max, 0));
            if (v2072) {
              const v2079 = stdlib.sub(v1801, v1803);
              await stdlib.simMapSet(sim_r, 1, v629, v2079);
              let v2080;
              switch (v525[0]) {
                case 'None': {
                  const v2081 = v525[1];
                  v2080 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v2082 = v525[1];
                  v2080 = true;
                  
                  break;
                  }
                }
              if (v2080) {
                const v2083 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v2084 = stdlib.fromSome(v525, v2083);
                switch (v2084[0]) {
                  case 'Borrow': {
                    const v2085 = v2084[1];
                    const v2086 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2086;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v2087 = v2084[1];
                    const v2088 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v2089 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v2091;
                    switch (v2089[0]) {
                      case 'None': {
                        const v2092 = v2089[1];
                        v2091 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v2093 = v2089[1];
                        v2091 = true;
                        
                        break;
                        }
                      }
                    if (v2091) {
                      const v2094 = stdlib.fromSome(v2088, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v2095 = stdlib.sub(v2094, v2087);
                      const v2097 = stdlib.fromSome(v2089, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v2098 = stdlib.sub(v529, v2097);
                      const v2099 = stdlib.mul(v2095, v2098);
                      const v2100 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v2101 = stdlib.fromSome(v2100, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v2102 = stdlib.add(v2101, v2099);
                      await stdlib.simMapSet(sim_r, 4, v524, v2102);
                      const v2114 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2114;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1822;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v2115 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2115;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1822;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v2116 = v2084[1];
                    const v2117 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2117;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v2118 = v2084[1];
                    const v2119 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2119;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v2120 = v2084[1];
                    const v2121 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2121;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v2122 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2122;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            else {
              let v2123;
              switch (v525[0]) {
                case 'None': {
                  const v2124 = v525[1];
                  v2123 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v2125 = v525[1];
                  v2123 = true;
                  
                  break;
                  }
                }
              if (v2123) {
                const v2126 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v2127 = stdlib.fromSome(v525, v2126);
                switch (v2127[0]) {
                  case 'Borrow': {
                    const v2128 = v2127[1];
                    const v2129 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2129;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v2130 = v2127[1];
                    const v2131 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v2132 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v2134;
                    switch (v2132[0]) {
                      case 'None': {
                        const v2135 = v2132[1];
                        v2134 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v2136 = v2132[1];
                        v2134 = true;
                        
                        break;
                        }
                      }
                    if (v2134) {
                      const v2137 = stdlib.fromSome(v2131, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v2138 = stdlib.sub(v2137, v2130);
                      const v2140 = stdlib.fromSome(v2132, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v2141 = stdlib.sub(v529, v2140);
                      const v2142 = stdlib.mul(v2138, v2141);
                      const v2143 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v2144 = stdlib.fromSome(v2143, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v2145 = stdlib.add(v2144, v2142);
                      await stdlib.simMapSet(sim_r, 4, v524, v2145);
                      const v2157 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2157;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1822;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v2158 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2158;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1822;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v2159 = v2127[1];
                    const v2160 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2160;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v2161 = v2127[1];
                    const v2162 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2162;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v2163 = v2127[1];
                    const v2164 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2164;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v2165 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2165;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            break;
            }
          case 'Transfer': {
            const v2386 = v630[1];
            const v2393 = v2386.amt;
            const v2395 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v629), null);
            const v2396 = stdlib.fromSome(v2395, stdlib.checkedBigNumberify('./index.rsh:165:73:decimal', stdlib.UInt_max, 0));
            const v2397 = stdlib.le(v2393, v2396);
            const v2398 = v2397 ? v2393 : stdlib.checkedBigNumberify('./index.rsh:165:84:decimal', stdlib.UInt_max, 0);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:157:31:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v2407 = stdlib.add(v533, v2398);
            sim_r.txns.push({
              amt: v2398,
              kind: 'to',
              tok: v510
              });
            const v2425 = v2386.to;
            if (v2397) {
              const v2759 = stdlib.sub(v2407, v2393);
              sim_r.txns.push({
                amt: v2393,
                kind: 'from',
                to: v2425,
                tok: v510
                });
              const v2763 = stdlib.sub(v2396, v2393);
              await stdlib.simMapSet(sim_r, 0, v629, v2763);
              const v2766 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2425), null);
              const v2767 = stdlib.fromSome(v2766, stdlib.checkedBigNumberify('./index.rsh:220:61:decimal', stdlib.UInt_max, 0));
              const v2769 = stdlib.add(v2767, v2393);
              await stdlib.simMapSet(sim_r, 0, v2425, v2769);
              let v2771;
              switch (v525[0]) {
                case 'None': {
                  const v2772 = v525[1];
                  v2771 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v2773 = v525[1];
                  v2771 = true;
                  
                  break;
                  }
                }
              if (v2771) {
                const v2774 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v2775 = stdlib.fromSome(v525, v2774);
                switch (v2775[0]) {
                  case 'Borrow': {
                    const v2776 = v2775[1];
                    const v2777 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2777;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2759;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v2778 = v2775[1];
                    const v2779 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v2780 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v2782;
                    switch (v2780[0]) {
                      case 'None': {
                        const v2783 = v2780[1];
                        v2782 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v2784 = v2780[1];
                        v2782 = true;
                        
                        break;
                        }
                      }
                    if (v2782) {
                      const v2785 = stdlib.fromSome(v2779, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v2786 = stdlib.sub(v2785, v2778);
                      const v2788 = stdlib.fromSome(v2780, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v2789 = stdlib.sub(v529, v2788);
                      const v2790 = stdlib.mul(v2786, v2789);
                      const v2791 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v2792 = stdlib.fromSome(v2791, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v2793 = stdlib.add(v2792, v2790);
                      await stdlib.simMapSet(sim_r, 4, v524, v2793);
                      const v2805 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2805;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2759;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v2806 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2806;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2759;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v2807 = v2775[1];
                    const v2808 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2808;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2759;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v2809 = v2775[1];
                    const v2810 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2810;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2759;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v2811 = v2775[1];
                    const v2812 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2812;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2759;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v2813 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2813;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            else {
              let v2814;
              switch (v525[0]) {
                case 'None': {
                  const v2815 = v525[1];
                  v2814 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v2816 = v525[1];
                  v2814 = true;
                  
                  break;
                  }
                }
              if (v2814) {
                const v2817 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v2818 = stdlib.fromSome(v525, v2817);
                switch (v2818[0]) {
                  case 'Borrow': {
                    const v2819 = v2818[1];
                    const v2820 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2820;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2407;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v2821 = v2818[1];
                    const v2822 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v2823 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v2825;
                    switch (v2823[0]) {
                      case 'None': {
                        const v2826 = v2823[1];
                        v2825 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v2827 = v2823[1];
                        v2825 = true;
                        
                        break;
                        }
                      }
                    if (v2825) {
                      const v2828 = stdlib.fromSome(v2822, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v2829 = stdlib.sub(v2828, v2821);
                      const v2831 = stdlib.fromSome(v2823, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v2832 = stdlib.sub(v529, v2831);
                      const v2833 = stdlib.mul(v2829, v2832);
                      const v2834 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v2835 = stdlib.fromSome(v2834, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v2836 = stdlib.add(v2835, v2833);
                      await stdlib.simMapSet(sim_r, 4, v524, v2836);
                      const v2848 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2848;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2407;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v2849 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2849;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2407;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v2850 = v2818[1];
                    const v2851 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2851;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2407;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v2852 = v2818[1];
                    const v2853 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2853;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2407;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v2854 = v2818[1];
                    const v2855 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2855;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2407;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v2856 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2856;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            break;
            }
          case 'Withdraw': {
            const v2969 = v630[1];
            const v2983 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v629), null);
            const v2984 = stdlib.fromSome(v2983, stdlib.checkedBigNumberify('./index.rsh:162:63:decimal', stdlib.UInt_max, 0));
            const v2985 = stdlib.le(v2969, v2984);
            const v2986 = v2985 ? v2969 : stdlib.checkedBigNumberify('./index.rsh:162:72:decimal', stdlib.UInt_max, 0);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:154:31:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v2990 = stdlib.add(v533, v2986);
            sim_r.txns.push({
              amt: v2986,
              kind: 'to',
              tok: v510
              });
            const v3442 = stdlib.le(v2969, v532);
            const v3446 = v3442 ? v2985 : false;
            if (v3446) {
              const v3461 = stdlib.sub(v532, v2969);
              sim_r.txns.push({
                amt: v2969,
                kind: 'from',
                to: v629,
                tok: undefined
                });
              const v3464 = stdlib.sub(v2984, v2969);
              await stdlib.simMapSet(sim_r, 0, v629, v3464);
              let v3465;
              switch (v525[0]) {
                case 'None': {
                  const v3466 = v525[1];
                  v3465 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v3467 = v525[1];
                  v3465 = true;
                  
                  break;
                  }
                }
              if (v3465) {
                const v3468 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v3469 = stdlib.fromSome(v525, v3468);
                switch (v3469[0]) {
                  case 'Borrow': {
                    const v3470 = v3469[1];
                    const v3471 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3471;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v3461;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v3472 = v3469[1];
                    const v3473 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v3474 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v3476;
                    switch (v3474[0]) {
                      case 'None': {
                        const v3477 = v3474[1];
                        v3476 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v3478 = v3474[1];
                        v3476 = true;
                        
                        break;
                        }
                      }
                    if (v3476) {
                      const v3479 = stdlib.fromSome(v3473, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v3480 = stdlib.sub(v3479, v3472);
                      const v3482 = stdlib.fromSome(v3474, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v3483 = stdlib.sub(v529, v3482);
                      const v3484 = stdlib.mul(v3480, v3483);
                      const v3485 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v3486 = stdlib.fromSome(v3485, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v3487 = stdlib.add(v3486, v3484);
                      await stdlib.simMapSet(sim_r, 4, v524, v3487);
                      const v3499 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v3499;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v3461;
                      const cv533 = v2990;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v3500 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v3500;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v3461;
                      const cv533 = v2990;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v3501 = v3469[1];
                    const v3502 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3502;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v3461;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v3503 = v3469[1];
                    const v3504 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3504;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v3461;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v3505 = v3469[1];
                    const v3506 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3506;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v3461;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v3507 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3507;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            else {
              let v3509;
              switch (v525[0]) {
                case 'None': {
                  const v3510 = v525[1];
                  v3509 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v3511 = v525[1];
                  v3509 = true;
                  
                  break;
                  }
                }
              if (v3509) {
                const v3512 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v3513 = stdlib.fromSome(v525, v3512);
                switch (v3513[0]) {
                  case 'Borrow': {
                    const v3514 = v3513[1];
                    const v3515 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3515;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v3516 = v3513[1];
                    const v3517 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v3518 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v3520;
                    switch (v3518[0]) {
                      case 'None': {
                        const v3521 = v3518[1];
                        v3520 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v3522 = v3518[1];
                        v3520 = true;
                        
                        break;
                        }
                      }
                    if (v3520) {
                      const v3523 = stdlib.fromSome(v3517, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v3524 = stdlib.sub(v3523, v3516);
                      const v3526 = stdlib.fromSome(v3518, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v3527 = stdlib.sub(v529, v3526);
                      const v3528 = stdlib.mul(v3524, v3527);
                      const v3529 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v3530 = stdlib.fromSome(v3529, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v3531 = stdlib.add(v3530, v3528);
                      await stdlib.simMapSet(sim_r, 4, v524, v3531);
                      const v3543 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v3543;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2990;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v3544 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v3544;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2990;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v3545 = v3513[1];
                    const v3546 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3546;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v3547 = v3513[1];
                    const v3548 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3548;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v3549 = v3513[1];
                    const v3550 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3550;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v3551 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3551;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            break;
            }
          }
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc1, ctc6],
      waitIfNotPresent: false
      }));
    const {data: [v630], secs: v632, time: v631, didSend: v259, from: v629 } = txn3;
    switch (v630[0]) {
      case 'Borrow': {
        const v633 = v630[1];
        ;
        ;
        const v687 = stdlib.le(v633, v532);
        if (v687) {
          const v698 = stdlib.sub(v532, v633);
          ;
          const v699 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v629), null);
          const v700 = stdlib.fromSome(v699, stdlib.checkedBigNumberify('./index.rsh:204:51:decimal', stdlib.UInt_max, 0));
          const v701 = stdlib.add(v700, v633);
          await stdlib.mapSet(map1, v629, v701);
          let v702;
          switch (v525[0]) {
            case 'None': {
              const v703 = v525[1];
              v702 = false;
              
              break;
              }
            case 'Some': {
              const v704 = v525[1];
              v702 = true;
              
              break;
              }
            }
          if (v702) {
            const v705 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v706 = stdlib.fromSome(v525, v705);
            switch (v706[0]) {
              case 'Borrow': {
                const v707 = v706[1];
                const v708 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v708;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v709 = v706[1];
                const v710 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v711 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v713;
                switch (v711[0]) {
                  case 'None': {
                    const v714 = v711[1];
                    v713 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v715 = v711[1];
                    v713 = true;
                    
                    break;
                    }
                  }
                if (v713) {
                  const v716 = stdlib.fromSome(v710, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v717 = stdlib.sub(v716, v709);
                  const v719 = stdlib.fromSome(v711, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v720 = stdlib.sub(v529, v719);
                  const v721 = stdlib.mul(v717, v720);
                  const v722 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v723 = stdlib.fromSome(v722, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v724 = stdlib.add(v723, v721);
                  await stdlib.mapSet(map4, v524, v724);
                  const v736 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v736;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v698;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v737 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v737;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v698;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v738 = v706[1];
                const v739 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v739;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v740 = v706[1];
                const v741 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v741;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v742 = v706[1];
                const v743 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v743;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v744 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v744;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v698;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v745;
          switch (v525[0]) {
            case 'None': {
              const v746 = v525[1];
              v745 = false;
              
              break;
              }
            case 'Some': {
              const v747 = v525[1];
              v745 = true;
              
              break;
              }
            }
          if (v745) {
            const v748 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v749 = stdlib.fromSome(v525, v748);
            switch (v749[0]) {
              case 'Borrow': {
                const v750 = v749[1];
                const v751 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v751;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v752 = v749[1];
                const v753 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v754 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v756;
                switch (v754[0]) {
                  case 'None': {
                    const v757 = v754[1];
                    v756 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v758 = v754[1];
                    v756 = true;
                    
                    break;
                    }
                  }
                if (v756) {
                  const v759 = stdlib.fromSome(v753, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v760 = stdlib.sub(v759, v752);
                  const v762 = stdlib.fromSome(v754, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v763 = stdlib.sub(v529, v762);
                  const v764 = stdlib.mul(v760, v763);
                  const v765 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v766 = stdlib.fromSome(v765, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v767 = stdlib.add(v766, v764);
                  await stdlib.mapSet(map4, v524, v767);
                  const v779 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v779;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v780 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v780;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v781 = v749[1];
                const v782 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v782;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v783 = v749[1];
                const v784 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v784;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v785 = v749[1];
                const v786 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v786;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v787 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v787;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Deposit': {
        const v1216 = v630[1];
        const v1235 = stdlib.add(v532, v1216);
        ;
        ;
        const v1377 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v629), null);
        const v1378 = stdlib.fromSome(v1377, stdlib.checkedBigNumberify('./index.rsh:177:55:decimal', stdlib.UInt_max, 0));
        const v1379 = stdlib.add(v1378, v1216);
        await stdlib.mapSet(map0, v629, v1379);
        const v1381 = stdlib.le(v1216, v533);
        if (v1381) {
          const v1387 = stdlib.sub(v533, v1216);
          ;
          let v1394;
          switch (v525[0]) {
            case 'None': {
              const v1395 = v525[1];
              v1394 = false;
              
              break;
              }
            case 'Some': {
              const v1396 = v525[1];
              v1394 = true;
              
              break;
              }
            }
          if (v1394) {
            const v1397 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v1398 = stdlib.fromSome(v525, v1397);
            switch (v1398[0]) {
              case 'Borrow': {
                const v1399 = v1398[1];
                const v1400 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1400;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v1401 = v1398[1];
                const v1402 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v1403 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v1405;
                switch (v1403[0]) {
                  case 'None': {
                    const v1406 = v1403[1];
                    v1405 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v1407 = v1403[1];
                    v1405 = true;
                    
                    break;
                    }
                  }
                if (v1405) {
                  const v1408 = stdlib.fromSome(v1402, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v1409 = stdlib.sub(v1408, v1401);
                  const v1411 = stdlib.fromSome(v1403, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v1412 = stdlib.sub(v529, v1411);
                  const v1413 = stdlib.mul(v1409, v1412);
                  const v1414 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v1415 = stdlib.fromSome(v1414, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v1416 = stdlib.add(v1415, v1413);
                  await stdlib.mapSet(map4, v524, v1416);
                  const v1428 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1428;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v1387;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v1429 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1429;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v1387;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v1430 = v1398[1];
                const v1431 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1431;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v1432 = v1398[1];
                const v1433 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1433;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v1434 = v1398[1];
                const v1435 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1435;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v1436 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v1436;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1235;
            const cv533 = v1387;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v1437;
          switch (v525[0]) {
            case 'None': {
              const v1438 = v525[1];
              v1437 = false;
              
              break;
              }
            case 'Some': {
              const v1439 = v525[1];
              v1437 = true;
              
              break;
              }
            }
          if (v1437) {
            const v1440 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v1441 = stdlib.fromSome(v525, v1440);
            switch (v1441[0]) {
              case 'Borrow': {
                const v1442 = v1441[1];
                const v1443 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1443;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v1444 = v1441[1];
                const v1445 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v1446 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v1448;
                switch (v1446[0]) {
                  case 'None': {
                    const v1449 = v1446[1];
                    v1448 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v1450 = v1446[1];
                    v1448 = true;
                    
                    break;
                    }
                  }
                if (v1448) {
                  const v1451 = stdlib.fromSome(v1445, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v1452 = stdlib.sub(v1451, v1444);
                  const v1454 = stdlib.fromSome(v1446, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v1455 = stdlib.sub(v529, v1454);
                  const v1456 = stdlib.mul(v1452, v1455);
                  const v1457 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v1458 = stdlib.fromSome(v1457, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v1459 = stdlib.add(v1458, v1456);
                  await stdlib.mapSet(map4, v524, v1459);
                  const v1471 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1471;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v1472 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1472;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v1473 = v1441[1];
                const v1474 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1474;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v1475 = v1441[1];
                const v1476 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1476;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v1477 = v1441[1];
                const v1478 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1478;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v1479 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v1479;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1235;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Repay': {
        const v1799 = v630[1];
        const v1800 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v629), null);
        const v1801 = stdlib.fromSome(v1800, stdlib.checkedBigNumberify('./index.rsh:156:60:decimal', stdlib.UInt_max, 0));
        const v1802 = stdlib.lt(v1799, v1801);
        const v1803 = v1802 ? v1799 : v1801;
        const v1822 = stdlib.add(v532, v1803);
        ;
        ;
        const v2072 = stdlib.gt(v1801, stdlib.checkedBigNumberify('./index.rsh:210:27:decimal', stdlib.UInt_max, 0));
        if (v2072) {
          const v2079 = stdlib.sub(v1801, v1803);
          await stdlib.mapSet(map1, v629, v2079);
          let v2080;
          switch (v525[0]) {
            case 'None': {
              const v2081 = v525[1];
              v2080 = false;
              
              break;
              }
            case 'Some': {
              const v2082 = v525[1];
              v2080 = true;
              
              break;
              }
            }
          if (v2080) {
            const v2083 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2084 = stdlib.fromSome(v525, v2083);
            switch (v2084[0]) {
              case 'Borrow': {
                const v2085 = v2084[1];
                const v2086 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2086;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2087 = v2084[1];
                const v2088 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2089 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2091;
                switch (v2089[0]) {
                  case 'None': {
                    const v2092 = v2089[1];
                    v2091 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2093 = v2089[1];
                    v2091 = true;
                    
                    break;
                    }
                  }
                if (v2091) {
                  const v2094 = stdlib.fromSome(v2088, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2095 = stdlib.sub(v2094, v2087);
                  const v2097 = stdlib.fromSome(v2089, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2098 = stdlib.sub(v529, v2097);
                  const v2099 = stdlib.mul(v2095, v2098);
                  const v2100 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2101 = stdlib.fromSome(v2100, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2102 = stdlib.add(v2101, v2099);
                  await stdlib.mapSet(map4, v524, v2102);
                  const v2114 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2114;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2115 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2115;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2116 = v2084[1];
                const v2117 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2117;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2118 = v2084[1];
                const v2119 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2119;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2120 = v2084[1];
                const v2121 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2121;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2122 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2122;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1822;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v2123;
          switch (v525[0]) {
            case 'None': {
              const v2124 = v525[1];
              v2123 = false;
              
              break;
              }
            case 'Some': {
              const v2125 = v525[1];
              v2123 = true;
              
              break;
              }
            }
          if (v2123) {
            const v2126 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2127 = stdlib.fromSome(v525, v2126);
            switch (v2127[0]) {
              case 'Borrow': {
                const v2128 = v2127[1];
                const v2129 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2129;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2130 = v2127[1];
                const v2131 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2132 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2134;
                switch (v2132[0]) {
                  case 'None': {
                    const v2135 = v2132[1];
                    v2134 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2136 = v2132[1];
                    v2134 = true;
                    
                    break;
                    }
                  }
                if (v2134) {
                  const v2137 = stdlib.fromSome(v2131, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2138 = stdlib.sub(v2137, v2130);
                  const v2140 = stdlib.fromSome(v2132, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2141 = stdlib.sub(v529, v2140);
                  const v2142 = stdlib.mul(v2138, v2141);
                  const v2143 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2144 = stdlib.fromSome(v2143, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2145 = stdlib.add(v2144, v2142);
                  await stdlib.mapSet(map4, v524, v2145);
                  const v2157 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2157;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2158 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2158;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2159 = v2127[1];
                const v2160 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2160;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2161 = v2127[1];
                const v2162 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2162;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2163 = v2127[1];
                const v2164 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2164;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2165 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2165;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1822;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Transfer': {
        const v2386 = v630[1];
        const v2393 = v2386.amt;
        const v2395 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v629), null);
        const v2396 = stdlib.fromSome(v2395, stdlib.checkedBigNumberify('./index.rsh:165:73:decimal', stdlib.UInt_max, 0));
        const v2397 = stdlib.le(v2393, v2396);
        const v2398 = v2397 ? v2393 : stdlib.checkedBigNumberify('./index.rsh:165:84:decimal', stdlib.UInt_max, 0);
        ;
        const v2407 = stdlib.add(v533, v2398);
        ;
        const v2425 = v2386.to;
        if (v2397) {
          const v2759 = stdlib.sub(v2407, v2393);
          ;
          const v2763 = stdlib.sub(v2396, v2393);
          await stdlib.mapSet(map0, v629, v2763);
          const v2766 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2425), null);
          const v2767 = stdlib.fromSome(v2766, stdlib.checkedBigNumberify('./index.rsh:220:61:decimal', stdlib.UInt_max, 0));
          const v2769 = stdlib.add(v2767, v2393);
          await stdlib.mapSet(map0, v2425, v2769);
          let v2771;
          switch (v525[0]) {
            case 'None': {
              const v2772 = v525[1];
              v2771 = false;
              
              break;
              }
            case 'Some': {
              const v2773 = v525[1];
              v2771 = true;
              
              break;
              }
            }
          if (v2771) {
            const v2774 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2775 = stdlib.fromSome(v525, v2774);
            switch (v2775[0]) {
              case 'Borrow': {
                const v2776 = v2775[1];
                const v2777 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2777;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2778 = v2775[1];
                const v2779 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2780 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2782;
                switch (v2780[0]) {
                  case 'None': {
                    const v2783 = v2780[1];
                    v2782 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2784 = v2780[1];
                    v2782 = true;
                    
                    break;
                    }
                  }
                if (v2782) {
                  const v2785 = stdlib.fromSome(v2779, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2786 = stdlib.sub(v2785, v2778);
                  const v2788 = stdlib.fromSome(v2780, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2789 = stdlib.sub(v529, v2788);
                  const v2790 = stdlib.mul(v2786, v2789);
                  const v2791 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2792 = stdlib.fromSome(v2791, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2793 = stdlib.add(v2792, v2790);
                  await stdlib.mapSet(map4, v524, v2793);
                  const v2805 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2805;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2759;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2806 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2806;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2759;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2807 = v2775[1];
                const v2808 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2808;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2809 = v2775[1];
                const v2810 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2810;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2811 = v2775[1];
                const v2812 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2812;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2813 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2813;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v2759;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v2814;
          switch (v525[0]) {
            case 'None': {
              const v2815 = v525[1];
              v2814 = false;
              
              break;
              }
            case 'Some': {
              const v2816 = v525[1];
              v2814 = true;
              
              break;
              }
            }
          if (v2814) {
            const v2817 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2818 = stdlib.fromSome(v525, v2817);
            switch (v2818[0]) {
              case 'Borrow': {
                const v2819 = v2818[1];
                const v2820 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2820;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2821 = v2818[1];
                const v2822 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2823 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2825;
                switch (v2823[0]) {
                  case 'None': {
                    const v2826 = v2823[1];
                    v2825 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2827 = v2823[1];
                    v2825 = true;
                    
                    break;
                    }
                  }
                if (v2825) {
                  const v2828 = stdlib.fromSome(v2822, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2829 = stdlib.sub(v2828, v2821);
                  const v2831 = stdlib.fromSome(v2823, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2832 = stdlib.sub(v529, v2831);
                  const v2833 = stdlib.mul(v2829, v2832);
                  const v2834 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2835 = stdlib.fromSome(v2834, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2836 = stdlib.add(v2835, v2833);
                  await stdlib.mapSet(map4, v524, v2836);
                  const v2848 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2848;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2407;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2849 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2849;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2407;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2850 = v2818[1];
                const v2851 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2851;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2852 = v2818[1];
                const v2853 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2853;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2854 = v2818[1];
                const v2855 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2855;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2856 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2856;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v2407;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Withdraw': {
        const v2969 = v630[1];
        const v2983 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v629), null);
        const v2984 = stdlib.fromSome(v2983, stdlib.checkedBigNumberify('./index.rsh:162:63:decimal', stdlib.UInt_max, 0));
        const v2985 = stdlib.le(v2969, v2984);
        const v2986 = v2985 ? v2969 : stdlib.checkedBigNumberify('./index.rsh:162:72:decimal', stdlib.UInt_max, 0);
        ;
        const v2990 = stdlib.add(v533, v2986);
        ;
        const v3442 = stdlib.le(v2969, v532);
        const v3446 = v3442 ? v2985 : false;
        if (v3446) {
          const v3461 = stdlib.sub(v532, v2969);
          ;
          const v3464 = stdlib.sub(v2984, v2969);
          await stdlib.mapSet(map0, v629, v3464);
          let v3465;
          switch (v525[0]) {
            case 'None': {
              const v3466 = v525[1];
              v3465 = false;
              
              break;
              }
            case 'Some': {
              const v3467 = v525[1];
              v3465 = true;
              
              break;
              }
            }
          if (v3465) {
            const v3468 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3469 = stdlib.fromSome(v525, v3468);
            switch (v3469[0]) {
              case 'Borrow': {
                const v3470 = v3469[1];
                const v3471 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3471;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v3472 = v3469[1];
                const v3473 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v3474 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v3476;
                switch (v3474[0]) {
                  case 'None': {
                    const v3477 = v3474[1];
                    v3476 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v3478 = v3474[1];
                    v3476 = true;
                    
                    break;
                    }
                  }
                if (v3476) {
                  const v3479 = stdlib.fromSome(v3473, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v3480 = stdlib.sub(v3479, v3472);
                  const v3482 = stdlib.fromSome(v3474, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v3483 = stdlib.sub(v529, v3482);
                  const v3484 = stdlib.mul(v3480, v3483);
                  const v3485 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v3486 = stdlib.fromSome(v3485, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v3487 = stdlib.add(v3486, v3484);
                  await stdlib.mapSet(map4, v524, v3487);
                  const v3499 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3499;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v3461;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v3500 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3500;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v3461;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v3501 = v3469[1];
                const v3502 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3502;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v3503 = v3469[1];
                const v3504 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3504;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v3505 = v3469[1];
                const v3506 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3506;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v3507 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v3507;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v3461;
            const cv533 = v2990;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v3509;
          switch (v525[0]) {
            case 'None': {
              const v3510 = v525[1];
              v3509 = false;
              
              break;
              }
            case 'Some': {
              const v3511 = v525[1];
              v3509 = true;
              
              break;
              }
            }
          if (v3509) {
            const v3512 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3513 = stdlib.fromSome(v525, v3512);
            switch (v3513[0]) {
              case 'Borrow': {
                const v3514 = v3513[1];
                const v3515 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3515;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v3516 = v3513[1];
                const v3517 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v3518 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v3520;
                switch (v3518[0]) {
                  case 'None': {
                    const v3521 = v3518[1];
                    v3520 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v3522 = v3518[1];
                    v3520 = true;
                    
                    break;
                    }
                  }
                if (v3520) {
                  const v3523 = stdlib.fromSome(v3517, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v3524 = stdlib.sub(v3523, v3516);
                  const v3526 = stdlib.fromSome(v3518, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v3527 = stdlib.sub(v529, v3526);
                  const v3528 = stdlib.mul(v3524, v3527);
                  const v3529 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v3530 = stdlib.fromSome(v3529, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v3531 = stdlib.add(v3530, v3528);
                  await stdlib.mapSet(map4, v524, v3531);
                  const v3543 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3543;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v3544 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3544;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v3545 = v3513[1];
                const v3546 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3546;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v3547 = v3513[1];
                const v3548 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3548;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v3549 = v3513[1];
                const v3550 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3550;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v3551 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v3551;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v2990;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    amt: ctc1,
    to: ctc4
    });
  const ctc6 = stdlib.T_Data({
    Borrow: ctc1,
    Deposit: ctc1,
    Repay: ctc1,
    Transfer: ctc5,
    Withdraw: ctc1
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:104:14:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:104:14:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      
      const {data: [], secs: v498, time: v497, didSend: v24, from: v496 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:104:14:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      
      const v505 = 'token                           ';
      const v506 = 'token   ';
      const v507 = '                                                                                                ';
      const v508 = '                                ';
      const v509 = stdlib.simTokenNew(sim_r, v505, v506, v507, v508, stdlib.checkedBigNumberify('./index.rsh:115:15:decimal', stdlib.UInt_max, 1000), undefined);
      const v510 = await txn1.getOutput('internal', 'v509', ctc3, v509);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v498, time: v497, didSend: v24, from: v496 } = txn1;
  ;
  const v502 = 'First publication by : ';
  const v503 = [v496];
  const v504 = [v502, v503];
  stdlib.protect(ctc0, await interact.log(v504), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:34:30:application call to "liftedInteract" (defined at: ./index.rsh:34:30:application)', 'at ./index.rsh:105:8:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
    msg: 'log',
    who: 'Deployer'
    });
  
  const v505 = 'token                           ';
  const v506 = 'token   ';
  const v507 = '                                                                                                ';
  const v508 = '                                ';
  const v509 = undefined;
  const v510 = await txn1.getOutput('internal', 'v509', ctc3, v509);
  const v514 = 'Pool token balance   : ';
  const v515 = [null, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1000)];
  const v516 = [v514, v515];
  stdlib.protect(ctc0, await interact.log(v516), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:82:30:application call to "liftedInteract" (defined at: ./index.rsh:82:30:application)', 'at ./index.rsh:117:8:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
    msg: 'log',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v496, v510],
    evt_cnt: 0,
    funcNum: 1,
    lct: v497,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:130:14:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      
      const {data: [], secs: v520, time: v519, didSend: v57, from: v518 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:130:14:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v522 = stdlib.addressEq(v496, v518);
      stdlib.assert(v522, {
        at: './index.rsh:130:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v523 = ['None', null];
      const v524 = v518;
      const v525 = v523;
      const v526 = v519;
      const v529 = v520;
      const v532 = stdlib.checkedBigNumberify('./index.rsh:101:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      const v533 = stdlib.checkedBigNumberify('./index.rsh:115:15:decimal', stdlib.UInt_max, 1000);
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v520, time: v519, didSend: v57, from: v518 } = txn2;
  ;
  const v522 = stdlib.addressEq(v496, v518);
  stdlib.assert(v522, {
    at: './index.rsh:130:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v523 = ['None', null];
  let v524 = v518;
  let v525 = v523;
  let v526 = v519;
  let v529 = v520;
  let v532 = stdlib.checkedBigNumberify('./index.rsh:101:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  let v533 = stdlib.checkedBigNumberify('./index.rsh:115:15:decimal', stdlib.UInt_max, 1000);
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v630], secs: v632, time: v631, didSend: v259, from: v629 } = txn3;
    switch (v630[0]) {
      case 'Borrow': {
        const v633 = v630[1];
        ;
        ;
        const v658 = 'Transaction by       : ';
        const v659 = [v629, v630];
        const v660 = [v658, v659];
        stdlib.protect(ctc0, await interact.log(v660), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:45:34:application call to "liftedInteract" (defined at: ./index.rsh:45:34:application)', 'at ./index.rsh:171:12:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
          msg: 'log',
          who: 'Deployer'
          });
        
        const v687 = stdlib.le(v633, v532);
        if (v687) {
          const v692 = 'Borrower borrowed    : ';
          const v693 = [v629, v633];
          const v694 = [v692, v693];
          stdlib.protect(ctc0, await interact.log(v694), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:70:30:application call to "liftedInteract" (defined at: ./index.rsh:70:30:application)', 'at ./index.rsh:202:18:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
            msg: 'log',
            who: 'Deployer'
            });
          
          const v698 = stdlib.sub(v532, v633);
          ;
          const v699 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v629), null);
          const v700 = stdlib.fromSome(v699, stdlib.checkedBigNumberify('./index.rsh:204:51:decimal', stdlib.UInt_max, 0));
          const v701 = stdlib.add(v700, v633);
          await stdlib.mapSet(map1, v629, v701);
          let v702;
          switch (v525[0]) {
            case 'None': {
              const v703 = v525[1];
              v702 = false;
              
              break;
              }
            case 'Some': {
              const v704 = v525[1];
              v702 = true;
              
              break;
              }
            }
          if (v702) {
            const v705 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v706 = stdlib.fromSome(v525, v705);
            switch (v706[0]) {
              case 'Borrow': {
                const v707 = v706[1];
                const v708 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v708;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v709 = v706[1];
                const v710 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v711 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v713;
                switch (v711[0]) {
                  case 'None': {
                    const v714 = v711[1];
                    v713 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v715 = v711[1];
                    v713 = true;
                    
                    break;
                    }
                  }
                if (v713) {
                  const v716 = stdlib.fromSome(v710, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v717 = stdlib.sub(v716, v709);
                  const v719 = stdlib.fromSome(v711, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v720 = stdlib.sub(v529, v719);
                  const v721 = stdlib.mul(v717, v720);
                  const v722 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v723 = stdlib.fromSome(v722, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v724 = stdlib.add(v723, v721);
                  await stdlib.mapSet(map4, v524, v724);
                  const v727 = 'Interest earned      : ';
                  const v728 = [v524, v721];
                  const v729 = [v727, v728];
                  stdlib.protect(ctc0, await interact.log(v729), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:86:30:application call to "liftedInteract" (defined at: ./index.rsh:86:30:application)', 'at ./index.rsh:240:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v730 = ['Some', v724];
                  const v733 = 'Total interest       : ';
                  const v734 = [v524, v730];
                  const v735 = [v733, v734];
                  stdlib.protect(ctc0, await interact.log(v735), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:90:30:application call to "liftedInteract" (defined at: ./index.rsh:90:30:application)', 'at ./index.rsh:241:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v736 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v736;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v698;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v737 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v737;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v698;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v738 = v706[1];
                const v739 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v739;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v740 = v706[1];
                const v741 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v741;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v742 = v706[1];
                const v743 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v743;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v744 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v744;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v698;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v745;
          switch (v525[0]) {
            case 'None': {
              const v746 = v525[1];
              v745 = false;
              
              break;
              }
            case 'Some': {
              const v747 = v525[1];
              v745 = true;
              
              break;
              }
            }
          if (v745) {
            const v748 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v749 = stdlib.fromSome(v525, v748);
            switch (v749[0]) {
              case 'Borrow': {
                const v750 = v749[1];
                const v751 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v751;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v752 = v749[1];
                const v753 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v754 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v756;
                switch (v754[0]) {
                  case 'None': {
                    const v757 = v754[1];
                    v756 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v758 = v754[1];
                    v756 = true;
                    
                    break;
                    }
                  }
                if (v756) {
                  const v759 = stdlib.fromSome(v753, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v760 = stdlib.sub(v759, v752);
                  const v762 = stdlib.fromSome(v754, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v763 = stdlib.sub(v529, v762);
                  const v764 = stdlib.mul(v760, v763);
                  const v765 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v766 = stdlib.fromSome(v765, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v767 = stdlib.add(v766, v764);
                  await stdlib.mapSet(map4, v524, v767);
                  const v770 = 'Interest earned      : ';
                  const v771 = [v524, v764];
                  const v772 = [v770, v771];
                  stdlib.protect(ctc0, await interact.log(v772), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:86:30:application call to "liftedInteract" (defined at: ./index.rsh:86:30:application)', 'at ./index.rsh:240:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v773 = ['Some', v767];
                  const v776 = 'Total interest       : ';
                  const v777 = [v524, v773];
                  const v778 = [v776, v777];
                  stdlib.protect(ctc0, await interact.log(v778), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:90:30:application call to "liftedInteract" (defined at: ./index.rsh:90:30:application)', 'at ./index.rsh:241:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v779 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v779;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v780 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v780;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v781 = v749[1];
                const v782 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v782;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v783 = v749[1];
                const v784 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v784;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v785 = v749[1];
                const v786 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v786;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v787 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v787;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Deposit': {
        const v1216 = v630[1];
        const v1235 = stdlib.add(v532, v1216);
        ;
        ;
        const v1246 = 'Transaction by       : ';
        const v1247 = [v629, v630];
        const v1248 = [v1246, v1247];
        stdlib.protect(ctc0, await interact.log(v1248), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:41:34:application call to "liftedInteract" (defined at: ./index.rsh:41:34:application)', 'at ./index.rsh:171:12:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
          msg: 'log',
          who: 'Deployer'
          });
        
        const v1374 = 'Lender paid          : ';
        const v1375 = [v629, v1216];
        const v1376 = [v1374, v1375];
        stdlib.protect(ctc0, await interact.log(v1376), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:62:30:application call to "liftedInteract" (defined at: ./index.rsh:62:30:application)', 'at ./index.rsh:176:16:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
          msg: 'log',
          who: 'Deployer'
          });
        
        const v1377 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v629), null);
        const v1378 = stdlib.fromSome(v1377, stdlib.checkedBigNumberify('./index.rsh:177:55:decimal', stdlib.UInt_max, 0));
        const v1379 = stdlib.add(v1378, v1216);
        await stdlib.mapSet(map0, v629, v1379);
        const v1381 = stdlib.le(v1216, v533);
        if (v1381) {
          const v1387 = stdlib.sub(v533, v1216);
          ;
          const v1392 = [null, v1387];
          const v1393 = [v514, v1392];
          stdlib.protect(ctc0, await interact.log(v1393), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:82:30:application call to "liftedInteract" (defined at: ./index.rsh:82:30:application)', 'at ./index.rsh:182:18:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
            msg: 'log',
            who: 'Deployer'
            });
          
          let v1394;
          switch (v525[0]) {
            case 'None': {
              const v1395 = v525[1];
              v1394 = false;
              
              break;
              }
            case 'Some': {
              const v1396 = v525[1];
              v1394 = true;
              
              break;
              }
            }
          if (v1394) {
            const v1397 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v1398 = stdlib.fromSome(v525, v1397);
            switch (v1398[0]) {
              case 'Borrow': {
                const v1399 = v1398[1];
                const v1400 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1400;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v1401 = v1398[1];
                const v1402 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v1403 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v1405;
                switch (v1403[0]) {
                  case 'None': {
                    const v1406 = v1403[1];
                    v1405 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v1407 = v1403[1];
                    v1405 = true;
                    
                    break;
                    }
                  }
                if (v1405) {
                  const v1408 = stdlib.fromSome(v1402, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v1409 = stdlib.sub(v1408, v1401);
                  const v1411 = stdlib.fromSome(v1403, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v1412 = stdlib.sub(v529, v1411);
                  const v1413 = stdlib.mul(v1409, v1412);
                  const v1414 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v1415 = stdlib.fromSome(v1414, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v1416 = stdlib.add(v1415, v1413);
                  await stdlib.mapSet(map4, v524, v1416);
                  const v1419 = 'Interest earned      : ';
                  const v1420 = [v524, v1413];
                  const v1421 = [v1419, v1420];
                  stdlib.protect(ctc0, await interact.log(v1421), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:86:30:application call to "liftedInteract" (defined at: ./index.rsh:86:30:application)', 'at ./index.rsh:240:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v1422 = ['Some', v1416];
                  const v1425 = 'Total interest       : ';
                  const v1426 = [v524, v1422];
                  const v1427 = [v1425, v1426];
                  stdlib.protect(ctc0, await interact.log(v1427), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:90:30:application call to "liftedInteract" (defined at: ./index.rsh:90:30:application)', 'at ./index.rsh:241:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v1428 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1428;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v1387;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v1429 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1429;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v1387;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v1430 = v1398[1];
                const v1431 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1431;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v1432 = v1398[1];
                const v1433 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1433;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v1434 = v1398[1];
                const v1435 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1435;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v1436 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v1436;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1235;
            const cv533 = v1387;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v1437;
          switch (v525[0]) {
            case 'None': {
              const v1438 = v525[1];
              v1437 = false;
              
              break;
              }
            case 'Some': {
              const v1439 = v525[1];
              v1437 = true;
              
              break;
              }
            }
          if (v1437) {
            const v1440 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v1441 = stdlib.fromSome(v525, v1440);
            switch (v1441[0]) {
              case 'Borrow': {
                const v1442 = v1441[1];
                const v1443 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1443;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v1444 = v1441[1];
                const v1445 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v1446 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v1448;
                switch (v1446[0]) {
                  case 'None': {
                    const v1449 = v1446[1];
                    v1448 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v1450 = v1446[1];
                    v1448 = true;
                    
                    break;
                    }
                  }
                if (v1448) {
                  const v1451 = stdlib.fromSome(v1445, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v1452 = stdlib.sub(v1451, v1444);
                  const v1454 = stdlib.fromSome(v1446, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v1455 = stdlib.sub(v529, v1454);
                  const v1456 = stdlib.mul(v1452, v1455);
                  const v1457 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v1458 = stdlib.fromSome(v1457, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v1459 = stdlib.add(v1458, v1456);
                  await stdlib.mapSet(map4, v524, v1459);
                  const v1462 = 'Interest earned      : ';
                  const v1463 = [v524, v1456];
                  const v1464 = [v1462, v1463];
                  stdlib.protect(ctc0, await interact.log(v1464), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:86:30:application call to "liftedInteract" (defined at: ./index.rsh:86:30:application)', 'at ./index.rsh:240:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v1465 = ['Some', v1459];
                  const v1468 = 'Total interest       : ';
                  const v1469 = [v524, v1465];
                  const v1470 = [v1468, v1469];
                  stdlib.protect(ctc0, await interact.log(v1470), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:90:30:application call to "liftedInteract" (defined at: ./index.rsh:90:30:application)', 'at ./index.rsh:241:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v1471 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1471;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v1472 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1472;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v1473 = v1441[1];
                const v1474 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1474;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v1475 = v1441[1];
                const v1476 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1476;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v1477 = v1441[1];
                const v1478 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1478;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v1479 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v1479;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1235;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Repay': {
        const v1799 = v630[1];
        const v1800 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v629), null);
        const v1801 = stdlib.fromSome(v1800, stdlib.checkedBigNumberify('./index.rsh:156:60:decimal', stdlib.UInt_max, 0));
        const v1802 = stdlib.lt(v1799, v1801);
        const v1803 = v1802 ? v1799 : v1801;
        const v1822 = stdlib.add(v532, v1803);
        ;
        ;
        const v1838 = 'Transaction by       : ';
        const v1839 = [v629, v630];
        const v1840 = [v1838, v1839];
        stdlib.protect(ctc0, await interact.log(v1840), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:47:34:application call to "liftedInteract" (defined at: ./index.rsh:47:34:application)', 'at ./index.rsh:171:12:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
          msg: 'log',
          who: 'Deployer'
          });
        
        const v2072 = stdlib.gt(v1801, stdlib.checkedBigNumberify('./index.rsh:210:27:decimal', stdlib.UInt_max, 0));
        if (v2072) {
          const v2076 = 'Borrower repaid      : ';
          const v2077 = [v629, v1803];
          const v2078 = [v2076, v2077];
          stdlib.protect(ctc0, await interact.log(v2078), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:74:30:application call to "liftedInteract" (defined at: ./index.rsh:74:30:application)', 'at ./index.rsh:212:18:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
            msg: 'log',
            who: 'Deployer'
            });
          
          const v2079 = stdlib.sub(v1801, v1803);
          await stdlib.mapSet(map1, v629, v2079);
          let v2080;
          switch (v525[0]) {
            case 'None': {
              const v2081 = v525[1];
              v2080 = false;
              
              break;
              }
            case 'Some': {
              const v2082 = v525[1];
              v2080 = true;
              
              break;
              }
            }
          if (v2080) {
            const v2083 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2084 = stdlib.fromSome(v525, v2083);
            switch (v2084[0]) {
              case 'Borrow': {
                const v2085 = v2084[1];
                const v2086 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2086;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2087 = v2084[1];
                const v2088 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2089 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2091;
                switch (v2089[0]) {
                  case 'None': {
                    const v2092 = v2089[1];
                    v2091 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2093 = v2089[1];
                    v2091 = true;
                    
                    break;
                    }
                  }
                if (v2091) {
                  const v2094 = stdlib.fromSome(v2088, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2095 = stdlib.sub(v2094, v2087);
                  const v2097 = stdlib.fromSome(v2089, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2098 = stdlib.sub(v529, v2097);
                  const v2099 = stdlib.mul(v2095, v2098);
                  const v2100 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2101 = stdlib.fromSome(v2100, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2102 = stdlib.add(v2101, v2099);
                  await stdlib.mapSet(map4, v524, v2102);
                  const v2105 = 'Interest earned      : ';
                  const v2106 = [v524, v2099];
                  const v2107 = [v2105, v2106];
                  stdlib.protect(ctc0, await interact.log(v2107), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:86:30:application call to "liftedInteract" (defined at: ./index.rsh:86:30:application)', 'at ./index.rsh:240:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v2108 = ['Some', v2102];
                  const v2111 = 'Total interest       : ';
                  const v2112 = [v524, v2108];
                  const v2113 = [v2111, v2112];
                  stdlib.protect(ctc0, await interact.log(v2113), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:90:30:application call to "liftedInteract" (defined at: ./index.rsh:90:30:application)', 'at ./index.rsh:241:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v2114 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2114;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2115 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2115;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2116 = v2084[1];
                const v2117 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2117;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2118 = v2084[1];
                const v2119 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2119;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2120 = v2084[1];
                const v2121 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2121;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2122 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2122;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1822;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v2123;
          switch (v525[0]) {
            case 'None': {
              const v2124 = v525[1];
              v2123 = false;
              
              break;
              }
            case 'Some': {
              const v2125 = v525[1];
              v2123 = true;
              
              break;
              }
            }
          if (v2123) {
            const v2126 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2127 = stdlib.fromSome(v525, v2126);
            switch (v2127[0]) {
              case 'Borrow': {
                const v2128 = v2127[1];
                const v2129 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2129;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2130 = v2127[1];
                const v2131 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2132 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2134;
                switch (v2132[0]) {
                  case 'None': {
                    const v2135 = v2132[1];
                    v2134 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2136 = v2132[1];
                    v2134 = true;
                    
                    break;
                    }
                  }
                if (v2134) {
                  const v2137 = stdlib.fromSome(v2131, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2138 = stdlib.sub(v2137, v2130);
                  const v2140 = stdlib.fromSome(v2132, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2141 = stdlib.sub(v529, v2140);
                  const v2142 = stdlib.mul(v2138, v2141);
                  const v2143 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2144 = stdlib.fromSome(v2143, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2145 = stdlib.add(v2144, v2142);
                  await stdlib.mapSet(map4, v524, v2145);
                  const v2148 = 'Interest earned      : ';
                  const v2149 = [v524, v2142];
                  const v2150 = [v2148, v2149];
                  stdlib.protect(ctc0, await interact.log(v2150), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:86:30:application call to "liftedInteract" (defined at: ./index.rsh:86:30:application)', 'at ./index.rsh:240:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v2151 = ['Some', v2145];
                  const v2154 = 'Total interest       : ';
                  const v2155 = [v524, v2151];
                  const v2156 = [v2154, v2155];
                  stdlib.protect(ctc0, await interact.log(v2156), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:90:30:application call to "liftedInteract" (defined at: ./index.rsh:90:30:application)', 'at ./index.rsh:241:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v2157 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2157;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2158 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2158;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2159 = v2127[1];
                const v2160 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2160;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2161 = v2127[1];
                const v2162 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2162;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2163 = v2127[1];
                const v2164 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2164;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2165 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2165;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1822;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Transfer': {
        const v2386 = v630[1];
        const v2393 = v2386.amt;
        const v2395 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v629), null);
        const v2396 = stdlib.fromSome(v2395, stdlib.checkedBigNumberify('./index.rsh:165:73:decimal', stdlib.UInt_max, 0));
        const v2397 = stdlib.le(v2393, v2396);
        const v2398 = v2397 ? v2393 : stdlib.checkedBigNumberify('./index.rsh:165:84:decimal', stdlib.UInt_max, 0);
        ;
        const v2407 = stdlib.add(v533, v2398);
        ;
        const v2425 = v2386.to;
        const v2428 = 'Transaction by       : ';
        const v2429 = 'Transfer';
        const v2430 = [v2429, v2393];
        const v2431 = [v629, v2425, v2430];
        const v2432 = [v2428, v2431];
        stdlib.protect(ctc0, await interact.log(v2432), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:49:34:application call to "liftedInteract" (defined at: ./index.rsh:49:34:application)', 'at ./index.rsh:171:12:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
          msg: 'log',
          who: 'Deployer'
          });
        
        if (v2397) {
          const v2759 = stdlib.sub(v2407, v2393);
          ;
          const v2763 = stdlib.sub(v2396, v2393);
          await stdlib.mapSet(map0, v629, v2763);
          const v2766 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2425), null);
          const v2767 = stdlib.fromSome(v2766, stdlib.checkedBigNumberify('./index.rsh:220:61:decimal', stdlib.UInt_max, 0));
          const v2769 = stdlib.add(v2767, v2393);
          await stdlib.mapSet(map0, v2425, v2769);
          let v2771;
          switch (v525[0]) {
            case 'None': {
              const v2772 = v525[1];
              v2771 = false;
              
              break;
              }
            case 'Some': {
              const v2773 = v525[1];
              v2771 = true;
              
              break;
              }
            }
          if (v2771) {
            const v2774 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2775 = stdlib.fromSome(v525, v2774);
            switch (v2775[0]) {
              case 'Borrow': {
                const v2776 = v2775[1];
                const v2777 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2777;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2778 = v2775[1];
                const v2779 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2780 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2782;
                switch (v2780[0]) {
                  case 'None': {
                    const v2783 = v2780[1];
                    v2782 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2784 = v2780[1];
                    v2782 = true;
                    
                    break;
                    }
                  }
                if (v2782) {
                  const v2785 = stdlib.fromSome(v2779, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2786 = stdlib.sub(v2785, v2778);
                  const v2788 = stdlib.fromSome(v2780, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2789 = stdlib.sub(v529, v2788);
                  const v2790 = stdlib.mul(v2786, v2789);
                  const v2791 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2792 = stdlib.fromSome(v2791, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2793 = stdlib.add(v2792, v2790);
                  await stdlib.mapSet(map4, v524, v2793);
                  const v2796 = 'Interest earned      : ';
                  const v2797 = [v524, v2790];
                  const v2798 = [v2796, v2797];
                  stdlib.protect(ctc0, await interact.log(v2798), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:86:30:application call to "liftedInteract" (defined at: ./index.rsh:86:30:application)', 'at ./index.rsh:240:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v2799 = ['Some', v2793];
                  const v2802 = 'Total interest       : ';
                  const v2803 = [v524, v2799];
                  const v2804 = [v2802, v2803];
                  stdlib.protect(ctc0, await interact.log(v2804), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:90:30:application call to "liftedInteract" (defined at: ./index.rsh:90:30:application)', 'at ./index.rsh:241:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v2805 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2805;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2759;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2806 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2806;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2759;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2807 = v2775[1];
                const v2808 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2808;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2809 = v2775[1];
                const v2810 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2810;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2811 = v2775[1];
                const v2812 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2812;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2813 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2813;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v2759;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v2814;
          switch (v525[0]) {
            case 'None': {
              const v2815 = v525[1];
              v2814 = false;
              
              break;
              }
            case 'Some': {
              const v2816 = v525[1];
              v2814 = true;
              
              break;
              }
            }
          if (v2814) {
            const v2817 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2818 = stdlib.fromSome(v525, v2817);
            switch (v2818[0]) {
              case 'Borrow': {
                const v2819 = v2818[1];
                const v2820 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2820;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2821 = v2818[1];
                const v2822 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2823 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2825;
                switch (v2823[0]) {
                  case 'None': {
                    const v2826 = v2823[1];
                    v2825 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2827 = v2823[1];
                    v2825 = true;
                    
                    break;
                    }
                  }
                if (v2825) {
                  const v2828 = stdlib.fromSome(v2822, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2829 = stdlib.sub(v2828, v2821);
                  const v2831 = stdlib.fromSome(v2823, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2832 = stdlib.sub(v529, v2831);
                  const v2833 = stdlib.mul(v2829, v2832);
                  const v2834 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2835 = stdlib.fromSome(v2834, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2836 = stdlib.add(v2835, v2833);
                  await stdlib.mapSet(map4, v524, v2836);
                  const v2839 = 'Interest earned      : ';
                  const v2840 = [v524, v2833];
                  const v2841 = [v2839, v2840];
                  stdlib.protect(ctc0, await interact.log(v2841), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:86:30:application call to "liftedInteract" (defined at: ./index.rsh:86:30:application)', 'at ./index.rsh:240:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v2842 = ['Some', v2836];
                  const v2845 = 'Total interest       : ';
                  const v2846 = [v524, v2842];
                  const v2847 = [v2845, v2846];
                  stdlib.protect(ctc0, await interact.log(v2847), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:90:30:application call to "liftedInteract" (defined at: ./index.rsh:90:30:application)', 'at ./index.rsh:241:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v2848 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2848;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2407;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2849 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2849;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2407;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2850 = v2818[1];
                const v2851 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2851;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2852 = v2818[1];
                const v2853 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2853;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2854 = v2818[1];
                const v2855 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2855;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2856 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2856;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v2407;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Withdraw': {
        const v2969 = v630[1];
        const v2983 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v629), null);
        const v2984 = stdlib.fromSome(v2983, stdlib.checkedBigNumberify('./index.rsh:162:63:decimal', stdlib.UInt_max, 0));
        const v2985 = stdlib.le(v2969, v2984);
        const v2986 = v2985 ? v2969 : stdlib.checkedBigNumberify('./index.rsh:162:72:decimal', stdlib.UInt_max, 0);
        ;
        const v2990 = stdlib.add(v533, v2986);
        ;
        const v3018 = 'Transaction by       : ';
        const v3019 = [v629, v630];
        const v3020 = [v3018, v3019];
        stdlib.protect(ctc0, await interact.log(v3020), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:43:34:application call to "liftedInteract" (defined at: ./index.rsh:43:34:application)', 'at ./index.rsh:171:12:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
          msg: 'log',
          who: 'Deployer'
          });
        
        const v3442 = stdlib.le(v2969, v532);
        const v3446 = v3442 ? v2985 : false;
        if (v3446) {
          const v3449 = 'Lender withdrew      : ';
          const v3450 = [v629, v2969];
          const v3451 = [v3449, v3450];
          stdlib.protect(ctc0, await interact.log(v3451), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:66:30:application call to "liftedInteract" (defined at: ./index.rsh:66:30:application)', 'at ./index.rsh:191:18:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
            msg: 'log',
            who: 'Deployer'
            });
          
          const v3456 = [null, v2990];
          const v3457 = [v514, v3456];
          stdlib.protect(ctc0, await interact.log(v3457), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:82:30:application call to "liftedInteract" (defined at: ./index.rsh:82:30:application)', 'at ./index.rsh:192:18:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
            msg: 'log',
            who: 'Deployer'
            });
          
          const v3461 = stdlib.sub(v532, v2969);
          ;
          const v3464 = stdlib.sub(v2984, v2969);
          await stdlib.mapSet(map0, v629, v3464);
          let v3465;
          switch (v525[0]) {
            case 'None': {
              const v3466 = v525[1];
              v3465 = false;
              
              break;
              }
            case 'Some': {
              const v3467 = v525[1];
              v3465 = true;
              
              break;
              }
            }
          if (v3465) {
            const v3468 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3469 = stdlib.fromSome(v525, v3468);
            switch (v3469[0]) {
              case 'Borrow': {
                const v3470 = v3469[1];
                const v3471 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3471;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v3472 = v3469[1];
                const v3473 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v3474 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v3476;
                switch (v3474[0]) {
                  case 'None': {
                    const v3477 = v3474[1];
                    v3476 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v3478 = v3474[1];
                    v3476 = true;
                    
                    break;
                    }
                  }
                if (v3476) {
                  const v3479 = stdlib.fromSome(v3473, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v3480 = stdlib.sub(v3479, v3472);
                  const v3482 = stdlib.fromSome(v3474, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v3483 = stdlib.sub(v529, v3482);
                  const v3484 = stdlib.mul(v3480, v3483);
                  const v3485 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v3486 = stdlib.fromSome(v3485, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v3487 = stdlib.add(v3486, v3484);
                  await stdlib.mapSet(map4, v524, v3487);
                  const v3490 = 'Interest earned      : ';
                  const v3491 = [v524, v3484];
                  const v3492 = [v3490, v3491];
                  stdlib.protect(ctc0, await interact.log(v3492), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:86:30:application call to "liftedInteract" (defined at: ./index.rsh:86:30:application)', 'at ./index.rsh:240:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v3493 = ['Some', v3487];
                  const v3496 = 'Total interest       : ';
                  const v3497 = [v524, v3493];
                  const v3498 = [v3496, v3497];
                  stdlib.protect(ctc0, await interact.log(v3498), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:90:30:application call to "liftedInteract" (defined at: ./index.rsh:90:30:application)', 'at ./index.rsh:241:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v3499 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3499;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v3461;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v3500 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3500;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v3461;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v3501 = v3469[1];
                const v3502 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3502;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v3503 = v3469[1];
                const v3504 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3504;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v3505 = v3469[1];
                const v3506 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3506;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v3507 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v3507;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v3461;
            const cv533 = v2990;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v3509;
          switch (v525[0]) {
            case 'None': {
              const v3510 = v525[1];
              v3509 = false;
              
              break;
              }
            case 'Some': {
              const v3511 = v525[1];
              v3509 = true;
              
              break;
              }
            }
          if (v3509) {
            const v3512 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3513 = stdlib.fromSome(v525, v3512);
            switch (v3513[0]) {
              case 'Borrow': {
                const v3514 = v3513[1];
                const v3515 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3515;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v3516 = v3513[1];
                const v3517 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v3518 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v3520;
                switch (v3518[0]) {
                  case 'None': {
                    const v3521 = v3518[1];
                    v3520 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v3522 = v3518[1];
                    v3520 = true;
                    
                    break;
                    }
                  }
                if (v3520) {
                  const v3523 = stdlib.fromSome(v3517, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v3524 = stdlib.sub(v3523, v3516);
                  const v3526 = stdlib.fromSome(v3518, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v3527 = stdlib.sub(v529, v3526);
                  const v3528 = stdlib.mul(v3524, v3527);
                  const v3529 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v3530 = stdlib.fromSome(v3529, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v3531 = stdlib.add(v3530, v3528);
                  await stdlib.mapSet(map4, v524, v3531);
                  const v3534 = 'Interest earned      : ';
                  const v3535 = [v524, v3528];
                  const v3536 = [v3534, v3535];
                  stdlib.protect(ctc0, await interact.log(v3536), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:86:30:application call to "liftedInteract" (defined at: ./index.rsh:86:30:application)', 'at ./index.rsh:240:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v3537 = ['Some', v3531];
                  const v3540 = 'Total interest       : ';
                  const v3541 = [v524, v3537];
                  const v3542 = [v3540, v3541];
                  stdlib.protect(ctc0, await interact.log(v3542), {
                    at: './index.rsh:1:39:application',
                    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:90:30:application call to "liftedInteract" (defined at: ./index.rsh:90:30:application)', 'at ./index.rsh:241:20:application call to "log" (defined at: ./index.rsh:32:24:function exp)'],
                    msg: 'log',
                    who: 'Deployer'
                    });
                  
                  const v3543 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3543;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v3544 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3544;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v3545 = v3513[1];
                const v3546 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3546;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v3547 = v3513[1];
                const v3548 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3548;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v3549 = v3513[1];
                const v3550 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3550;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v3551 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v3551;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v2990;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function Lender(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Lender expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Lender expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Object({
    amt: ctc1,
    to: ctc4
    });
  const ctc6 = stdlib.T_Data({
    Borrow: ctc1,
    Deposit: ctc1,
    Repay: ctc1,
    Transfer: ctc5,
    Withdraw: ctc1
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v498, time: v497, didSend: v24, from: v496 } = txn1;
  ;
  const v505 = 'token                           ';
  const v506 = 'token   ';
  const v507 = '                                                                                                ';
  const v508 = '                                ';
  const v509 = undefined;
  const v510 = await txn1.getOutput('internal', 'v509', ctc3, v509);
  stdlib.protect(ctc0, await interact.informTokenId(v510), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:128:34:application call to "liftedInteract" (defined at: ./index.rsh:128:34:application)'],
    msg: 'informTokenId',
    who: 'Lender'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v520, time: v519, didSend: v57, from: v518 } = txn2;
  ;
  const v522 = stdlib.addressEq(v496, v518);
  stdlib.assert(v522, {
    at: './index.rsh:130:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Lender'
    });
  const v523 = ['None', null];
  let v524 = v518;
  let v525 = v523;
  let v526 = v519;
  let v529 = v520;
  let v532 = stdlib.checkedBigNumberify('./index.rsh:101:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  let v533 = stdlib.checkedBigNumberify('./index.rsh:115:15:decimal', stdlib.UInt_max, 1000);
  
  while (await (async () => {
    
    return true;})()) {
    const v571 = ctc.selfAddress();
    const v573 = stdlib.protect(ctc6, await interact.getMsg(), {
      at: './index.rsh:144:49:application',
      fs: ['at ./index.rsh:143:20:application call to [unknown function] (defined at: ./index.rsh:143:24:function exp)'],
      msg: 'getMsg',
      who: 'Lender'
      });
    
    let v603;
    switch (v573[0]) {
      case 'Borrow': {
        const v604 = v573[1];
        v603 = stdlib.checkedBigNumberify('./index.rsh:155:31:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Deposit': {
        const v605 = v573[1];
        v603 = v605;
        
        break;
        }
      case 'Repay': {
        const v606 = v573[1];
        const v607 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v571), null);
        const v608 = stdlib.fromSome(v607, stdlib.checkedBigNumberify('./index.rsh:156:60:decimal', stdlib.UInt_max, 0));
        const v609 = stdlib.lt(v606, v608);
        const v610 = v609 ? v606 : v608;
        v603 = v610;
        
        break;
        }
      case 'Transfer': {
        const v611 = v573[1];
        v603 = stdlib.checkedBigNumberify('./index.rsh:157:31:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Withdraw': {
        const v612 = v573[1];
        v603 = stdlib.checkedBigNumberify('./index.rsh:154:31:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      }
    let v613;
    switch (v573[0]) {
      case 'Borrow': {
        const v614 = v573[1];
        v613 = stdlib.checkedBigNumberify('./index.rsh:164:33:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Deposit': {
        const v615 = v573[1];
        v613 = stdlib.checkedBigNumberify('./index.rsh:161:33:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Repay': {
        const v616 = v573[1];
        v613 = stdlib.checkedBigNumberify('./index.rsh:163:33:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Transfer': {
        const v617 = v573[1];
        const v618 = v617.amt;
        const v620 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v571), null);
        const v621 = stdlib.fromSome(v620, stdlib.checkedBigNumberify('./index.rsh:165:73:decimal', stdlib.UInt_max, 0));
        const v622 = stdlib.le(v618, v621);
        const v623 = v622 ? v618 : stdlib.checkedBigNumberify('./index.rsh:165:84:decimal', stdlib.UInt_max, 0);
        v613 = v623;
        
        break;
        }
      case 'Withdraw': {
        const v624 = v573[1];
        const v625 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v571), null);
        const v626 = stdlib.fromSome(v625, stdlib.checkedBigNumberify('./index.rsh:162:63:decimal', stdlib.UInt_max, 0));
        const v627 = stdlib.le(v624, v626);
        const v628 = v627 ? v624 : stdlib.checkedBigNumberify('./index.rsh:162:72:decimal', stdlib.UInt_max, 0);
        v613 = v628;
        
        break;
        }
      }
    
    const txn3 = await (ctc.sendrecv({
      args: [v510, v524, v525, v529, v532, v533, v573],
      evt_cnt: 1,
      funcNum: 3,
      lct: v526,
      onlyIf: true,
      out_tys: [ctc6],
      pay: [v603, [[v613, v510]]],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        stdlib.simMapDupe(sim_r, 3, map3);
        stdlib.simMapDupe(sim_r, 4, map4);
        stdlib.simMapDupe(sim_r, 5, map5);
        
        const {data: [v630], secs: v632, time: v631, didSend: v259, from: v629 } = txn3;
        
        switch (v630[0]) {
          case 'Borrow': {
            const v633 = v630[1];
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:155:31:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:164:33:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: v510
              });
            const v687 = stdlib.le(v633, v532);
            if (v687) {
              const v698 = stdlib.sub(v532, v633);
              sim_r.txns.push({
                amt: v633,
                kind: 'from',
                to: v629,
                tok: undefined
                });
              const v699 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v629), null);
              const v700 = stdlib.fromSome(v699, stdlib.checkedBigNumberify('./index.rsh:204:51:decimal', stdlib.UInt_max, 0));
              const v701 = stdlib.add(v700, v633);
              await stdlib.simMapSet(sim_r, 1, v629, v701);
              let v702;
              switch (v525[0]) {
                case 'None': {
                  const v703 = v525[1];
                  v702 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v704 = v525[1];
                  v702 = true;
                  
                  break;
                  }
                }
              if (v702) {
                const v705 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v706 = stdlib.fromSome(v525, v705);
                switch (v706[0]) {
                  case 'Borrow': {
                    const v707 = v706[1];
                    const v708 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v708;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v698;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v709 = v706[1];
                    const v710 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v711 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v713;
                    switch (v711[0]) {
                      case 'None': {
                        const v714 = v711[1];
                        v713 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v715 = v711[1];
                        v713 = true;
                        
                        break;
                        }
                      }
                    if (v713) {
                      const v716 = stdlib.fromSome(v710, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v717 = stdlib.sub(v716, v709);
                      const v719 = stdlib.fromSome(v711, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v720 = stdlib.sub(v529, v719);
                      const v721 = stdlib.mul(v717, v720);
                      const v722 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v723 = stdlib.fromSome(v722, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v724 = stdlib.add(v723, v721);
                      await stdlib.simMapSet(sim_r, 4, v524, v724);
                      const v736 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v736;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v698;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v737 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v737;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v698;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v738 = v706[1];
                    const v739 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v739;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v698;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v740 = v706[1];
                    const v741 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v741;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v698;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v742 = v706[1];
                    const v743 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v743;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v698;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v744 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v744;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            else {
              let v745;
              switch (v525[0]) {
                case 'None': {
                  const v746 = v525[1];
                  v745 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v747 = v525[1];
                  v745 = true;
                  
                  break;
                  }
                }
              if (v745) {
                const v748 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v749 = stdlib.fromSome(v525, v748);
                switch (v749[0]) {
                  case 'Borrow': {
                    const v750 = v749[1];
                    const v751 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v751;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v752 = v749[1];
                    const v753 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v754 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v756;
                    switch (v754[0]) {
                      case 'None': {
                        const v757 = v754[1];
                        v756 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v758 = v754[1];
                        v756 = true;
                        
                        break;
                        }
                      }
                    if (v756) {
                      const v759 = stdlib.fromSome(v753, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v760 = stdlib.sub(v759, v752);
                      const v762 = stdlib.fromSome(v754, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v763 = stdlib.sub(v529, v762);
                      const v764 = stdlib.mul(v760, v763);
                      const v765 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v766 = stdlib.fromSome(v765, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v767 = stdlib.add(v766, v764);
                      await stdlib.simMapSet(sim_r, 4, v524, v767);
                      const v779 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v779;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v780 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v780;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v781 = v749[1];
                    const v782 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v782;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v783 = v749[1];
                    const v784 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v784;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v785 = v749[1];
                    const v786 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v786;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v787 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v787;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            break;
            }
          case 'Deposit': {
            const v1216 = v630[1];
            const v1235 = stdlib.add(v532, v1216);
            sim_r.txns.push({
              amt: v1216,
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:161:33:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: v510
              });
            const v1377 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v629), null);
            const v1378 = stdlib.fromSome(v1377, stdlib.checkedBigNumberify('./index.rsh:177:55:decimal', stdlib.UInt_max, 0));
            const v1379 = stdlib.add(v1378, v1216);
            await stdlib.simMapSet(sim_r, 0, v629, v1379);
            const v1381 = stdlib.le(v1216, v533);
            if (v1381) {
              const v1387 = stdlib.sub(v533, v1216);
              sim_r.txns.push({
                amt: v1216,
                kind: 'from',
                to: v629,
                tok: v510
                });
              let v1394;
              switch (v525[0]) {
                case 'None': {
                  const v1395 = v525[1];
                  v1394 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1396 = v525[1];
                  v1394 = true;
                  
                  break;
                  }
                }
              if (v1394) {
                const v1397 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v1398 = stdlib.fromSome(v525, v1397);
                switch (v1398[0]) {
                  case 'Borrow': {
                    const v1399 = v1398[1];
                    const v1400 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1400;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v1387;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v1401 = v1398[1];
                    const v1402 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v1403 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v1405;
                    switch (v1403[0]) {
                      case 'None': {
                        const v1406 = v1403[1];
                        v1405 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v1407 = v1403[1];
                        v1405 = true;
                        
                        break;
                        }
                      }
                    if (v1405) {
                      const v1408 = stdlib.fromSome(v1402, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v1409 = stdlib.sub(v1408, v1401);
                      const v1411 = stdlib.fromSome(v1403, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v1412 = stdlib.sub(v529, v1411);
                      const v1413 = stdlib.mul(v1409, v1412);
                      const v1414 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v1415 = stdlib.fromSome(v1414, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v1416 = stdlib.add(v1415, v1413);
                      await stdlib.simMapSet(sim_r, 4, v524, v1416);
                      const v1428 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v1428;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1235;
                      const cv533 = v1387;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v1429 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v1429;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1235;
                      const cv533 = v1387;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v1430 = v1398[1];
                    const v1431 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1431;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v1387;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v1432 = v1398[1];
                    const v1433 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1433;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v1387;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v1434 = v1398[1];
                    const v1435 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1435;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v1387;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v1436 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1436;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            else {
              let v1437;
              switch (v525[0]) {
                case 'None': {
                  const v1438 = v525[1];
                  v1437 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1439 = v525[1];
                  v1437 = true;
                  
                  break;
                  }
                }
              if (v1437) {
                const v1440 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v1441 = stdlib.fromSome(v525, v1440);
                switch (v1441[0]) {
                  case 'Borrow': {
                    const v1442 = v1441[1];
                    const v1443 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1443;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v1444 = v1441[1];
                    const v1445 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v1446 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v1448;
                    switch (v1446[0]) {
                      case 'None': {
                        const v1449 = v1446[1];
                        v1448 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v1450 = v1446[1];
                        v1448 = true;
                        
                        break;
                        }
                      }
                    if (v1448) {
                      const v1451 = stdlib.fromSome(v1445, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v1452 = stdlib.sub(v1451, v1444);
                      const v1454 = stdlib.fromSome(v1446, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v1455 = stdlib.sub(v529, v1454);
                      const v1456 = stdlib.mul(v1452, v1455);
                      const v1457 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v1458 = stdlib.fromSome(v1457, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v1459 = stdlib.add(v1458, v1456);
                      await stdlib.simMapSet(sim_r, 4, v524, v1459);
                      const v1471 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v1471;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1235;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v1472 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v1472;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1235;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v1473 = v1441[1];
                    const v1474 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1474;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v1475 = v1441[1];
                    const v1476 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1476;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v1477 = v1441[1];
                    const v1478 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v1478;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1235;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v1479 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1479;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            break;
            }
          case 'Repay': {
            const v1799 = v630[1];
            const v1800 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v629), null);
            const v1801 = stdlib.fromSome(v1800, stdlib.checkedBigNumberify('./index.rsh:156:60:decimal', stdlib.UInt_max, 0));
            const v1802 = stdlib.lt(v1799, v1801);
            const v1803 = v1802 ? v1799 : v1801;
            const v1822 = stdlib.add(v532, v1803);
            sim_r.txns.push({
              amt: v1803,
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:163:33:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: v510
              });
            const v2072 = stdlib.gt(v1801, stdlib.checkedBigNumberify('./index.rsh:210:27:decimal', stdlib.UInt_max, 0));
            if (v2072) {
              const v2079 = stdlib.sub(v1801, v1803);
              await stdlib.simMapSet(sim_r, 1, v629, v2079);
              let v2080;
              switch (v525[0]) {
                case 'None': {
                  const v2081 = v525[1];
                  v2080 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v2082 = v525[1];
                  v2080 = true;
                  
                  break;
                  }
                }
              if (v2080) {
                const v2083 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v2084 = stdlib.fromSome(v525, v2083);
                switch (v2084[0]) {
                  case 'Borrow': {
                    const v2085 = v2084[1];
                    const v2086 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2086;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v2087 = v2084[1];
                    const v2088 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v2089 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v2091;
                    switch (v2089[0]) {
                      case 'None': {
                        const v2092 = v2089[1];
                        v2091 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v2093 = v2089[1];
                        v2091 = true;
                        
                        break;
                        }
                      }
                    if (v2091) {
                      const v2094 = stdlib.fromSome(v2088, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v2095 = stdlib.sub(v2094, v2087);
                      const v2097 = stdlib.fromSome(v2089, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v2098 = stdlib.sub(v529, v2097);
                      const v2099 = stdlib.mul(v2095, v2098);
                      const v2100 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v2101 = stdlib.fromSome(v2100, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v2102 = stdlib.add(v2101, v2099);
                      await stdlib.simMapSet(sim_r, 4, v524, v2102);
                      const v2114 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2114;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1822;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v2115 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2115;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1822;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v2116 = v2084[1];
                    const v2117 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2117;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v2118 = v2084[1];
                    const v2119 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2119;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v2120 = v2084[1];
                    const v2121 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2121;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v2122 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2122;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            else {
              let v2123;
              switch (v525[0]) {
                case 'None': {
                  const v2124 = v525[1];
                  v2123 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v2125 = v525[1];
                  v2123 = true;
                  
                  break;
                  }
                }
              if (v2123) {
                const v2126 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v2127 = stdlib.fromSome(v525, v2126);
                switch (v2127[0]) {
                  case 'Borrow': {
                    const v2128 = v2127[1];
                    const v2129 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2129;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v2130 = v2127[1];
                    const v2131 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v2132 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v2134;
                    switch (v2132[0]) {
                      case 'None': {
                        const v2135 = v2132[1];
                        v2134 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v2136 = v2132[1];
                        v2134 = true;
                        
                        break;
                        }
                      }
                    if (v2134) {
                      const v2137 = stdlib.fromSome(v2131, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v2138 = stdlib.sub(v2137, v2130);
                      const v2140 = stdlib.fromSome(v2132, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v2141 = stdlib.sub(v529, v2140);
                      const v2142 = stdlib.mul(v2138, v2141);
                      const v2143 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v2144 = stdlib.fromSome(v2143, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v2145 = stdlib.add(v2144, v2142);
                      await stdlib.simMapSet(sim_r, 4, v524, v2145);
                      const v2157 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2157;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1822;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v2158 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2158;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v1822;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v2159 = v2127[1];
                    const v2160 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2160;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v2161 = v2127[1];
                    const v2162 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2162;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v2163 = v2127[1];
                    const v2164 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2164;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v1822;
                    const cv533 = v533;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v2165 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2165;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            break;
            }
          case 'Transfer': {
            const v2386 = v630[1];
            const v2393 = v2386.amt;
            const v2395 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v629), null);
            const v2396 = stdlib.fromSome(v2395, stdlib.checkedBigNumberify('./index.rsh:165:73:decimal', stdlib.UInt_max, 0));
            const v2397 = stdlib.le(v2393, v2396);
            const v2398 = v2397 ? v2393 : stdlib.checkedBigNumberify('./index.rsh:165:84:decimal', stdlib.UInt_max, 0);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:157:31:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v2407 = stdlib.add(v533, v2398);
            sim_r.txns.push({
              amt: v2398,
              kind: 'to',
              tok: v510
              });
            const v2425 = v2386.to;
            if (v2397) {
              const v2759 = stdlib.sub(v2407, v2393);
              sim_r.txns.push({
                amt: v2393,
                kind: 'from',
                to: v2425,
                tok: v510
                });
              const v2763 = stdlib.sub(v2396, v2393);
              await stdlib.simMapSet(sim_r, 0, v629, v2763);
              const v2766 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2425), null);
              const v2767 = stdlib.fromSome(v2766, stdlib.checkedBigNumberify('./index.rsh:220:61:decimal', stdlib.UInt_max, 0));
              const v2769 = stdlib.add(v2767, v2393);
              await stdlib.simMapSet(sim_r, 0, v2425, v2769);
              
              let v2771;
              switch (v525[0]) {
                case 'None': {
                  const v2772 = v525[1];
                  v2771 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v2773 = v525[1];
                  v2771 = true;
                  
                  break;
                  }
                }
              if (v2771) {
                const v2774 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v2775 = stdlib.fromSome(v525, v2774);
                switch (v2775[0]) {
                  case 'Borrow': {
                    const v2776 = v2775[1];
                    const v2777 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2777;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2759;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v2778 = v2775[1];
                    const v2779 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v2780 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v2782;
                    switch (v2780[0]) {
                      case 'None': {
                        const v2783 = v2780[1];
                        v2782 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v2784 = v2780[1];
                        v2782 = true;
                        
                        break;
                        }
                      }
                    if (v2782) {
                      const v2785 = stdlib.fromSome(v2779, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v2786 = stdlib.sub(v2785, v2778);
                      const v2788 = stdlib.fromSome(v2780, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v2789 = stdlib.sub(v529, v2788);
                      const v2790 = stdlib.mul(v2786, v2789);
                      const v2791 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v2792 = stdlib.fromSome(v2791, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v2793 = stdlib.add(v2792, v2790);
                      await stdlib.simMapSet(sim_r, 4, v524, v2793);
                      const v2805 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2805;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2759;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v2806 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2806;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2759;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v2807 = v2775[1];
                    const v2808 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2808;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2759;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v2809 = v2775[1];
                    const v2810 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2810;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2759;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v2811 = v2775[1];
                    const v2812 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2812;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2759;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v2813 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2813;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            else {
              let v2814;
              switch (v525[0]) {
                case 'None': {
                  const v2815 = v525[1];
                  v2814 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v2816 = v525[1];
                  v2814 = true;
                  
                  break;
                  }
                }
              if (v2814) {
                const v2817 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v2818 = stdlib.fromSome(v525, v2817);
                switch (v2818[0]) {
                  case 'Borrow': {
                    const v2819 = v2818[1];
                    const v2820 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2820;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2407;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v2821 = v2818[1];
                    const v2822 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v2823 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v2825;
                    switch (v2823[0]) {
                      case 'None': {
                        const v2826 = v2823[1];
                        v2825 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v2827 = v2823[1];
                        v2825 = true;
                        
                        break;
                        }
                      }
                    if (v2825) {
                      const v2828 = stdlib.fromSome(v2822, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v2829 = stdlib.sub(v2828, v2821);
                      const v2831 = stdlib.fromSome(v2823, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v2832 = stdlib.sub(v529, v2831);
                      const v2833 = stdlib.mul(v2829, v2832);
                      const v2834 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v2835 = stdlib.fromSome(v2834, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v2836 = stdlib.add(v2835, v2833);
                      await stdlib.simMapSet(sim_r, 4, v524, v2836);
                      const v2848 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2848;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2407;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v2849 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v2849;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2407;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v2850 = v2818[1];
                    const v2851 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2851;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2407;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v2852 = v2818[1];
                    const v2853 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2853;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2407;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v2854 = v2818[1];
                    const v2855 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v2855;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2407;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v2856 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2856;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            break;
            }
          case 'Withdraw': {
            const v2969 = v630[1];
            const v2983 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v629), null);
            const v2984 = stdlib.fromSome(v2983, stdlib.checkedBigNumberify('./index.rsh:162:63:decimal', stdlib.UInt_max, 0));
            const v2985 = stdlib.le(v2969, v2984);
            const v2986 = v2985 ? v2969 : stdlib.checkedBigNumberify('./index.rsh:162:72:decimal', stdlib.UInt_max, 0);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:154:31:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v2990 = stdlib.add(v533, v2986);
            sim_r.txns.push({
              amt: v2986,
              kind: 'to',
              tok: v510
              });
            const v3442 = stdlib.le(v2969, v532);
            const v3446 = v3442 ? v2985 : false;
            if (v3446) {
              const v3461 = stdlib.sub(v532, v2969);
              sim_r.txns.push({
                amt: v2969,
                kind: 'from',
                to: v629,
                tok: undefined
                });
              const v3464 = stdlib.sub(v2984, v2969);
              await stdlib.simMapSet(sim_r, 0, v629, v3464);
              let v3465;
              switch (v525[0]) {
                case 'None': {
                  const v3466 = v525[1];
                  v3465 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v3467 = v525[1];
                  v3465 = true;
                  
                  break;
                  }
                }
              if (v3465) {
                const v3468 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v3469 = stdlib.fromSome(v525, v3468);
                switch (v3469[0]) {
                  case 'Borrow': {
                    const v3470 = v3469[1];
                    const v3471 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3471;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v3461;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v3472 = v3469[1];
                    const v3473 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v3474 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v3476;
                    switch (v3474[0]) {
                      case 'None': {
                        const v3477 = v3474[1];
                        v3476 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v3478 = v3474[1];
                        v3476 = true;
                        
                        break;
                        }
                      }
                    if (v3476) {
                      const v3479 = stdlib.fromSome(v3473, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v3480 = stdlib.sub(v3479, v3472);
                      const v3482 = stdlib.fromSome(v3474, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v3483 = stdlib.sub(v529, v3482);
                      const v3484 = stdlib.mul(v3480, v3483);
                      const v3485 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v3486 = stdlib.fromSome(v3485, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v3487 = stdlib.add(v3486, v3484);
                      await stdlib.simMapSet(sim_r, 4, v524, v3487);
                      const v3499 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v3499;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v3461;
                      const cv533 = v2990;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v3500 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v3500;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v3461;
                      const cv533 = v2990;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v3501 = v3469[1];
                    const v3502 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3502;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v3461;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v3503 = v3469[1];
                    const v3504 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3504;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v3461;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v3505 = v3469[1];
                    const v3506 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3506;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v3461;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v3507 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3507;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            else {
              let v3509;
              switch (v525[0]) {
                case 'None': {
                  const v3510 = v525[1];
                  v3509 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v3511 = v525[1];
                  v3509 = true;
                  
                  break;
                  }
                }
              if (v3509) {
                const v3512 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v3513 = stdlib.fromSome(v525, v3512);
                switch (v3513[0]) {
                  case 'Borrow': {
                    const v3514 = v3513[1];
                    const v3515 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3515;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Deposit': {
                    const v3516 = v3513[1];
                    const v3517 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v524), null);
                    const v3518 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v524), null);
                    await stdlib.simMapSet(sim_r, 2, v524, v529);
                    let v3520;
                    switch (v3518[0]) {
                      case 'None': {
                        const v3521 = v3518[1];
                        v3520 = false;
                        
                        break;
                        }
                      case 'Some': {
                        const v3522 = v3518[1];
                        v3520 = true;
                        
                        break;
                        }
                      }
                    if (v3520) {
                      const v3523 = stdlib.fromSome(v3517, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                      const v3524 = stdlib.sub(v3523, v3516);
                      const v3526 = stdlib.fromSome(v3518, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                      const v3527 = stdlib.sub(v529, v3526);
                      const v3528 = stdlib.mul(v3524, v3527);
                      const v3529 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v524), null);
                      const v3530 = stdlib.fromSome(v3529, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                      const v3531 = stdlib.add(v3530, v3528);
                      await stdlib.simMapSet(sim_r, 4, v524, v3531);
                      const v3543 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v3543;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2990;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    else {
                      const v3544 = ['Some', v630];
                      const cv524 = v629;
                      const cv525 = v3544;
                      const cv526 = v631;
                      const cv529 = v632;
                      const cv532 = v532;
                      const cv533 = v2990;
                      
                      await (async () => {
                        const v524 = cv524;
                        const v525 = cv525;
                        const v526 = cv526;
                        const v529 = cv529;
                        const v532 = cv532;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          
                          return true;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();}
                    break;
                    }
                  case 'Repay': {
                    const v3545 = v3513[1];
                    const v3546 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3546;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Transfer': {
                    const v3547 = v3513[1];
                    const v3548 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3548;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  case 'Withdraw': {
                    const v3549 = v3513[1];
                    const v3550 = ['Some', v630];
                    const cv524 = v629;
                    const cv525 = v3550;
                    const cv526 = v631;
                    const cv529 = v632;
                    const cv532 = v532;
                    const cv533 = v2990;
                    
                    await (async () => {
                      const v524 = cv524;
                      const v525 = cv525;
                      const v526 = cv526;
                      const v529 = cv529;
                      const v532 = cv532;
                      const v533 = cv533;
                      
                      if (await (async () => {
                        
                        return true;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }})();
                    break;
                    }
                  }}
              else {
                const v3551 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3551;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                await (async () => {
                  const v524 = cv524;
                  const v525 = cv525;
                  const v526 = cv526;
                  const v529 = cv529;
                  const v532 = cv532;
                  const v533 = cv533;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}}
            break;
            }
          }
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc1, ctc6],
      waitIfNotPresent: false
      }));
    const {data: [v630], secs: v632, time: v631, didSend: v259, from: v629 } = txn3;
    switch (v630[0]) {
      case 'Borrow': {
        const v633 = v630[1];
        ;
        ;
        const v687 = stdlib.le(v633, v532);
        if (v687) {
          const v698 = stdlib.sub(v532, v633);
          ;
          const v699 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v629), null);
          const v700 = stdlib.fromSome(v699, stdlib.checkedBigNumberify('./index.rsh:204:51:decimal', stdlib.UInt_max, 0));
          const v701 = stdlib.add(v700, v633);
          await stdlib.mapSet(map1, v629, v701);
          let v702;
          switch (v525[0]) {
            case 'None': {
              const v703 = v525[1];
              v702 = false;
              
              break;
              }
            case 'Some': {
              const v704 = v525[1];
              v702 = true;
              
              break;
              }
            }
          if (v702) {
            const v705 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v706 = stdlib.fromSome(v525, v705);
            switch (v706[0]) {
              case 'Borrow': {
                const v707 = v706[1];
                const v708 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v708;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v709 = v706[1];
                const v710 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v711 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v713;
                switch (v711[0]) {
                  case 'None': {
                    const v714 = v711[1];
                    v713 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v715 = v711[1];
                    v713 = true;
                    
                    break;
                    }
                  }
                if (v713) {
                  const v716 = stdlib.fromSome(v710, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v717 = stdlib.sub(v716, v709);
                  const v719 = stdlib.fromSome(v711, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v720 = stdlib.sub(v529, v719);
                  const v721 = stdlib.mul(v717, v720);
                  const v722 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v723 = stdlib.fromSome(v722, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v724 = stdlib.add(v723, v721);
                  await stdlib.mapSet(map4, v524, v724);
                  const v736 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v736;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v698;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v737 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v737;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v698;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v738 = v706[1];
                const v739 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v739;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v740 = v706[1];
                const v741 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v741;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v742 = v706[1];
                const v743 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v743;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v698;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v744 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v744;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v698;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v745;
          switch (v525[0]) {
            case 'None': {
              const v746 = v525[1];
              v745 = false;
              
              break;
              }
            case 'Some': {
              const v747 = v525[1];
              v745 = true;
              
              break;
              }
            }
          if (v745) {
            const v748 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v749 = stdlib.fromSome(v525, v748);
            switch (v749[0]) {
              case 'Borrow': {
                const v750 = v749[1];
                const v751 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v751;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v752 = v749[1];
                const v753 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v754 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v756;
                switch (v754[0]) {
                  case 'None': {
                    const v757 = v754[1];
                    v756 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v758 = v754[1];
                    v756 = true;
                    
                    break;
                    }
                  }
                if (v756) {
                  const v759 = stdlib.fromSome(v753, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v760 = stdlib.sub(v759, v752);
                  const v762 = stdlib.fromSome(v754, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v763 = stdlib.sub(v529, v762);
                  const v764 = stdlib.mul(v760, v763);
                  const v765 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v766 = stdlib.fromSome(v765, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v767 = stdlib.add(v766, v764);
                  await stdlib.mapSet(map4, v524, v767);
                  const v779 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v779;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v780 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v780;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v781 = v749[1];
                const v782 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v782;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v783 = v749[1];
                const v784 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v784;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v785 = v749[1];
                const v786 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v786;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v787 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v787;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Deposit': {
        const v1216 = v630[1];
        const v1235 = stdlib.add(v532, v1216);
        ;
        ;
        const v1377 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v629), null);
        const v1378 = stdlib.fromSome(v1377, stdlib.checkedBigNumberify('./index.rsh:177:55:decimal', stdlib.UInt_max, 0));
        const v1379 = stdlib.add(v1378, v1216);
        await stdlib.mapSet(map0, v629, v1379);
        const v1381 = stdlib.le(v1216, v533);
        if (v1381) {
          const v1387 = stdlib.sub(v533, v1216);
          ;
          let v1394;
          switch (v525[0]) {
            case 'None': {
              const v1395 = v525[1];
              v1394 = false;
              
              break;
              }
            case 'Some': {
              const v1396 = v525[1];
              v1394 = true;
              
              break;
              }
            }
          if (v1394) {
            const v1397 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v1398 = stdlib.fromSome(v525, v1397);
            switch (v1398[0]) {
              case 'Borrow': {
                const v1399 = v1398[1];
                const v1400 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1400;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v1401 = v1398[1];
                const v1402 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v1403 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v1405;
                switch (v1403[0]) {
                  case 'None': {
                    const v1406 = v1403[1];
                    v1405 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v1407 = v1403[1];
                    v1405 = true;
                    
                    break;
                    }
                  }
                if (v1405) {
                  const v1408 = stdlib.fromSome(v1402, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v1409 = stdlib.sub(v1408, v1401);
                  const v1411 = stdlib.fromSome(v1403, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v1412 = stdlib.sub(v529, v1411);
                  const v1413 = stdlib.mul(v1409, v1412);
                  const v1414 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v1415 = stdlib.fromSome(v1414, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v1416 = stdlib.add(v1415, v1413);
                  await stdlib.mapSet(map4, v524, v1416);
                  const v1428 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1428;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v1387;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v1429 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1429;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v1387;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v1430 = v1398[1];
                const v1431 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1431;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v1432 = v1398[1];
                const v1433 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1433;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v1434 = v1398[1];
                const v1435 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1435;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v1387;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v1436 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v1436;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1235;
            const cv533 = v1387;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v1437;
          switch (v525[0]) {
            case 'None': {
              const v1438 = v525[1];
              v1437 = false;
              
              break;
              }
            case 'Some': {
              const v1439 = v525[1];
              v1437 = true;
              
              break;
              }
            }
          if (v1437) {
            const v1440 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v1441 = stdlib.fromSome(v525, v1440);
            switch (v1441[0]) {
              case 'Borrow': {
                const v1442 = v1441[1];
                const v1443 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1443;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v1444 = v1441[1];
                const v1445 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v1446 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v1448;
                switch (v1446[0]) {
                  case 'None': {
                    const v1449 = v1446[1];
                    v1448 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v1450 = v1446[1];
                    v1448 = true;
                    
                    break;
                    }
                  }
                if (v1448) {
                  const v1451 = stdlib.fromSome(v1445, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v1452 = stdlib.sub(v1451, v1444);
                  const v1454 = stdlib.fromSome(v1446, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v1455 = stdlib.sub(v529, v1454);
                  const v1456 = stdlib.mul(v1452, v1455);
                  const v1457 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v1458 = stdlib.fromSome(v1457, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v1459 = stdlib.add(v1458, v1456);
                  await stdlib.mapSet(map4, v524, v1459);
                  const v1471 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1471;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v1472 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v1472;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1235;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v1473 = v1441[1];
                const v1474 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1474;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v1475 = v1441[1];
                const v1476 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1476;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v1477 = v1441[1];
                const v1478 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v1478;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1235;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v1479 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v1479;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1235;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Repay': {
        const v1799 = v630[1];
        const v1800 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v629), null);
        const v1801 = stdlib.fromSome(v1800, stdlib.checkedBigNumberify('./index.rsh:156:60:decimal', stdlib.UInt_max, 0));
        const v1802 = stdlib.lt(v1799, v1801);
        const v1803 = v1802 ? v1799 : v1801;
        const v1822 = stdlib.add(v532, v1803);
        ;
        ;
        const v2072 = stdlib.gt(v1801, stdlib.checkedBigNumberify('./index.rsh:210:27:decimal', stdlib.UInt_max, 0));
        if (v2072) {
          const v2079 = stdlib.sub(v1801, v1803);
          await stdlib.mapSet(map1, v629, v2079);
          let v2080;
          switch (v525[0]) {
            case 'None': {
              const v2081 = v525[1];
              v2080 = false;
              
              break;
              }
            case 'Some': {
              const v2082 = v525[1];
              v2080 = true;
              
              break;
              }
            }
          if (v2080) {
            const v2083 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2084 = stdlib.fromSome(v525, v2083);
            switch (v2084[0]) {
              case 'Borrow': {
                const v2085 = v2084[1];
                const v2086 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2086;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2087 = v2084[1];
                const v2088 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2089 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2091;
                switch (v2089[0]) {
                  case 'None': {
                    const v2092 = v2089[1];
                    v2091 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2093 = v2089[1];
                    v2091 = true;
                    
                    break;
                    }
                  }
                if (v2091) {
                  const v2094 = stdlib.fromSome(v2088, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2095 = stdlib.sub(v2094, v2087);
                  const v2097 = stdlib.fromSome(v2089, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2098 = stdlib.sub(v529, v2097);
                  const v2099 = stdlib.mul(v2095, v2098);
                  const v2100 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2101 = stdlib.fromSome(v2100, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2102 = stdlib.add(v2101, v2099);
                  await stdlib.mapSet(map4, v524, v2102);
                  const v2114 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2114;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2115 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2115;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2116 = v2084[1];
                const v2117 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2117;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2118 = v2084[1];
                const v2119 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2119;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2120 = v2084[1];
                const v2121 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2121;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2122 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2122;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1822;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v2123;
          switch (v525[0]) {
            case 'None': {
              const v2124 = v525[1];
              v2123 = false;
              
              break;
              }
            case 'Some': {
              const v2125 = v525[1];
              v2123 = true;
              
              break;
              }
            }
          if (v2123) {
            const v2126 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2127 = stdlib.fromSome(v525, v2126);
            switch (v2127[0]) {
              case 'Borrow': {
                const v2128 = v2127[1];
                const v2129 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2129;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2130 = v2127[1];
                const v2131 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2132 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2134;
                switch (v2132[0]) {
                  case 'None': {
                    const v2135 = v2132[1];
                    v2134 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2136 = v2132[1];
                    v2134 = true;
                    
                    break;
                    }
                  }
                if (v2134) {
                  const v2137 = stdlib.fromSome(v2131, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2138 = stdlib.sub(v2137, v2130);
                  const v2140 = stdlib.fromSome(v2132, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2141 = stdlib.sub(v529, v2140);
                  const v2142 = stdlib.mul(v2138, v2141);
                  const v2143 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2144 = stdlib.fromSome(v2143, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2145 = stdlib.add(v2144, v2142);
                  await stdlib.mapSet(map4, v524, v2145);
                  const v2157 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2157;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2158 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2158;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v1822;
                  const cv533 = v533;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2159 = v2127[1];
                const v2160 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2160;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2161 = v2127[1];
                const v2162 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2162;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2163 = v2127[1];
                const v2164 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2164;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v1822;
                const cv533 = v533;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2165 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2165;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v1822;
            const cv533 = v533;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Transfer': {
        const v2386 = v630[1];
        const v2393 = v2386.amt;
        const v2395 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v629), null);
        const v2396 = stdlib.fromSome(v2395, stdlib.checkedBigNumberify('./index.rsh:165:73:decimal', stdlib.UInt_max, 0));
        const v2397 = stdlib.le(v2393, v2396);
        const v2398 = v2397 ? v2393 : stdlib.checkedBigNumberify('./index.rsh:165:84:decimal', stdlib.UInt_max, 0);
        ;
        const v2407 = stdlib.add(v533, v2398);
        ;
        const v2425 = v2386.to;
        if (v2397) {
          const v2759 = stdlib.sub(v2407, v2393);
          ;
          const v2763 = stdlib.sub(v2396, v2393);
          await stdlib.mapSet(map0, v629, v2763);
          const v2766 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2425), null);
          const v2767 = stdlib.fromSome(v2766, stdlib.checkedBigNumberify('./index.rsh:220:61:decimal', stdlib.UInt_max, 0));
          const v2769 = stdlib.add(v2767, v2393);
          await stdlib.mapSet(map0, v2425, v2769);
          stdlib.protect(ctc0, await interact.printTokenBalance(v510), {
            at: './index.rsh:1:39:application',
            fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:221:48:application call to "liftedInteract" (defined at: ./index.rsh:221:48:application)'],
            msg: 'printTokenBalance',
            who: 'Lender'
            });
          
          let v2771;
          switch (v525[0]) {
            case 'None': {
              const v2772 = v525[1];
              v2771 = false;
              
              break;
              }
            case 'Some': {
              const v2773 = v525[1];
              v2771 = true;
              
              break;
              }
            }
          if (v2771) {
            const v2774 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2775 = stdlib.fromSome(v525, v2774);
            switch (v2775[0]) {
              case 'Borrow': {
                const v2776 = v2775[1];
                const v2777 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2777;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2778 = v2775[1];
                const v2779 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2780 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2782;
                switch (v2780[0]) {
                  case 'None': {
                    const v2783 = v2780[1];
                    v2782 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2784 = v2780[1];
                    v2782 = true;
                    
                    break;
                    }
                  }
                if (v2782) {
                  const v2785 = stdlib.fromSome(v2779, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2786 = stdlib.sub(v2785, v2778);
                  const v2788 = stdlib.fromSome(v2780, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2789 = stdlib.sub(v529, v2788);
                  const v2790 = stdlib.mul(v2786, v2789);
                  const v2791 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2792 = stdlib.fromSome(v2791, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2793 = stdlib.add(v2792, v2790);
                  await stdlib.mapSet(map4, v524, v2793);
                  const v2805 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2805;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2759;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2806 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2806;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2759;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2807 = v2775[1];
                const v2808 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2808;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2809 = v2775[1];
                const v2810 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2810;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2811 = v2775[1];
                const v2812 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2812;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2759;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2813 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2813;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v2759;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v2814;
          switch (v525[0]) {
            case 'None': {
              const v2815 = v525[1];
              v2814 = false;
              
              break;
              }
            case 'Some': {
              const v2816 = v525[1];
              v2814 = true;
              
              break;
              }
            }
          if (v2814) {
            const v2817 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v2818 = stdlib.fromSome(v525, v2817);
            switch (v2818[0]) {
              case 'Borrow': {
                const v2819 = v2818[1];
                const v2820 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2820;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v2821 = v2818[1];
                const v2822 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v2823 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v2825;
                switch (v2823[0]) {
                  case 'None': {
                    const v2826 = v2823[1];
                    v2825 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v2827 = v2823[1];
                    v2825 = true;
                    
                    break;
                    }
                  }
                if (v2825) {
                  const v2828 = stdlib.fromSome(v2822, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v2829 = stdlib.sub(v2828, v2821);
                  const v2831 = stdlib.fromSome(v2823, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v2832 = stdlib.sub(v529, v2831);
                  const v2833 = stdlib.mul(v2829, v2832);
                  const v2834 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v2835 = stdlib.fromSome(v2834, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v2836 = stdlib.add(v2835, v2833);
                  await stdlib.mapSet(map4, v524, v2836);
                  const v2848 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2848;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2407;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v2849 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v2849;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2407;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v2850 = v2818[1];
                const v2851 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2851;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v2852 = v2818[1];
                const v2853 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2853;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v2854 = v2818[1];
                const v2855 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v2855;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2407;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v2856 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v2856;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v2407;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      case 'Withdraw': {
        const v2969 = v630[1];
        const v2983 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v629), null);
        const v2984 = stdlib.fromSome(v2983, stdlib.checkedBigNumberify('./index.rsh:162:63:decimal', stdlib.UInt_max, 0));
        const v2985 = stdlib.le(v2969, v2984);
        const v2986 = v2985 ? v2969 : stdlib.checkedBigNumberify('./index.rsh:162:72:decimal', stdlib.UInt_max, 0);
        ;
        const v2990 = stdlib.add(v533, v2986);
        ;
        const v3442 = stdlib.le(v2969, v532);
        const v3446 = v3442 ? v2985 : false;
        if (v3446) {
          const v3461 = stdlib.sub(v532, v2969);
          ;
          const v3464 = stdlib.sub(v2984, v2969);
          await stdlib.mapSet(map0, v629, v3464);
          let v3465;
          switch (v525[0]) {
            case 'None': {
              const v3466 = v525[1];
              v3465 = false;
              
              break;
              }
            case 'Some': {
              const v3467 = v525[1];
              v3465 = true;
              
              break;
              }
            }
          if (v3465) {
            const v3468 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3469 = stdlib.fromSome(v525, v3468);
            switch (v3469[0]) {
              case 'Borrow': {
                const v3470 = v3469[1];
                const v3471 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3471;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v3472 = v3469[1];
                const v3473 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v3474 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v3476;
                switch (v3474[0]) {
                  case 'None': {
                    const v3477 = v3474[1];
                    v3476 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v3478 = v3474[1];
                    v3476 = true;
                    
                    break;
                    }
                  }
                if (v3476) {
                  const v3479 = stdlib.fromSome(v3473, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v3480 = stdlib.sub(v3479, v3472);
                  const v3482 = stdlib.fromSome(v3474, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v3483 = stdlib.sub(v529, v3482);
                  const v3484 = stdlib.mul(v3480, v3483);
                  const v3485 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v3486 = stdlib.fromSome(v3485, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v3487 = stdlib.add(v3486, v3484);
                  await stdlib.mapSet(map4, v524, v3487);
                  const v3499 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3499;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v3461;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v3500 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3500;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v3461;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v3501 = v3469[1];
                const v3502 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3502;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v3503 = v3469[1];
                const v3504 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3504;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v3505 = v3469[1];
                const v3506 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3506;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v3461;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v3507 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v3507;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v3461;
            const cv533 = v2990;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        else {
          let v3509;
          switch (v525[0]) {
            case 'None': {
              const v3510 = v525[1];
              v3509 = false;
              
              break;
              }
            case 'Some': {
              const v3511 = v525[1];
              v3509 = true;
              
              break;
              }
            }
          if (v3509) {
            const v3512 = ['Deposit', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3513 = stdlib.fromSome(v525, v3512);
            switch (v3513[0]) {
              case 'Borrow': {
                const v3514 = v3513[1];
                const v3515 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3515;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Deposit': {
                const v3516 = v3513[1];
                const v3517 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v524), null);
                const v3518 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v524), null);
                await stdlib.mapSet(map2, v524, v529);
                let v3520;
                switch (v3518[0]) {
                  case 'None': {
                    const v3521 = v3518[1];
                    v3520 = false;
                    
                    break;
                    }
                  case 'Some': {
                    const v3522 = v3518[1];
                    v3520 = true;
                    
                    break;
                    }
                  }
                if (v3520) {
                  const v3523 = stdlib.fromSome(v3517, stdlib.checkedBigNumberify('./index.rsh:235:57:decimal', stdlib.UInt_max, 0));
                  const v3524 = stdlib.sub(v3523, v3516);
                  const v3526 = stdlib.fromSome(v3518, stdlib.checkedBigNumberify('./index.rsh:236:83:decimal', stdlib.UInt_max, 0));
                  const v3527 = stdlib.sub(v529, v3526);
                  const v3528 = stdlib.mul(v3524, v3527);
                  const v3529 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v524), null);
                  const v3530 = stdlib.fromSome(v3529, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', stdlib.UInt_max, 0));
                  const v3531 = stdlib.add(v3530, v3528);
                  await stdlib.mapSet(map4, v524, v3531);
                  const v3543 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3543;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                else {
                  const v3544 = ['Some', v630];
                  const cv524 = v629;
                  const cv525 = v3544;
                  const cv526 = v631;
                  const cv529 = v632;
                  const cv532 = v532;
                  const cv533 = v2990;
                  
                  v524 = cv524;
                  v525 = cv525;
                  v526 = cv526;
                  v529 = cv529;
                  v532 = cv532;
                  v533 = cv533;
                  
                  continue;}
                break;
                }
              case 'Repay': {
                const v3545 = v3513[1];
                const v3546 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3546;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Transfer': {
                const v3547 = v3513[1];
                const v3548 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3548;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              case 'Withdraw': {
                const v3549 = v3513[1];
                const v3550 = ['Some', v630];
                const cv524 = v629;
                const cv525 = v3550;
                const cv526 = v631;
                const cv529 = v632;
                const cv532 = v532;
                const cv533 = v2990;
                
                v524 = cv524;
                v525 = cv525;
                v526 = cv526;
                v529 = cv529;
                v532 = cv532;
                v533 = cv533;
                
                continue;
                break;
                }
              }}
          else {
            const v3551 = ['Some', v630];
            const cv524 = v629;
            const cv525 = v3551;
            const cv526 = v631;
            const cv529 = v632;
            const cv532 = v532;
            const cv533 = v2990;
            
            v524 = cv524;
            v525 = cv525;
            v526 = cv526;
            v529 = cv529;
            v532 = cv532;
            v533 = cv533;
            
            continue;}}
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BSAHAAEEAwLoB6CNBiYFAQEBADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIjUAMRhBFy8nBGRJIls1AYEIWzUCMRkjEkEACTEAKilMZkIXAzYaABdJQQAHIjUDIzUFADYaARc2GgIXNQM2GgM1BEkhBAxAFM9JJQxAFMglEkQkNAESRDQDSSISTDQCEhFEKWRJIls1/0lXCCA1/klXKCo1/UmBUls1/EmBWls1+0mBYls1+kg0BEkVgSkSREk1+UiABFF/HDg0+VCwNPlJNfgiVUkhBAxADItJJQxACJBJJAxABB8kEkQ0+CNbNfciMQBJMRhhQAAFSCpCAAIpYlcACUk19SNbNPUiVU019jT3NPYONfUiNPc09U019DT6NPQINfM09ElBACU0AEkjCDUATEsBOBISRDT/SwE4ERJEJEsBOBASRDIKSwE4FBJESDT3NPsONPUQQQH1NPs09wk18jT3SUEADLGyCCOyEDEAsgezIkgxAElJMRhhQAAFSCpCAAIpYig09jT3CRZQNfFJSDTxTFcJLVApTGY0/Uk18CJVSSMMQAAJIxJEIzXxQgAHSCI18UIAADTxQQF/KzT9STXvVwEpNO8iVU1JNfAiVUkhBAxAAEpJJQxAADBJJAxAABYkEkQ0/zEAKDT5UDIGMgc08jTzQhUISDT/MQAoNPlQMgYyBzTyNPNCFPRINP8xACg0+VAyBjIHNPI080IU4EkjDEABAUg08CNbNe80/kkxGGFAAAVIKkIAAiliVxIJNe40/klJMRhhQAAFSCpCAAIpYig0/BZQNe1JVwASNO1QTFcbG1ApTGY07kk17CJVSSMMQAAJIxJEIzXtQgAHSCI17UIAADTtQQCJNP5JSTEYYUAABUgqQgACKWIoIjT+STEYYUAABUgqQgACKWJXJAlJNewjWzTsIlVNIjT+STEYYUAABUgqQgACKWJXAAlJNewjWzTsIlVNNO8JNPwiNO5JNewjWzTsIlVNCQsIFlA17ElXACQ07FBMVy0JUClMZjT/MQAoNPlQMgYyBzTyNPNCE+w0/zEAKDT5UDIGMgc08jTzQhPZSDT/MQAoNPlQMgYyBzTyNPNCE8U0/zEAKDT5UDIGMgc08jTzQhOyNP1JNfEiVUkjDEAACSMSRCM18kIAB0giNfJCAAA08kEBfys0/Uk18FcBKTTwIlVNSTXxIlVJIQQMQABKSSUMQAAwSSQMQAAWJBJENP8xACg0+VAyBjIHNPs080ITVEg0/zEAKDT5UDIGMgc0+zTzQhNASDT/MQAoNPlQMgYyBzT7NPNCEyxJIwxAAQFINPEjWzXwNP5JMRhhQAAFSCpCAAIpYlcSCTXvNP5JSTEYYUAABUgqQgACKWIoNPwWUDXuSVcAEjTuUExXGxtQKUxmNO9JNe0iVUkjDEAACSMSRCM17kIAB0giNe5CAAA07kEAiTT+SUkxGGFAAAVIKkIAAiliKCI0/kkxGGFAAAVIKkIAAiliVyQJSTXtI1s07SJVTSI0/kkxGGFAAAVIKkIAAiliVwAJSTXtI1s07SJVTTTwCTT8IjTvSTXtI1s07SJVTQkLCBZQNe1JVwAkNO1QTFctCVApTGY0/zEAKDT5UDIGMgc0+zTzQhI4NP8xACg0+VAyBjIHNPs080ISJUg0/zEAKDT5UDIGMgc0+zTzQhIRNP8xACg0+VAyBjIHNPs080IR/kg0+FcBKEk19yJbNfYiMQBJMRhhQAAFSCpCAAIpYlcACUk19CNbNPQiVU019TT2NPUONfQiNPY09E018zT6NPMINfI080lBACU0AEkjCDUATEsBOBISRDT/SwE4ERJEJEsBOBASRDIKSwE4FBJESDT3VwggNfE09EECPDTyNPYJNfA09klBABCxshIkshA08bIUNP+yEbMiSDEASUkxGGFAAAVIKkIAAiliKDT1NPYJFlA170lINO9MVwktUClMZjTxSUkxGGFAAAVIKkIAAiliKCI08UkxGGFAAAVIKkIAAiliVwAJSTXvI1s07yJVTTT2CBZQNe9JSDTvTFcJLVApTGY0/Uk17iJVSSMMQAAJIxJEIzXvQgAHSCI170IAADTvQQF/KzT9STXtVwEpNO0iVU1JNe4iVUkhBAxAAEpJJQxAADBJJAxAABYkEkQ0/zEAKDT5UDIGMgc0+zTwQhCdSDT/MQAoNPlQMgYyBzT7NPBCEIlINP8xACg0+VAyBjIHNPs08EIQdUkjDEABAUg07iNbNe00/kkxGGFAAAVIKkIAAiliVxIJNew0/klJMRhhQAAFSCpCAAIpYig0/BZQNetJVwASNOtQTFcbG1ApTGY07Ek16iJVSSMMQAAJIxJEIzXrQgAHSCI160IAADTrQQCJNP5JSTEYYUAABUgqQgACKWIoIjT+STEYYUAABUgqQgACKWJXJAlJNeojWzTqIlVNIjT+STEYYUAABUgqQgACKWJXAAlJNeojWzTqIlVNNO0JNPwiNOxJNeojWzTqIlVNCQsIFlA16klXACQ06lBMVy0JUClMZjT/MQAoNPlQMgYyBzT7NPBCD4E0/zEAKDT5UDIGMgc0+zTwQg9uSDT/MQAoNPlQMgYyBzT7NPBCD1o0/zEAKDT5UDIGMgc0+zTwQg9HNP1JNe8iVUkjDEAACSMSRCM18EIAB0giNfBCAAA08EEBfys0/Uk17lcBKTTuIlVNSTXvIlVJIQQMQABKSSUMQAAwSSQMQAAWJBJENP8xACg0+VAyBjIHNPs08kIO6Ug0/zEAKDT5UDIGMgc0+zTyQg7VSDT/MQAoNPlQMgYyBzT7NPJCDsFJIwxAAQFINO8jWzXuNP5JMRhhQAAFSCpCAAIpYlcSCTXtNP5JSTEYYUAABUgqQgACKWIoNPwWUDXsSVcAEjTsUExXGxtQKUxmNO1JNesiVUkjDEAACSMSRCM17EIAB0giNexCAAA07EEAiTT+SUkxGGFAAAVIKkIAAiliKCI0/kkxGGFAAAVIKkIAAiliVyQJSTXrI1s06yJVTSI0/kkxGGFAAAVIKkIAAiliVwAJSTXrI1s06yJVTTTuCTT8IjTtSTXrI1s06yJVTQkLCBZQNetJVwAkNOtQTFctCVApTGY0/zEAKDT5UDIGMgc0+zTyQg3NNP8xACg0+VAyBjIHNPs08kINukg0/zEAKDT5UDIGMgc0+zTyQg2mNP8xACg0+VAyBjIHNPs08kINk0g0+CNbNfciMQBJMRhhQAAFSCpCAAIpYlcJCUk19SNbNPUiVU1JNfY090k09gxNNfU0+zT1CDX0NPVJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINPYiDUEB3jEASUkxGGFAAAVIKkIAAiliKDT2NPUJFlA180lXAAk081BMVxIkUClMZjT9STXyIlVJIwxAAAkjEkQjNfNCAAdIIjXzQgAANPNBAX8rNP1JNfFXASk08SJVTUk18iJVSSEEDEAASkklDEAAMEkkDEAAFiQSRDT/MQAoNPlQMgYyBzT0NPpCDKhINP8xACg0+VAyBjIHNPQ0+kIMlEg0/zEAKDT5UDIGMgc09DT6QgyASSMMQAEBSDTyI1s18TT+STEYYUAABUgqQgACKWJXEgk18DT+SUkxGGFAAAVIKkIAAiliKDT8FlA170lXABI071BMVxsbUClMZjTwSTXuIlVJIwxAAAkjEkQjNe9CAAdIIjXvQgAANO9BAIk0/klJMRhhQAAFSCpCAAIpYigiNP5JMRhhQAAFSCpCAAIpYlckCUk17iNbNO4iVU0iNP5JMRhhQAAFSCpCAAIpYlcACUk17iNbNO4iVU008Qk0/CI08Ek17iNbNO4iVU0JCwgWUDXuSVcAJDTuUExXLQlQKUxmNP8xACg0+VAyBjIHNPQ0+kILjDT/MQAoNPlQMgYyBzT0NPpCC3lINP8xACg0+VAyBjIHNPQ0+kILZTT/MQAoNPlQMgYyBzT0NPpCC1I0/Uk18iJVSSMMQAAJIxJEIzXzQgAHSCI180IAADTzQQF/KzT9STXxVwEpNPEiVU1JNfIiVUkhBAxAAEpJJQxAADBJJAxAABYkEkQ0/zEAKDT5UDIGMgc09DT6Qgr0SDT/MQAoNPlQMgYyBzT0NPpCCuBINP8xACg0+VAyBjIHNPQ0+kIKzEkjDEABAUg08iNbNfE0/kkxGGFAAAVIKkIAAiliVxIJNfA0/klJMRhhQAAFSCpCAAIpYig0/BZQNe9JVwASNO9QTFcbG1ApTGY08Ek17iJVSSMMQAAJIxJEIzXvQgAHSCI170IAADTvQQCJNP5JSTEYYUAABUgqQgACKWIoIjT+STEYYUAABUgqQgACKWJXJAlJNe4jWzTuIlVNIjT+STEYYUAABUgqQgACKWJXAAlJNe4jWzTuIlVNNPEJNPwiNPBJNe4jWzTuIlVNCQsIFlA17klXACQ07lBMVy0JUClMZjT/MQAoNPlQMgYyBzT0NPpCCdg0/zEAKDT5UDIGMgc09DT6QgnFSDT/MQAoNPlQMgYyBzT0NPpCCbE0/zEAKDT5UDIGMgc09DT6QgmeSSMMQAQDSDT4I1s19zT7NPcINfY090lBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREgxAElJMRhhQAAFSCpCAAIpYigiMQBJMRhhQAAFSCpCAAIpYlcACUk19SNbNPUiVU009wgWUDX1SUg09UxXCS1QKUxmNPc0+g5BAdI0+jT3CTX1NPdJQQAQsbISJLIQMQCyFDT/shGzIkg0/Uk18yJVSSMMQAAJIxJEIzX0QgAHSCI19EIAADT0QQF/KzT9STXyVwEpNPIiVU1JNfMiVUkhBAxAAEpJJQxAADBJJAxAABYkEkQ0/zEAKDT5UDIGMgc09jT1QgifSDT/MQAoNPlQMgYyBzT2NPVCCItINP8xACg0+VAyBjIHNPY09UIId0kjDEABAUg08yNbNfI0/kkxGGFAAAVIKkIAAiliVxIJNfE0/klJMRhhQAAFSCpCAAIpYig0/BZQNfBJVwASNPBQTFcbG1ApTGY08Uk17yJVSSMMQAAJIxJEIzXwQgAHSCI18EIAADTwQQCJNP5JSTEYYUAABUgqQgACKWIoIjT+STEYYUAABUgqQgACKWJXJAlJNe8jWzTvIlVNIjT+STEYYUAABUgqQgACKWJXAAlJNe8jWzTvIlVNNPIJNPwiNPFJNe8jWzTvIlVNCQsIFlA170lXACQ071BMVy0JUClMZjT/MQAoNPlQMgYyBzT2NPVCB4M0/zEAKDT5UDIGMgc09jT1QgdwSDT/MQAoNPlQMgYyBzT2NPVCB1w0/zEAKDT5UDIGMgc09jT1QgdJNP1JNfQiVUkjDEAACSMSRCM19UIAB0giNfVCAAA09UEBfys0/Uk181cBKTTzIlVNSTX0IlVJIQQMQABKSSUMQAAwSSQMQAAWJBJENP8xACg0+VAyBjIHNPY0+kIG60g0/zEAKDT5UDIGMgc09jT6QgbXSDT/MQAoNPlQMgYyBzT2NPpCBsNJIwxAAQFINPQjWzXzNP5JMRhhQAAFSCpCAAIpYlcSCTXyNP5JSTEYYUAABUgqQgACKWIoNPwWUDXxSVcAEjTxUExXGxtQKUxmNPJJNfAiVUkjDEAACSMSRCM18UIAB0giNfFCAAA08UEAiTT+SUkxGGFAAAVIKkIAAiliKCI0/kkxGGFAAAVIKkIAAiliVyQJSTXwI1s08CJVTSI0/kkxGGFAAAVIKkIAAiliVwAJSTXwI1s08CJVTTTzCTT8IjTySTXwI1s08CJVTQkLCBZQNfBJVwAkNPBQTFctCVApTGY0/zEAKDT5UDIGMgc09jT6QgXPNP8xACg0+VAyBjIHNPY0+kIFvEg0/zEAKDT5UDIGMgc09jT6QgWoNP8xACg0+VAyBjIHNPY0+kIFlUg0+CNbNfc09zT7DkECFDT7NPcJNfY090lBAAyxsggjshAxALIHsyJIMQBJSTEYYUAABUgqQgACKWIoIjEASTEYYUAABUgqQgACKWJXCQlJNfUjWzT1IlVNNPcIFlA19UlXAAk09VBMVxIkUClMZjT9STX0IlVJIwxAAAkjEkQjNfVCAAdIIjX1QgAANPVBAX8rNP1JNfNXASk08yJVTUk19CJVSSEEDEAASkklDEAAMEkkDEAAFiQSRDT/MQAoNPlQMgYyBzT2NPpCBMhINP8xACg0+VAyBjIHNPY0+kIEtEg0/zEAKDT5UDIGMgc09jT6QgSgSSMMQAEBSDT0I1s18zT+STEYYUAABUgqQgACKWJXEgk18jT+SUkxGGFAAAVIKkIAAiliKDT8FlA18UlXABI08VBMVxsbUClMZjTySTXwIlVJIwxAAAkjEkQjNfFCAAdIIjXxQgAANPFBAIk0/klJMRhhQAAFSCpCAAIpYigiNP5JMRhhQAAFSCpCAAIpYlckCUk18CNbNPAiVU0iNP5JMRhhQAAFSCpCAAIpYlcACUk18CNbNPAiVU008wk0/CI08kk18CNbNPAiVU0JCwgWUDXwSVcAJDTwUExXLQlQKUxmNP8xACg0+VAyBjIHNPY0+kIDrDT/MQAoNPlQMgYyBzT2NPpCA5lINP8xACg0+VAyBjIHNPY0+kIDhTT/MQAoNPlQMgYyBzT2NPpCA3I0/Uk19SJVSSMMQAAJIxJEIzX2QgAHSCI19kIAADT2QQF/KzT9STX0VwEpNPQiVU1JNfUiVUkhBAxAAEpJJQxAADBJJAxAABYkEkQ0/zEAKDT5UDIGMgc0+zT6QgMUSDT/MQAoNPlQMgYyBzT7NPpCAwBINP8xACg0+VAyBjIHNPs0+kIC7EkjDEABAUg09SNbNfQ0/kkxGGFAAAVIKkIAAiliVxIJNfM0/klJMRhhQAAFSCpCAAIpYig0/BZQNfJJVwASNPJQTFcbG1ApTGY080k18SJVSSMMQAAJIxJEIzXyQgAHSCI18kIAADTyQQCJNP5JSTEYYUAABUgqQgACKWIoIjT+STEYYUAABUgqQgACKWJXJAlJNfEjWzTxIlVNIjT+STEYYUAABUgqQgACKWJXAAlJNfEjWzTxIlVNNPQJNPwiNPNJNfEjWzTxIlVNCQsIFlA18UlXACQ08VBMVy0JUClMZjT/MQAoNPlQMgYyBzT7NPpCAfg0/zEAKDT5UDIGMgc0+zT6QgHlSDT/MQAoNPlQMgYyBzT7NPpCAdE0/zEAKDT5UDIGMgc0+zT6QgG+SEkjDEAAb0gjNAESRDQDSSISTDQCEhFEKWRJVwAgNf9JgSBbNf5INARJFSISREiABJqLkXSwNP8xABJENP4xAIAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgYyByIhBUIBSEgiNAESRDQDSSISTDQCEhFEJwRINARJFSISREiABF8Nq/qwIQZJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIIQZJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIsSWyECEFsiKBBrIjgAh0b2tlbgAAALIlgCB0b2tlbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALImgGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJzIDsigyCrIps7Q8Nf+ACAAAAAAAAAH9NP8WULA0/zX+MQA0/hZQKUsBVwAoZ0gjNQEyBjUCMRkiEkRCADk1/zX+Nf01/DX7NfpJNfkWNPpQNPtQNP0WUDT+FlA0/xZQKUsBVwBqZ0gkNQEyBjUCMRkiEkRCAAAnBDQBFjQCFlBnNAVBAAqABBUffHU0BlCwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8o=`,
  appClear: `BQ==`,
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 54,
  stateKeys: 1,
  stateSize: 106,
  unsupported: [],
  version: 9,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T8",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Borrow",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Deposit",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Repay",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "_amt",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "_to",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_Transfer",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Withdraw",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T8",
                "name": "v630",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v509",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap3Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap4Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap5Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T8",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Borrow",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Deposit",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Repay",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "_amt",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "_to",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_Transfer",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Withdraw",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T8",
                "name": "v630",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620086cb380380620086cb833981016040819052620000269162000395565b6000808055436003556040805160e08101825260c08101838152815281516020808201845284825280830191909152825160608082018552858252818301869052818501869052838501919091528351918201909352838152918101919091526080810182905260a081019190915260408051835181526020808501511515908201527ff6b2f582026eaf8fd1fe583a836da56a1b30b8bd595170ad494773aa9148b06e910160405180910390a1620000e234156007620002b7565b8051643a37b5b2b760d91b90819052602080830151919091526040808301805160009081905281518401819052905182018190526060840151528251518151928301520160408051601f1981840301815290829052602083810151516001600160c01b031916908301529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252606086015151602084015291016040516020818303038152906040526103e86012604051620001c690620002e1565b620001d79695949392919062000450565b604051809103906000f080158015620001f4573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527fe923a1bd0e3f54a8064387f82c3967b0be29300a251b31e1eb1fe99292edc8d09060200160405180910390a1604080518082018252600060208083018281523380855260a08701516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620002ad929190620002ef565b50505050620004f8565b81620002dd5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b610f75806200775683390190565b828054620002fd90620004bb565b90600052602060002090601f0160209004810192826200032157600085556200036c565b82601f106200033c57805160ff19168380011785556200036c565b828001600101855582156200036c579182015b828111156200036c5782518255916020019190600101906200034f565b506200037a9291506200037e565b5090565b5b808211156200037a57600081556001016200037f565b600060408284031215620003a857600080fd5b604080519081016001600160401b0381118282101715620003d957634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620003f457600080fd5b60208201529392505050565b6000815180845260005b8181101562000428576020818501810151868301820152016200040a565b818111156200043b576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200046560c083018962000400565b828103602084015262000479818962000400565b905082810360408401526200048f818862000400565b90508281036060840152620004a5818762000400565b6080840195909552505060a00152949350505050565b600181811c90821680620004d057607f821691505b60208210811415620004f257634e487b7160e01b600052602260045260246000fd5b50919050565b61724e80620005086000396000f3fe60806040526004361061009a5760003560e01c8063817d57f311610061578063817d57f31461013e578063832307571461015e578063ab53f2c614610173578063acf0cc2214610196578063cadc2e7a146101b6578063dc01fb9d146101d657005b806306dc92ff146100a35780631e93b0f1146100d957806322f62b59146100f85780632c10a1591461010b5780633bc5b7bf1461011e57005b366100a157005b005b3480156100af57600080fd5b506100c36100be366004616b79565b6101f6565b6040516100d09190616bbc565b60405180910390f35b3480156100e557600080fd5b506003545b6040519081526020016100d0565b6100a1610106366004616bec565b610222565b6100a1610119366004616c05565b6158e7565b34801561012a57600080fd5b506100c3610139366004616b79565b615a86565b34801561014a57600080fd5b506100c3610159366004616b79565b615aac565b34801561016a57600080fd5b506001546100ea565b34801561017f57600080fd5b50610188615ad2565b6040516100d0929190616c43565b3480156101a257600080fd5b506100c36101b1366004616b79565b615b6f565b3480156101c257600080fd5b506100c36101d1366004616b79565b615b95565b3480156101e257600080fd5b506100c36101f1366004616b79565b615bbb565b604080516060810182526000808252602082018190529181019190915261021c82615be1565b92915050565b6102326004600054146016615cb3565b61024c8135158061024557506001548235145b6017615cb3565b60008080556002805461025e90616c7d565b80601f016020809104026020016040519081016040528092919081815260200182805461028a90616c7d565b80156102d75780601f106102ac576101008083540402835291602001916102d7565b820191906000526020600020905b8154815290600101906020018083116102ba57829003601f168201915b50505050508060200190518101906102ef9190616d66565b90506102f9616244565b7f2a9041ab7ac854334f6cc4b7e0e6ce2545a9a84bda5a1acd4f53b9532bf3e1b7836040516103289190616ec7565b60405180910390a160006103426040850160208601616f41565b600481111561035357610353616b96565b14156113cc576040830135815261036c3415600c615cb3565b61038661037f3384600001516000615cdd565b600d615cb3565b6080820151815111610bf257805160808301516103a39190616f74565b60208201528051604051339180156108fc02916000818181858888f193505050501580156103d5573d6000803e3d6000fd5b50336000818152600560205260409020805460ff191660019081179091558251916103ff90615cf5565b51600181111561041157610411616b96565b1461041d57600061042b565b61042633615cf5565b604001515b6104359190616f8b565b33600090815260056020526040812060010191909155604083015151600181111561046257610462616b96565b1415610474576000604082015261049b565b6001604083015151600181111561048d5761048d616b96565b141561049b57600160408201525b806040015115610b6f57606081015160019081905250606081015160006040909101819052600160408401515160018111156104d9576104d9616b96565b146104e85781606001516104f2565b8260400151604001515b51600481111561050457610504616b96565b1415610595576080810151600190526105253684900384016020850161700b565b60808201516040015261053661699b565b825181516001600160a01b039091169052602080820180513390526080808501518251840152815143604090910152815142606091909101529184015181519092019190915260a0808501519151015261058f81615d82565b50505050565b60018060408401515160018111156105af576105af616b96565b146105be5781606001516105c8565b8260400151604001515b5160048111156105da576105da616b96565b14156108fd57600160408301515160018111156105f9576105f9616b96565b14610608578060600151610612565b8160400151604001515b6040015160a0820152602082015161062990615e16565b60c08201908152602083810180516001600160a01b03908116600090815260069093526040808420805460ff191660019081179091556060880151935190921684528320810191909155915151909181111561068757610687616b96565b141561069957600060e08201526106c0565b600160c08201515160018111156106b2576106b2616b96565b14156106c057600160e08201525b8060e001511561087a576020828101516001600160a01b03166000908152600890915260409020805460ff1916600190811790915560c0820151518181111561070b5761070b616b96565b14610717576000610721565b8060c00151604001515b82606001516107309190616f74565b60a082015160016107448560200151615ea3565b51600181111561075657610756616b96565b14610762576000610774565b61076f8460200151615ea3565b604001515b61077e9190616f74565b6107889190617076565b60016107978460200151615f30565b5160018111156107a9576107a9616b96565b146107b55760006107c7565b6107c28360200151615f30565b604001515b6107d19190616f8b565b6020838101516001600160a01b03166000908152600890915260409020600190810191909155610100820151819052506108133684900384016020850161700b565b6101008201516040015261082561699b565b825181516001600160a01b0390911690526020808201805133905261010084015181518301528051436040909101528051426060909101529083015181516080015260a0808501519151015261058f81615d82565b610120810151600190526108963684900384016020850161700b565b610120820151604001526108a861699b565b825181516001600160a01b0390911690526020808201805133905261012084015181518301528051436040909101528051426060909101529083015181516080015260a0808501519151015261058f81615d82565b60026001604084015151600181111561091857610918616b96565b14610927578160600151610931565b8260400151604001515b51600481111561094357610943616b96565b14156109cc57610140810151600190526109653684900384016020850161700b565b6101408201516040015261097761699b565b825181516001600160a01b0390911690526020808201805133905261014084015181518301528051436040909101528051426060909101529083015181516080015260a0808501519151015261058f81615d82565b6003600160408401515160018111156109e7576109e7616b96565b146109f6578160600151610a00565b8260400151604001515b516004811115610a1257610a12616b96565b1415610a9b5761016081015160019052610a343684900384016020850161700b565b61016082015160400152610a4661699b565b825181516001600160a01b0390911690526020808201805133905261016084015181518301528051436040909101528051426060909101529083015181516080015260a0808501519151015261058f81615d82565b600460016040840151516001811115610ab657610ab6616b96565b14610ac5578160600151610acf565b8260400151604001515b516004811115610ae157610ae1616b96565b1415610b6a5761018081015160019052610b033684900384016020850161700b565b61018082015160400152610b1561699b565b825181516001600160a01b0390911690526020808201805133905261018084015181518301528051436040909101528051426060909101529083015181516080015260a0808501519151015261058f81615d82565b505050565b6101a081015160019052610b8b3684900384016020850161700b565b6101a082015160400152610b9d61699b565b825181516001600160a01b039091169052602080820180513390526101a084015181518301528051436040909101528051426060909101529083015181516080015260a0808501519151015261058f81615d82565b60006040830151516001811115610c0b57610c0b616b96565b1415610c1e5760006101c0820152610c46565b60016040830151516001811115610c3757610c37616b96565b1415610c465760016101c08201525b806101c0015115611343576101e0810151600190819052506101e08101516000604090910181905260016040840151516001811115610c8757610c87616b96565b14610c9757816101e00151610ca1565b8260400151604001515b516004811115610cb357610cb3616b96565b1415610d425761020081015160019052610cd53684900384016020850161700b565b61020082015160400152610ce761699b565b825181516001600160a01b0390911690526020808201805133905261020084015181519092019190915280514360409091015280514260609091015260808085015182519091015260a0808501519151015261058f81615d82565b6001806040840151516001811115610d5c57610d5c616b96565b14610d6c57816101e00151610d76565b8260400151604001515b516004811115610d8857610d88616b96565b14156110c15760016040830151516001811115610da757610da7616b96565b14610db757806101e00151610dc1565b8160400151604001515b604001516102208201526020820151610dd990615e16565b6102408201908152602083810180516001600160a01b03908116600090815260069093526040808420805460ff1916600190811790915560608801519351909216845283208101919091559151519091811115610e3857610e38616b96565b1415610e4b576000610260820152610e74565b6001610240820151516001811115610e6557610e65616b96565b1415610e745760016102608201525b80610260015115611038576020828101516001600160a01b03166000908152600890915260409020805460ff191660019081179091556102408201515181811115610ec157610ec1616b96565b14610ecd576000610ed8565b806102400151604001515b8260600151610ee79190616f74565b6102208201516001610efc8560200151615ea3565b516001811115610f0e57610f0e616b96565b14610f1a576000610f2c565b610f278460200151615ea3565b604001515b610f369190616f74565b610f409190617076565b6001610f4f8460200151615f30565b516001811115610f6157610f61616b96565b14610f6d576000610f7f565b610f7a8360200151615f30565b604001515b610f899190616f8b565b6020838101516001600160a01b0316600090815260089091526040902060019081019190915561028082015181905250610fcb3684900384016020850161700b565b61028082015160400152610fdd61699b565b825181516001600160a01b0390911690526020808201805133905261028084015181519092019190915280514360409091015280514260609091015260808085015182519091015260a0808501519151015261058f81615d82565b6102a0810151600190526110543684900384016020850161700b565b6102a08201516040015261106661699b565b825181516001600160a01b039091169052602080820180513390526102a084015181519092019190915280514360409091015280514260609091015260808085015182519091015260a0808501519151015261058f81615d82565b6002600160408401515160018111156110dc576110dc616b96565b146110ec57816101e001516110f6565b8260400151604001515b51600481111561110857611108616b96565b1415611197576102c08101516001905261112a3684900384016020850161700b565b6102c08201516040015261113c61699b565b825181516001600160a01b039091169052602080820180513390526102c084015181519092019190915280514360409091015280514260609091015260808085015182519091015260a0808501519151015261058f81615d82565b6003600160408401515160018111156111b2576111b2616b96565b146111c257816101e001516111cc565b8260400151604001515b5160048111156111de576111de616b96565b141561126d576102e0810151600190526112003684900384016020850161700b565b6102e08201516040015261121261699b565b825181516001600160a01b039091169052602080820180513390526102e084015181519092019190915280514360409091015280514260609091015260808085015182519091015260a0808501519151015261058f81615d82565b60046001604084015151600181111561128857611288616b96565b1461129857816101e001516112a2565b8260400151604001515b5160048111156112b4576112b4616b96565b1415610b6a57610300810151600190526112d63684900384016020850161700b565b610300820151604001526112e861699b565b825181516001600160a01b0390911690526020808201805133905261030084015181519092019190915280514360409091015280514260609091015260808085015182519091015260a0808501519151015261058f81615d82565b6103208101516001905261135f3684900384016020850161700b565b6103208201516040015261137161699b565b825181516001600160a01b0390911690526020808201805133905261032084015181519092019190915280514360409091015280514260609091015260808085015182519091015260a0808501519151015261058f81615d82565b60016113de6040850160208601616f41565b60048111156113ef576113ef616b96565b14156124bb576060830135610340820181905260808301516114119190616f8b565b61036082015261034081015161142a903414600e615cb3565b61144461143d3384600001516000615cdd565b600f615cb3565b336000818152600460205260409020805460ff191660019081179091556103408301519161147190615ea3565b51600181111561148357611483616b96565b1461148f57600061149d565b61149833615ea3565b604001515b6114a79190616f8b565b3360009081526004602052604090206001015560a082015161034082015111611ce1578061034001518260a001516114df9190616f74565b61038082015281516103408201516114f991903390615fbd565b6000604083015151600181111561151257611512616b96565b14156115255760006103a082015261154d565b6001604083015151600181111561153e5761153e616b96565b141561154d5760016103a08201525b806103a0015115611c56576103c0810151600190819052506103c0810151600060409091018190526001604084015151600181111561158e5761158e616b96565b1461159e57816103c001516115a8565b8260400151604001515b5160048111156115ba576115ba616b96565b141561164b576103e0810151600190526115dc3684900384016020850161700b565b6103e0820151604001526115ee61699b565b825181516001600160a01b039091169052602080820180513390526103e0840151815190920191909152805143604090910152805142606090910152610360830151815160800152610380830151905160a0015261058f81615d82565b600180604084015151600181111561166557611665616b96565b1461167557816103c0015161167f565b8260400151604001515b51600481111561169157611691616b96565b14156119ce57600160408301515160018111156116b0576116b0616b96565b146116c057806103c001516116ca565b8160400151604001515b6040015161040082015260208201516116e290615e16565b6104208201908152602083810180516001600160a01b03908116600090815260069093526040808420805460ff191660019081179091556060880151935190921684528320810191909155915151909181111561174157611741616b96565b141561175457600061044082015261177d565b600161042082015151600181111561176e5761176e616b96565b141561177d5760016104408201525b80610440015115611943576020828101516001600160a01b03166000908152600890915260409020805460ff1916600190811790915561042082015151818111156117ca576117ca616b96565b146117d65760006117e1565b806104200151604001515b82606001516117f09190616f74565b61040082015160016118058560200151615ea3565b51600181111561181757611817616b96565b14611823576000611835565b6118308460200151615ea3565b604001515b61183f9190616f74565b6118499190617076565b60016118588460200151615f30565b51600181111561186a5761186a616b96565b14611876576000611888565b6118838360200151615f30565b604001515b6118929190616f8b565b6020838101516001600160a01b03166000908152600890915260409020600190810191909155610460820151819052506118d43684900384016020850161700b565b610460820151604001526118e661699b565b825181516001600160a01b03909116905260208082018051339052610460840151815190920191909152805143604090910152805142606090910152610360830151815160800152610380830151905160a0015261058f81615d82565b6104808101516001905261195f3684900384016020850161700b565b6104808201516040015261197161699b565b825181516001600160a01b03909116905260208082018051339052610480840151815190920191909152805143604090910152805142606090910152610360830151815160800152610380830151905160a0015261058f81615d82565b6002600160408401515160018111156119e9576119e9616b96565b146119f957816103c00151611a03565b8260400151604001515b516004811115611a1557611a15616b96565b1415611aa6576104a081015160019052611a373684900384016020850161700b565b6104a082015160400152611a4961699b565b825181516001600160a01b039091169052602080820180513390526104a0840151815190920191909152805143604090910152805142606090910152610360830151815160800152610380830151905160a0015261058f81615d82565b600360016040840151516001811115611ac157611ac1616b96565b14611ad157816103c00151611adb565b8260400151604001515b516004811115611aed57611aed616b96565b1415611b7e576104c081015160019052611b0f3684900384016020850161700b565b6104c082015160400152611b2161699b565b825181516001600160a01b039091169052602080820180513390526104c0840151815190920191909152805143604090910152805142606090910152610360830151815160800152610380830151905160a0015261058f81615d82565b600460016040840151516001811115611b9957611b99616b96565b14611ba957816103c00151611bb3565b8260400151604001515b516004811115611bc557611bc5616b96565b1415610b6a576104e081015160019052611be73684900384016020850161700b565b6104e082015160400152611bf961699b565b825181516001600160a01b039091169052602080820180513390526104e0840151815190920191909152805143604090910152805142606090910152610360830151815160800152610380830151905160a0015261058f81615d82565b61050081015160019052611c723684900384016020850161700b565b61050082015160400152611c8461699b565b825181516001600160a01b03909116905260208082018051339052610500840151815190920191909152805143604090910152805142606090910152610360830151815160800152610380830151905160a0015261058f81615d82565b60006040830151516001811115611cfa57611cfa616b96565b1415611d0d576000610520820152611d35565b60016040830151516001811115611d2657611d26616b96565b1415611d355760016105208201525b8061052001511561243257610540810151600190819052506105408101516000604090910181905260016040840151516001811115611d7657611d76616b96565b14611d8657816105400151611d90565b8260400151604001515b516004811115611da257611da2616b96565b1415611e315761056081015160019052611dc43684900384016020850161700b565b61056082015160400152611dd661699b565b825181516001600160a01b0390911690526020808201805133905261056084015181519092019190915280514360409091015280514260609091015261036083015181516080015260a0808501519151015261058f81615d82565b6001806040840151516001811115611e4b57611e4b616b96565b14611e5b57816105400151611e65565b8260400151604001515b516004811115611e7757611e77616b96565b14156121b05760016040830151516001811115611e9657611e96616b96565b14611ea657806105400151611eb0565b8160400151604001515b604001516105808201526020820151611ec890615e16565b6105a08201908152602083810180516001600160a01b03908116600090815260069093526040808420805460ff1916600190811790915560608801519351909216845283208101919091559151519091811115611f2757611f27616b96565b1415611f3a5760006105c0820152611f63565b60016105a0820151516001811115611f5457611f54616b96565b1415611f635760016105c08201525b806105c0015115612127576020828101516001600160a01b03166000908152600890915260409020805460ff191660019081179091556105a08201515181811115611fb057611fb0616b96565b14611fbc576000611fc7565b806105a00151604001515b8260600151611fd69190616f74565b6105808201516001611feb8560200151615ea3565b516001811115611ffd57611ffd616b96565b1461200957600061201b565b6120168460200151615ea3565b604001515b6120259190616f74565b61202f9190617076565b600161203e8460200151615f30565b51600181111561205057612050616b96565b1461205c57600061206e565b6120698360200151615f30565b604001515b6120789190616f8b565b6020838101516001600160a01b031660009081526008909152604090206001908101919091556105e0820151819052506120ba3684900384016020850161700b565b6105e0820151604001526120cc61699b565b825181516001600160a01b039091169052602080820180513390526105e084015181519092019190915280514360409091015280514260609091015261036083015181516080015260a0808501519151015261058f81615d82565b610600810151600190526121433684900384016020850161700b565b6106008201516040015261215561699b565b825181516001600160a01b0390911690526020808201805133905261060084015181519092019190915280514360409091015280514260609091015261036083015181516080015260a0808501519151015261058f81615d82565b6002600160408401515160018111156121cb576121cb616b96565b146121db578161054001516121e5565b8260400151604001515b5160048111156121f7576121f7616b96565b141561228657610620810151600190526122193684900384016020850161700b565b6106208201516040015261222b61699b565b825181516001600160a01b0390911690526020808201805133905261062084015181519092019190915280514360409091015280514260609091015261036083015181516080015260a0808501519151015261058f81615d82565b6003600160408401515160018111156122a1576122a1616b96565b146122b1578161054001516122bb565b8260400151604001515b5160048111156122cd576122cd616b96565b141561235c57610640810151600190526122ef3684900384016020850161700b565b6106408201516040015261230161699b565b825181516001600160a01b0390911690526020808201805133905261064084015181519092019190915280514360409091015280514260609091015261036083015181516080015260a0808501519151015261058f81615d82565b60046001604084015151600181111561237757612377616b96565b1461238757816105400151612391565b8260400151604001515b5160048111156123a3576123a3616b96565b1415610b6a57610660810151600190526123c53684900384016020850161700b565b610660820151604001526123d761699b565b825181516001600160a01b0390911690526020808201805133905261066084015181519092019190915280514360409091015280514260609091015261036083015181516080015260a0808501519151015261058f81615d82565b6106808101516001905261244e3684900384016020850161700b565b6106808201516040015261246061699b565b825181516001600160a01b0390911690526020808201805133905261068084015181519092019190915280514360409091015280514260609091015261036083015181516080015260a0808501519151015261058f81615d82565b60026124cd6040850160208601616f41565b60048111156124de576124de616b96565b14156135985760808301356106a082015260016124fa33615cf5565b51600181111561250c5761250c616b96565b14612518576000612526565b61252133615cf5565b604001515b6106c082018190526106a08201511061254457806106c0015161254b565b806106a001515b6106e0820181905260808301516125629190616f8b565b6107008201526106e081015161257b9034146010615cb3565b61259561258e3384600001516000615cdd565b6011615cb3565b6106c081015115612dbe57336000908152600560205260409020805460ff191660011790556106e08101516106c08201516125d09190616f74565b3360009081526005602052604081206001019190915560408301515160018111156125fd576125fd616b96565b1415612610576000610720820152612638565b6001604083015151600181111561262957612629616b96565b14156126385760016107208201525b80610720015115612d355761074081015160019081905250610740810151600060409091018190526001604084015151600181111561267957612679616b96565b1461268957816107400151612693565b8260400151604001515b5160048111156126a5576126a5616b96565b141561273457610760810151600190526126c73684900384016020850161700b565b610760820151604001526126d961699b565b825181516001600160a01b0390911690526020808201805133905261076084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b600180604084015151600181111561274e5761274e616b96565b1461275e57816107400151612768565b8260400151604001515b51600481111561277a5761277a616b96565b1415612ab3576001604083015151600181111561279957612799616b96565b146127a9578061074001516127b3565b8160400151604001515b6040015161078082015260208201516127cb90615e16565b6107a08201908152602083810180516001600160a01b03908116600090815260069093526040808420805460ff191660019081179091556060880151935190921684528320810191909155915151909181111561282a5761282a616b96565b141561283d5760006107c0820152612866565b60016107a082015151600181111561285757612857616b96565b14156128665760016107c08201525b806107c0015115612a2a576020828101516001600160a01b03166000908152600890915260409020805460ff191660019081179091556107a082015151818111156128b3576128b3616b96565b146128bf5760006128ca565b806107a00151604001515b82606001516128d99190616f74565b61078082015160016128ee8560200151615ea3565b51600181111561290057612900616b96565b1461290c57600061291e565b6129198460200151615ea3565b604001515b6129289190616f74565b6129329190617076565b60016129418460200151615f30565b51600181111561295357612953616b96565b1461295f576000612971565b61296c8360200151615f30565b604001515b61297b9190616f8b565b6020838101516001600160a01b031660009081526008909152604090206001908101919091556107e0820151819052506129bd3684900384016020850161700b565b6107e0820151604001526129cf61699b565b825181516001600160a01b039091169052602080820180513390526107e084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b61080081015160019052612a463684900384016020850161700b565b61080082015160400152612a5861699b565b825181516001600160a01b0390911690526020808201805133905261080084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b600260016040840151516001811115612ace57612ace616b96565b14612ade57816107400151612ae8565b8260400151604001515b516004811115612afa57612afa616b96565b1415612b895761082081015160019052612b1c3684900384016020850161700b565b61082082015160400152612b2e61699b565b825181516001600160a01b0390911690526020808201805133905261082084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b600360016040840151516001811115612ba457612ba4616b96565b14612bb457816107400151612bbe565b8260400151604001515b516004811115612bd057612bd0616b96565b1415612c5f5761084081015160019052612bf23684900384016020850161700b565b61084082015160400152612c0461699b565b825181516001600160a01b0390911690526020808201805133905261084084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b600460016040840151516001811115612c7a57612c7a616b96565b14612c8a57816107400151612c94565b8260400151604001515b516004811115612ca657612ca6616b96565b1415610b6a5761086081015160019052612cc83684900384016020850161700b565b61086082015160400152612cda61699b565b825181516001600160a01b0390911690526020808201805133905261086084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b61088081015160019052612d513684900384016020850161700b565b61088082015160400152612d6361699b565b825181516001600160a01b0390911690526020808201805133905261088084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b60006040830151516001811115612dd757612dd7616b96565b1415612dea5760006108a0820152612e12565b60016040830151516001811115612e0357612e03616b96565b1415612e125760016108a08201525b806108a001511561350f576108c0810151600190819052506108c08101516000604090910181905260016040840151516001811115612e5357612e53616b96565b14612e6357816108c00151612e6d565b8260400151604001515b516004811115612e7f57612e7f616b96565b1415612f0e576108e081015160019052612ea13684900384016020850161700b565b6108e082015160400152612eb361699b565b825181516001600160a01b039091169052602080820180513390526108e084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b6001806040840151516001811115612f2857612f28616b96565b14612f3857816108c00151612f42565b8260400151604001515b516004811115612f5457612f54616b96565b141561328d5760016040830151516001811115612f7357612f73616b96565b14612f8357806108c00151612f8d565b8160400151604001515b604001516109008201526020820151612fa590615e16565b6109208201908152602083810180516001600160a01b03908116600090815260069093526040808420805460ff191660019081179091556060880151935190921684528320810191909155915151909181111561300457613004616b96565b1415613017576000610940820152613040565b600161092082015151600181111561303157613031616b96565b14156130405760016109408201525b80610940015115613204576020828101516001600160a01b03166000908152600890915260409020805460ff19166001908117909155610920820151518181111561308d5761308d616b96565b146130995760006130a4565b806109200151604001515b82606001516130b39190616f74565b61090082015160016130c88560200151615ea3565b5160018111156130da576130da616b96565b146130e65760006130f8565b6130f38460200151615ea3565b604001515b6131029190616f74565b61310c9190617076565b600161311b8460200151615f30565b51600181111561312d5761312d616b96565b1461313957600061314b565b6131468360200151615f30565b604001515b6131559190616f8b565b6020838101516001600160a01b03166000908152600890915260409020600190810191909155610960820151819052506131973684900384016020850161700b565b610960820151604001526131a961699b565b825181516001600160a01b0390911690526020808201805133905261096084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b610980810151600190526132203684900384016020850161700b565b6109808201516040015261323261699b565b825181516001600160a01b0390911690526020808201805133905261098084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b6002600160408401515160018111156132a8576132a8616b96565b146132b857816108c001516132c2565b8260400151604001515b5160048111156132d4576132d4616b96565b1415613363576109a0810151600190526132f63684900384016020850161700b565b6109a08201516040015261330861699b565b825181516001600160a01b039091169052602080820180513390526109a084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b60036001604084015151600181111561337e5761337e616b96565b1461338e57816108c00151613398565b8260400151604001515b5160048111156133aa576133aa616b96565b1415613439576109c0810151600190526133cc3684900384016020850161700b565b6109c0820151604001526133de61699b565b825181516001600160a01b039091169052602080820180513390526109c084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b60046001604084015151600181111561345457613454616b96565b1461346457816108c0015161346e565b8260400151604001515b51600481111561348057613480616b96565b1415610b6a576109e0810151600190526134a23684900384016020850161700b565b6109e0820151604001526134b461699b565b825181516001600160a01b039091169052602080820180513390526109e084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b610a008101516001905261352b3684900384016020850161700b565b610a008201516040015261353d61699b565b825181516001600160a01b03909116905260208082018051339052610a0084015181519092019190915280514360409091015280514260609091015261070083015181516080015260a0808501519151015261058f81615d82565b60036135aa6040850160208601616f41565b60048111156135bb576135bb616b96565b1415614781576135d336849003840160a08501617095565b610a2082015260016135e433615ea3565b5160018111156135f6576135f6616b96565b14613602576000613610565b61360b33615ea3565b604001515b610a408201819052610a20820151511115610a60820181905261363457600061363c565b610a20810151515b610a8082015261364e34156012615cb3565b80610a8001518260a001516136639190616f8b565b610aa08201528151610a808201516136889161368191339190615cdd565b6013615cb3565b80610a60015115613f9957610a2081015151610aa08201516136aa9190616f74565b610ac08201528151610a20820151602081015190516136ca929190615fbd565b336000908152600460205260409020805460ff19166001179055610a2081015151610a408201516136fb9190616f74565b336000908152600460209081526040808320600190810194909455610a20850180518301516001600160a01b031684529220805460ff1916841790559051805191015190919061374a90615ea3565b51600181111561375c5761375c616b96565b1461376857600061377f565b61377a82610a20015160200151615ea3565b604001515b6137899190616f8b565b610a208201516020908101516001600160a01b031660009081526004909152604081206001019190915560408301515160018111156137ca576137ca616b96565b14156137dd576000610ae0820152613805565b600160408301515160018111156137f6576137f6616b96565b1415613805576001610ae08201525b80610ae0015115613f0e57610b0081015160019081905250610b00810151600060409091018190526001604084015151600181111561384657613846616b96565b146138565781610b000151613860565b8260400151604001515b51600481111561387257613872616b96565b141561390357610b20810151600190526138943684900384016020850161700b565b610b20820151604001526138a661699b565b825181516001600160a01b03909116905260208082018051339052610b20840151815190920191909152805143604090910152805142606090910152608080850151825190910152610ac0830151905160a0015261058f81615d82565b600180604084015151600181111561391d5761391d616b96565b1461392d5781610b000151613937565b8260400151604001515b51600481111561394957613949616b96565b1415613c86576001604083015151600181111561396857613968616b96565b146139785780610b000151613982565b8160400151604001515b60400151610b40820152602082015161399a90615e16565b610b608201908152602083810180516001600160a01b03908116600090815260069093526040808420805460ff19166001908117909155606088015193519092168452832081019190915591515190918111156139f9576139f9616b96565b1415613a0c576000610b80820152613a35565b6001610b60820151516001811115613a2657613a26616b96565b1415613a35576001610b808201525b80610b80015115613bfb576020828101516001600160a01b03166000908152600890915260409020805460ff19166001908117909155610b608201515181811115613a8257613a82616b96565b14613a8e576000613a99565b80610b600151604001515b8260600151613aa89190616f74565b610b408201516001613abd8560200151615ea3565b516001811115613acf57613acf616b96565b14613adb576000613aed565b613ae88460200151615ea3565b604001515b613af79190616f74565b613b019190617076565b6001613b108460200151615f30565b516001811115613b2257613b22616b96565b14613b2e576000613b40565b613b3b8360200151615f30565b604001515b613b4a9190616f8b565b6020838101516001600160a01b03166000908152600890915260409020600190810191909155610ba082015181905250613b8c3684900384016020850161700b565b610ba082015160400152613b9e61699b565b825181516001600160a01b03909116905260208082018051339052610ba0840151815190920191909152805143604090910152805142606090910152608080850151825190910152610ac0830151905160a0015261058f81615d82565b610bc081015160019052613c173684900384016020850161700b565b610bc082015160400152613c2961699b565b825181516001600160a01b03909116905260208082018051339052610bc0840151815190920191909152805143604090910152805142606090910152608080850151825190910152610ac0830151905160a0015261058f81615d82565b600260016040840151516001811115613ca157613ca1616b96565b14613cb15781610b000151613cbb565b8260400151604001515b516004811115613ccd57613ccd616b96565b1415613d5e57610be081015160019052613cef3684900384016020850161700b565b610be082015160400152613d0161699b565b825181516001600160a01b03909116905260208082018051339052610be0840151815190920191909152805143604090910152805142606090910152608080850151825190910152610ac0830151905160a0015261058f81615d82565b600360016040840151516001811115613d7957613d79616b96565b14613d895781610b000151613d93565b8260400151604001515b516004811115613da557613da5616b96565b1415613e3657610c0081015160019052613dc73684900384016020850161700b565b610c0082015160400152613dd961699b565b825181516001600160a01b03909116905260208082018051339052610c00840151815190920191909152805143604090910152805142606090910152608080850151825190910152610ac0830151905160a0015261058f81615d82565b600460016040840151516001811115613e5157613e51616b96565b14613e615781610b000151613e6b565b8260400151604001515b516004811115613e7d57613e7d616b96565b1415610b6a57610c2081015160019052613e9f3684900384016020850161700b565b610c2082015160400152613eb161699b565b825181516001600160a01b03909116905260208082018051339052610c20840151815190920191909152805143604090910152805142606090910152608080850151825190910152610ac0830151905160a0015261058f81615d82565b610c4081015160019052613f2a3684900384016020850161700b565b610c4082015160400152613f3c61699b565b825181516001600160a01b03909116905260208082018051339052610c40840151815190920191909152805143604090910152805142606090910152608080850151825190910152610ac0830151905160a0015261058f81615d82565b60006040830151516001811115613fb257613fb2616b96565b1415613fc5576000610c60820152613fed565b60016040830151516001811115613fde57613fde616b96565b1415613fed576001610c608201525b80610c600151156146f657610c8081015160019081905250610c80810151600060409091018190526001604084015151600181111561402e5761402e616b96565b1461403e5781610c800151614048565b8260400151604001515b51600481111561405a5761405a616b96565b14156140eb57610ca08101516001905261407c3684900384016020850161700b565b610ca08201516040015261408e61699b565b825181516001600160a01b03909116905260208082018051339052610ca0840151815190920191909152805143604090910152805142606090910152608080850151825190910152610aa0830151905160a0015261058f81615d82565b600180604084015151600181111561410557614105616b96565b146141155781610c80015161411f565b8260400151604001515b51600481111561413157614131616b96565b141561446e576001604083015151600181111561415057614150616b96565b146141605780610c80015161416a565b8160400151604001515b60400151610cc0820152602082015161418290615e16565b610ce08201908152602083810180516001600160a01b03908116600090815260069093526040808420805460ff19166001908117909155606088015193519092168452832081019190915591515190918111156141e1576141e1616b96565b14156141f4576000610d0082015261421d565b6001610ce082015151600181111561420e5761420e616b96565b141561421d576001610d008201525b80610d000151156143e3576020828101516001600160a01b03166000908152600890915260409020805460ff19166001908117909155610ce0820151518181111561426a5761426a616b96565b14614276576000614281565b80610ce00151604001515b82606001516142909190616f74565b610cc082015160016142a58560200151615ea3565b5160018111156142b7576142b7616b96565b146142c35760006142d5565b6142d08460200151615ea3565b604001515b6142df9190616f74565b6142e99190617076565b60016142f88460200151615f30565b51600181111561430a5761430a616b96565b14614316576000614328565b6143238360200151615f30565b604001515b6143329190616f8b565b6020838101516001600160a01b03166000908152600890915260409020600190810191909155610d20820151819052506143743684900384016020850161700b565b610d208201516040015261438661699b565b825181516001600160a01b03909116905260208082018051339052610d20840151815190920191909152805143604090910152805142606090910152608080850151825190910152610aa0830151905160a0015261058f81615d82565b610d40810151600190526143ff3684900384016020850161700b565b610d408201516040015261441161699b565b825181516001600160a01b03909116905260208082018051339052610d40840151815190920191909152805143604090910152805142606090910152608080850151825190910152610aa0830151905160a0015261058f81615d82565b60026001604084015151600181111561448957614489616b96565b146144995781610c8001516144a3565b8260400151604001515b5160048111156144b5576144b5616b96565b141561454657610d60810151600190526144d73684900384016020850161700b565b610d60820151604001526144e961699b565b825181516001600160a01b03909116905260208082018051339052610d60840151815190920191909152805143604090910152805142606090910152608080850151825190910152610aa0830151905160a0015261058f81615d82565b60036001604084015151600181111561456157614561616b96565b146145715781610c80015161457b565b8260400151604001515b51600481111561458d5761458d616b96565b141561461e57610d80810151600190526145af3684900384016020850161700b565b610d80820151604001526145c161699b565b825181516001600160a01b03909116905260208082018051339052610d80840151815190920191909152805143604090910152805142606090910152608080850151825190910152610aa0830151905160a0015261058f81615d82565b60046001604084015151600181111561463957614639616b96565b146146495781610c800151614653565b8260400151604001515b51600481111561466557614665616b96565b1415610b6a57610da0810151600190526146873684900384016020850161700b565b610da08201516040015261469961699b565b825181516001600160a01b03909116905260208082018051339052610da0840151815190920191909152805143604090910152805142606090910152608080850151825190910152610aa0830151905160a0015261058f81615d82565b610dc0810151600190526147123684900384016020850161700b565b610dc08201516040015261472461699b565b825181516001600160a01b03909116905260208082018051339052610dc0840151815190920191909152805143604090910152805142606090910152608080850151825190910152610aa0830151905160a0015261058f81615d82565b60046147936040850160208601616f41565b60048111156147a4576147a4616b96565b1415610b6a5760e0830135610de082015260016147c033615ea3565b5160018111156147d2576147d2616b96565b146147de5760006147ec565b6147e733615ea3565b604001515b610e008201819052610de08201511115610e20820181905261480f576000614816565b80610de001515b610e4082015261482834156014615cb3565b80610e4001518260a0015161483d9190616f8b565b610e608201528151610e408201516148629161485b91339190615cdd565b6015615cb3565b816080015181610de00151111561487a576000614881565b80610e2001515b156150ff5780610de00151826080015161489b9190616f74565b610e80820152610de0810151604051339180156108fc02916000818181858888f193505050501580156148d2573d6000803e3d6000fd5b50336000908152600460205260409020805460ff19166001179055610de0810151610e008201516149039190616f74565b33600090815260046020526040812060010191909155604083015151600181111561493057614930616b96565b1415614943576000610ea082015261496b565b6001604083015151600181111561495c5761495c616b96565b141561496b576001610ea08201525b80610ea001511561507457610ec081015160019081905250610ec081015160006040909101819052600160408401515160018111156149ac576149ac616b96565b146149bc5781610ec001516149c6565b8260400151604001515b5160048111156149d8576149d8616b96565b1415614a6957610ee0810151600190526149fa3684900384016020850161700b565b610ee082015160400152614a0c61699b565b825181516001600160a01b03909116905260208082018051339052610ee0840151815190920191909152805143604090910152805142606090910152610e80830151815160800152610e60830151905160a0015261058f81615d82565b6001806040840151516001811115614a8357614a83616b96565b14614a935781610ec00151614a9d565b8260400151604001515b516004811115614aaf57614aaf616b96565b1415614dec5760016040830151516001811115614ace57614ace616b96565b14614ade5780610ec00151614ae8565b8160400151604001515b60400151610f008201526020820151614b0090615e16565b610f208201908152602083810180516001600160a01b03908116600090815260069093526040808420805460ff1916600190811790915560608801519351909216845283208101919091559151519091811115614b5f57614b5f616b96565b1415614b72576000610f40820152614b9b565b6001610f20820151516001811115614b8c57614b8c616b96565b1415614b9b576001610f408201525b80610f40015115614d61576020828101516001600160a01b03166000908152600890915260409020805460ff19166001908117909155610f208201515181811115614be857614be8616b96565b14614bf4576000614bff565b80610f200151604001515b8260600151614c0e9190616f74565b610f008201516001614c238560200151615ea3565b516001811115614c3557614c35616b96565b14614c41576000614c53565b614c4e8460200151615ea3565b604001515b614c5d9190616f74565b614c679190617076565b6001614c768460200151615f30565b516001811115614c8857614c88616b96565b14614c94576000614ca6565b614ca18360200151615f30565b604001515b614cb09190616f8b565b6020838101516001600160a01b03166000908152600890915260409020600190810191909155610f6082015181905250614cf23684900384016020850161700b565b610f6082015160400152614d0461699b565b825181516001600160a01b03909116905260208082018051339052610f60840151815190920191909152805143604090910152805142606090910152610e80830151815160800152610e60830151905160a0015261058f81615d82565b610f8081015160019052614d7d3684900384016020850161700b565b610f8082015160400152614d8f61699b565b825181516001600160a01b03909116905260208082018051339052610f80840151815190920191909152805143604090910152805142606090910152610e80830151815160800152610e60830151905160a0015261058f81615d82565b600260016040840151516001811115614e0757614e07616b96565b14614e175781610ec00151614e21565b8260400151604001515b516004811115614e3357614e33616b96565b1415614ec457610fa081015160019052614e553684900384016020850161700b565b610fa082015160400152614e6761699b565b825181516001600160a01b03909116905260208082018051339052610fa0840151815190920191909152805143604090910152805142606090910152610e80830151815160800152610e60830151905160a0015261058f81615d82565b600360016040840151516001811115614edf57614edf616b96565b14614eef5781610ec00151614ef9565b8260400151604001515b516004811115614f0b57614f0b616b96565b1415614f9c57610fc081015160019052614f2d3684900384016020850161700b565b610fc082015160400152614f3f61699b565b825181516001600160a01b03909116905260208082018051339052610fc0840151815190920191909152805143604090910152805142606090910152610e80830151815160800152610e60830151905160a0015261058f81615d82565b600460016040840151516001811115614fb757614fb7616b96565b14614fc75781610ec00151614fd1565b8260400151604001515b516004811115614fe357614fe3616b96565b1415610b6a57610fe0810151600190526150053684900384016020850161700b565b610fe08201516040015261501761699b565b825181516001600160a01b03909116905260208082018051339052610fe0840151815190920191909152805143604090910152805142606090910152610e80830151815160800152610e60830151905160a0015261058f81615d82565b611000810151600190526150903684900384016020850161700b565b611000820151604001526150a261699b565b825181516001600160a01b03909116905260208082018051339052611000840151815190920191909152805143604090910152805142606090910152610e80830151815160800152610e60830151905160a0015261058f81615d82565b6000604083015151600181111561511857615118616b96565b141561512b576000611020820152615153565b6001604083015151600181111561514457615144616b96565b14156151535760016110208201525b8061102001511561585c5761104081015160019081905250611040810151600060409091018190526001604084015151600181111561519457615194616b96565b146151a4578161104001516151ae565b8260400151604001515b5160048111156151c0576151c0616b96565b141561525157611060810151600190526151e23684900384016020850161700b565b611060820151604001526151f461699b565b825181516001600160a01b03909116905260208082018051339052611060840151815190920191909152805143604090910152805142606090910152608080850151825190910152610e60830151905160a0015261058f81615d82565b600180604084015151600181111561526b5761526b616b96565b1461527b57816110400151615285565b8260400151604001515b51600481111561529757615297616b96565b14156155d457600160408301515160018111156152b6576152b6616b96565b146152c6578061104001516152d0565b8160400151604001515b6040015161108082015260208201516152e890615e16565b6110a08201908152602083810180516001600160a01b03908116600090815260069093526040808420805460ff191660019081179091556060880151935190921684528320810191909155915151909181111561534757615347616b96565b141561535a5760006110c0820152615383565b60016110a082015151600181111561537457615374616b96565b14156153835760016110c08201525b806110c0015115615549576020828101516001600160a01b03166000908152600890915260409020805460ff191660019081179091556110a082015151818111156153d0576153d0616b96565b146153dc5760006153e7565b806110a00151604001515b82606001516153f69190616f74565b611080820151600161540b8560200151615ea3565b51600181111561541d5761541d616b96565b1461542957600061543b565b6154368460200151615ea3565b604001515b6154459190616f74565b61544f9190617076565b600161545e8460200151615f30565b51600181111561547057615470616b96565b1461547c57600061548e565b6154898360200151615f30565b604001515b6154989190616f8b565b6020838101516001600160a01b031660009081526008909152604090206001908101919091556110e0820151819052506154da3684900384016020850161700b565b6110e0820151604001526154ec61699b565b825181516001600160a01b039091169052602080820180513390526110e0840151815190920191909152805143604090910152805142606090910152608080850151825190910152610e60830151905160a0015261058f81615d82565b611100810151600190526155653684900384016020850161700b565b6111008201516040015261557761699b565b825181516001600160a01b03909116905260208082018051339052611100840151815190920191909152805143604090910152805142606090910152608080850151825190910152610e60830151905160a0015261058f81615d82565b6002600160408401515160018111156155ef576155ef616b96565b146155ff57816110400151615609565b8260400151604001515b51600481111561561b5761561b616b96565b14156156ac576111208101516001905261563d3684900384016020850161700b565b6111208201516040015261564f61699b565b825181516001600160a01b03909116905260208082018051339052611120840151815190920191909152805143604090910152805142606090910152608080850151825190910152610e60830151905160a0015261058f81615d82565b6003600160408401515160018111156156c7576156c7616b96565b146156d7578161104001516156e1565b8260400151604001515b5160048111156156f3576156f3616b96565b141561578457611140810151600190526157153684900384016020850161700b565b6111408201516040015261572761699b565b825181516001600160a01b03909116905260208082018051339052611140840151815190920191909152805143604090910152805142606090910152608080850151825190910152610e60830151905160a0015261058f81615d82565b60046001604084015151600181111561579f5761579f616b96565b146157af578161104001516157b9565b8260400151604001515b5160048111156157cb576157cb616b96565b1415610b6a57611160810151600190526157ed3684900384016020850161700b565b611160820151604001526157ff61699b565b825181516001600160a01b03909116905260208082018051339052611160840151815190920191909152805143604090910152805142606090910152608080850151825190910152610e60830151905160a0015261058f81615d82565b611180810151600190526158783684900384016020850161700b565b6111808201516040015261588a61699b565b825181516001600160a01b03909116905260208082018051339052611180840151815190920191909152805143604090910152805142606090910152608080850151825190910152610e60830151905160a0015261058f81615d82565b6158f7600160005414600a615cb3565b6159118135158061590a57506001548235145b600b615cb3565b60008080556002805461592390616c7d565b80601f016020809104026020016040519081016040528092919081815260200182805461594f90616c7d565b801561599c5780601f106159715761010080835404028352916020019161599c565b820191906000526020600020905b81548152906001019060200180831161597f57829003601f168201915b50505050508060200190518101906159b491906170b1565b90506159be6169bc565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1836040516159ed91906170f2565b60405180910390a1615a0134156008615cb3565b8151615a19906001600160a01b031633146009615cb3565b8051600090819052815160200152615a2f61699b565b60208084015182516001600160a01b0390911690528181018051339052835181519092019190915280514360409091015280514260609091015280516000608090910152516103e860a09091015261058f81615d82565b604080516060810182526000808252602082018190529181019190915261021c82615ea3565b604080516060810182526000808252602082018190529181019190915261021c82615e16565b600060606000546002808054615ae790616c7d565b80601f0160208091040260200160405190810160405280929190818152602001828054615b1390616c7d565b8015615b605780601f10615b3557610100808354040283529160200191615b60565b820191906000526020600020905b815481529060010190602001808311615b4357829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915261021c82615f30565b604080516060810182526000808252602082018190529181019190915261021c82615cf5565b604080516060810182526000808252602082018190529181019190915261021c82615fd1565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff166001811115615c2d57615c2d616b96565b1415615ca4576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff166001811115615c6e57615c6e616b96565b6001811115615c7f57615c7f616b96565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b81615cd95760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000615ceb8385308561605e565b90505b9392505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115615d4157615d41616b96565b1415615ca4576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115615c6e57615c6e616b96565b615d8a6169cf565b8151516001600160a01b0390811682526020808401805151909216818401528151810151604080850191909152825160609081015190850152825160809081015190850152915160a090810151908401526004600055436001559051615df291839101617117565b60405160208183030381529060405260029080519060200190610b6a929190616a09565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115615e6257615e62616b96565b1415615ca4576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115615c6e57615c6e616b96565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115615eef57615eef616b96565b1415615ca4576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115615c6e57615c6e616b96565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff166001811115615f7c57615f7c616b96565b1415615ca4576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff166001811115615c6e57615c6e616b96565b615fc8838383616138565b610b6a57600080fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff16600181111561601d5761601d616b96565b1415615ca4576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff166001811115615c6e57615c6e616b96565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916160c5916171df565b60006040518083038185875af1925050503d8060008114616102576040519150601f19603f3d011682016040523d82523d6000602084013e616107565b606091505b509150915061611882826001616209565b508080602001905181019061612d91906171fb565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391616197916171df565b60006040518083038185875af1925050503d80600081146161d4576040519150601f19603f3d011682016040523d82523d6000602084013e6161d9565b606091505b50915091506161ea82826002616209565b50808060200190518101906161ff91906171fb565b9695505050505050565b60608315616218575081615cee565b8251156162285782518084602001fd5b60405163100960cb60e01b815260048101839052602401615cd0565b604051806111a00160405280600081526020016000815260200160001515815260200161626f616a8d565b815260200161627c616ae8565b8152602001600081526020016162ad6040805160608101909152806000815260006020820181905260409091015290565b8152600060208201526040016162c1616ae8565b81526020016162ce616ae8565b81526020016162db616ae8565b81526020016162e8616ae8565b81526020016162f5616ae8565b8152602001616302616ae8565b815260006020820152604001616316616a8d565b8152602001616323616ae8565b8152602001600081526020016163546040805160608101909152806000815260006020820181905260409091015290565b815260006020820152604001616368616ae8565b8152602001616375616ae8565b8152602001616382616ae8565b815260200161638f616ae8565b815260200161639c616ae8565b81526020016163a9616ae8565b81526020016000815260200160008152602001600081526020016000151581526020016163d4616a8d565b81526020016163e1616ae8565b8152602001600081526020016164126040805160608101909152806000815260006020820181905260409091015290565b815260006020820152604001616426616ae8565b8152602001616433616ae8565b8152602001616440616ae8565b815260200161644d616ae8565b815260200161645a616ae8565b8152602001616467616ae8565b81526000602082015260400161647b616a8d565b8152602001616488616ae8565b8152602001600081526020016164b96040805160608101909152806000815260006020820181905260409091015290565b8152600060208201526040016164cd616ae8565b81526020016164da616ae8565b81526020016164e7616ae8565b81526020016164f4616ae8565b8152602001616501616ae8565b815260200161650e616ae8565b815260200160008152602001600081526020016000815260200160008152602001600015158152602001616540616a8d565b815260200161654d616ae8565b81526020016000815260200161657e6040805160608101909152806000815260006020820181905260409091015290565b815260006020820152604001616592616ae8565b815260200161659f616ae8565b81526020016165ac616ae8565b81526020016165b9616ae8565b81526020016165c6616ae8565b81526020016165d3616ae8565b8152600060208201526040016165e7616a8d565b81526020016165f4616ae8565b8152602001600081526020016166256040805160608101909152806000815260006020820181905260409091015290565b815260006020820152604001616639616ae8565b8152602001616646616ae8565b8152602001616653616ae8565b8152602001616660616ae8565b815260200161666d616ae8565b815260200161667a616ae8565b81526020016166a560405180604001604052806000815260200160006001600160a01b031681525090565b8152602001600081526020016000151581526020016000815260200160008152602001600081526020016000151581526020016166e0616a8d565b81526020016166ed616ae8565b81526020016000815260200161671e6040805160608101909152806000815260006020820181905260409091015290565b815260006020820152604001616732616ae8565b815260200161673f616ae8565b815260200161674c616ae8565b8152602001616759616ae8565b8152602001616766616ae8565b8152602001616773616ae8565b815260006020820152604001616787616a8d565b8152602001616794616ae8565b8152602001600081526020016167c56040805160608101909152806000815260006020820181905260409091015290565b8152600060208201526040016167d9616ae8565b81526020016167e6616ae8565b81526020016167f3616ae8565b8152602001616800616ae8565b815260200161680d616ae8565b815260200161681a616ae8565b8152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160001515815260200161685c616a8d565b8152602001616869616ae8565b81526020016000815260200161689a6040805160608101909152806000815260006020820181905260409091015290565b8152600060208201526040016168ae616ae8565b81526020016168bb616ae8565b81526020016168c8616ae8565b81526020016168d5616ae8565b81526020016168e2616ae8565b81526020016168ef616ae8565b815260006020820152604001616903616a8d565b8152602001616910616ae8565b8152602001600081526020016169416040805160608101909152806000815260006020820181905260409091015290565b815260006020820152604001616955616ae8565b8152602001616962616ae8565b815260200161696f616ae8565b815260200161697c616ae8565b8152602001616989616ae8565b8152602001616996616ae8565b905290565b60408051606081018252600091810191825290815260208101616996616b07565b6040518060200160405280616996616ae8565b6040805160c081018252600080825260208201529081016169ee616ae8565b81526020016000815260200160008152602001600081525090565b828054616a1590616c7d565b90600052602060002090601f016020900481019282616a375760008555616a7d565b82601f10616a5057805160ff1916838001178555616a7d565b82800160010185558215616a7d579182015b82811115616a7d578251825591602001919060010190616a62565b50616a89929150616b4c565b5090565b6040805160c081019091528060008152602001600081526020016000815260200160008152602001616adb60405180604001604052806000815260200160006001600160a01b031681525090565b8152602001600081525090565b6040805160608101825260008082526020820152908101616996616a8d565b6040518060c0016040528060006001600160a01b03168152602001616b2a616ae8565b8152602001600081526020016000815260200160008152602001600081525090565b5b80821115616a895760008155600101616b4d565b6001600160a01b0381168114616b7657600080fd5b50565b600060208284031215616b8b57600080fd5b8135615cee81616b61565b634e487b7160e01b600052602160045260246000fd5b60028110616b7657616b76616b96565b81516060820190616bcc81616bac565b808352506020830151151560208301526040830151604083015292915050565b60006101008284031215616bff57600080fd5b50919050565b600060408284031215616bff57600080fd5b60005b83811015616c32578181015183820152602001616c1a565b8381111561058f5750506000910152565b8281526040602082015260008251806040840152616c68816060850160208701616c17565b601f01601f1916919091016060019392505050565b600181811c90821680616c9157607f821691505b60208210811415616bff57634e487b7160e01b600052602260045260246000fd5b60405160c0810167ffffffffffffffff81118282101715616ce357634e487b7160e01b600052604160045260246000fd5b60405290565b6040516060810167ffffffffffffffff81118282101715616ce357634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715616ce357634e487b7160e01b600052604160045260246000fd5b8015158114616b7657600080fd5b60058110616b7657600080fd5b60008183036101c0811215616d7a57600080fd5b616d82616cb2565b8351616d8d81616b61565b81526020840151616d9d81616b61565b6020820152610120603f198301811315616db657600080fd5b616dbe616ce9565b604086015160028110616dd057600080fd5b81526060860151616de081616d4b565b602082015260e0607f1985011215616df757600080fd5b616dff616cb2565b6080870151616e0d81616d59565b8082525060a0870151602082015260c0870151604082015260e08701516060820152604060ff1986011215616e4157600080fd5b616e49616d1a565b610100880151815292870151929450616e6183616b61565b82602086015284608082015261014087015160a0820152806040830152508060408401525050610160840151606082015261018084015160808201526101a084015160a0820152809250505092915050565b60058110616ec357616ec3616b96565b9052565b8135815261010081016020830135616ede81616d59565b616eeb6020840182616eb3565b5060408301356040830152606083013560608301526080830135608083015260a083013560a083015260c0830135616f2281616b61565b6001600160a01b031660c083015260e092830135929091019190915290565b600060208284031215616f5357600080fd5b8135615cee81616d59565b634e487b7160e01b600052601160045260246000fd5b600082821015616f8657616f86616f5e565b500390565b60008219821115616f9e57616f9e616f5e565b500190565b600060408284031215616fb557600080fd5b6040516040810181811067ffffffffffffffff82111715616fe657634e487b7160e01b600052604160045260246000fd5b604052823581529050806020830135616ffe81616b61565b6020919091015292915050565b600060e0828403121561701d57600080fd5b617025616cb2565b823561703081616d59565b8082525060208301356020820152604083013560408201526060830135606082015261705f8460808501616fa3565b608082015260c0929092013560a083015250919050565b600081600019048311821515161561709057617090616f5e565b500290565b6000604082840312156170a757600080fd5b615cee8383616fa3565b6000604082840312156170c357600080fd5b6170cb616d1a565b82516170d681616b61565b815260208301516170e681616b61565b60208201529392505050565b8135815260408101602083013561710881616d4b565b80151560208401525092915050565b81516001600160a01b039081168252602080840151821690830152604083015180516101c0840192919061714a81616bac565b8060408601525060208101511515606085015260408101519050617172608085018251616eb3565b602081015160a0850152604081015160c0850152606081015160e085015260808101518051610100860152826020820151166101208601525060a081015161014085015250506060830151610160830152608083015161018083015260a08301516101a083015292915050565b600082516171f1818460208701616c17565b9190910192915050565b60006020828403121561720d57600080fd5b8151615cee81616d4b56fea264697066735822122028da266c1d33287c49839759ec0d6d5b680987a342c3fed2a95a04147faa5b4464736f6c6343000809003360806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea2646970667358221220cdf767cc723a7f17395810bd06330609d16fe2104cc2ad5c445bab2cbe9aaf8364736f6c63430008090033`,
  BytecodeLen: 34507,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Borrower": Borrower,
  "Deployer": Deployer,
  "Lender": Lender
  };
export const _APIs = {
  };
