// import React from 'react';
// function CreateTicket() {
//     return ( 
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-8'>
//                     <div class="dropdown">
//   <button class="btn  dropdown-toggle border-secondary-subtle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"white",width:"100%"}}>
//     Dropdown button
//   </button>
//   <ul class="dropdown-menu">
//     <li><a class="dropdown-item" href="#">Action</a></li>
//     <li><a class="dropdown-item" href="#">Another action</a></li>
//     <li><a class="dropdown-item" href="#">Something else here</a></li>
//   </ul>
// </div>
//                 </div>
//             </div>

//         </div>
//      );
// }

// export default CreateTicket;
import React from "react";

function CreateTicket({
    Boxname,
    Boxitem1,
    Boxitem2,
    Boxitem3
}) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 col-12">
          <div className="dropdown">
            <button
              className="btn border border-secondary-subtle w-100 d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: "white" }}
            >
                
              <span className="ms-2" style={{fontSize:"18px",color:"#424242"}}> <span className="me-3 bg-z-light-blue " style={{ fontSize:"24px", color:"#387de1"}}>+</span >{Boxname}</span>
              <span className="dropdown-toggle"></span>
            </button>

            <ul className="dropdown-menu w-100 custom-dropdown ">
              <li>
                <a className="dropdown-item" href="#">
                  {Boxitem1}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  {Boxitem2}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  {Boxitem3}
                </a>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default CreateTicket;
