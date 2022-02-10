import React from 'react'
import "./borrowTable.css";
export  function BorrowTable(params) {
    return(
        <table className="table  table-responsive-stack" id="tableOne">
        <thead className="thead-dark">
          <tr>
            <th>You borrowed</th>
            <th>Your collateral</th>
            <th>Available to borrow </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{5.0} ALGO</td>
            <td>{5.0} ALGO</td>
            <td>{5.0} ALGO</td>
          </tr>
        </tbody>
      </table>
    )
};
