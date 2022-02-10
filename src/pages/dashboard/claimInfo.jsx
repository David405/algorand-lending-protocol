import React from 'react'
export default function ClaimInfo(params) {
    return(
        <div className="media align-items-stretch" id='mobile-claim '>
        <div className="align-self-center">
          <h1 className="mr-2">🚀</h1>
        </div>
        <div className="media-body pl-lg-3">
        <span>AGF available to claim:</span>
          <h4>0.00</h4>
        </div>
        <div className="align-self-center">
            <button className="btn btn-primary">Claim Interest</button>
        </div>
      </div>
    )
};
