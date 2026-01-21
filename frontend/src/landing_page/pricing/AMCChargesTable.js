import React from "react";

function AMCChargesTable() {
  return (
    <div className="container my-md-5 my-5 p-md-5 mt-md-1 w-75 table  " style={{marginLeft:""}}>
        <h1 style={{fontSize:"24px",color:"#424242"}}>Demat AMC (Annual Maintenance Charge)</h1>
      <div
        className="table-responsive account-table  mt-4 " style={{marginRight:""}} >
        <table className="table mb-0 " style={{fontSize:"15px"}}>
          <thead>
            <tr>
              <th>Value of holdings</th>
              <th className="">AMC</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td className="">
                <span className="badge bg-success">FREE*</span>
              </td>
            </tr>

            <tr>
              <td>₹4 lakh – ₹10 lakh</td>
              <td className="">
                ₹100 per year, charged quarterly*
              </td>
            </tr>

            <tr>
              <td>Above ₹10 lakh</td>
              <td className="">
                ₹300 per year, charged quarterly
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{fontSize:"12px",color:"#424242"}}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href="" style={{textDecoration:"none", color:"#387de1"}}>click here.</a></p>
    </div>
  );
}

export default AMCChargesTable;
