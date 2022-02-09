import React from 'react'
import "./borrowTable.css";
export  function BorrowTable(params) {
    return(
        <table className="table  table-responsive-stack" id="tableOne">
        <thead className="thead-dark">
          <tr>
            <th>You borrowed</th>
            <th>Your collateral</th>
            <th>Current CTV</th>
            <th>Maximuim LTV</th>
            <th>Available to borrow </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${5.0}</td>
            <td>${5.0}</td>
            <td>${5.0}</td>
            <td>${5.0}</td>
            <td>${5.0}</td>
          </tr>
        </tbody>
      </table>
    )
};
