import React from 'react'
export default function LenderInfo(params) {
    return (
        <div className="media d-flex text-white">
                <div className="align-self-center">
                  <span >You supplied</span>
                  <h3 className='warning'>156</h3>
                </div>
                <div className="media-body text-right">
                  <span>You stacked</span>
                  <h3 className='success'>156</h3>
                </div>
              </div>
    )
};
