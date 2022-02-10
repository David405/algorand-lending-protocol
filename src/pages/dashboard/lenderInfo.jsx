import React from 'react'
export default function LenderInfo(params) {
    return (
        <div className="media d-flex text-white">
                <div className="align-self-center">
                  <span >You supplied </span>
                  <h3 className='warning text-small'>5 ALGO</h3>
                </div>
                <div className="media-body text-right">
                  <span>You staked</span>
                  <h3 className='success'>5 ALGO</h3>
                </div>
              </div>
    )
};
