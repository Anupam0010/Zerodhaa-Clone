import React from "react";

function EquityTable() {
  return (
    <div className="container my-md-5  p-md-5 p-3 table  w-75  mt-5 mt-md-0   " style={{marginLeft:""}}>
        <h1  style={{fontSize:"24px", color:"#424242"}}>Charges for account opening</h1>
      <div className="table-responsive account-table mt-3 mt-md-4" style={{marginRight:""}}>
        <table className="table mb-0 " style={{fontSize:"15px"}}>
          <thead>
            <tr>
              <th>Type of account</th>
              <th className="text-end">Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Online account</td>
              <td className="text-end">
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>

            <tr>
              <td>Offline account</td>
              <td className="text-end">
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>

            <tr>
              <td>NRI account (offline only)</td>
              <td className="text-end">₹ 500</td>
            </tr>

            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td className="text-end">₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default EquityTable;
