import React from 'react';
function CFO() {
    return ( 
        <div className='container my-md-5 me-md- p-md-5 table w-75 ' style={{marginLeft:""}}>
            <h1 style={{fontSize:"24px",color:"#424242"}}>Charges for optional value added services</h1>
            <div className='table-responsive account-table  mt-mb-4 mt-3' style={{marginRight:""}}>
                <table className="table mb-0  " style={{fontSize:"15px"}}>
          <thead>
            <tr>
              <th>Services</th>
              <th className="">Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tickertape</td>
              <td className="">	Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>

            <tr>
              <td>Smallcase</td>
              <td className="">
                	Per transaction
              </td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>

            <tr>
              <td>Kite Connect</td>
              <td className="">
                	Monthly
              </td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>

            </div>
        </div>
     );
}

export default CFO;
