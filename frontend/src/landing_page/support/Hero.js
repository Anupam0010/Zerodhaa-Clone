// import React from 'react';
// function Hero() {
//     return ( 
        
//         <div className="container py-md-5 mt-md-5" style={{backgroundColor:"#f6f6f6", maxWidth:"100%"}}>
//       {/* Header row */}
//       <div className="d-flex justify-content-between align-items-center mb-4 justify-content-center " style={{marginLeft:""}}>
//         <h1 className="support-title" style={{fontSize:"36px",color:"#424242"}}>Support Portal</h1>

//         <button className="btn btn-primary my-tickets-btn " style={{marginRight:"", backgroundColor:"#397dd0",fontWeight:""}}>
//           My tickets
//         </button>
//       </div>

//       {/* Search box */}
//       <div className="support-search position-relative " style={{marginLeft:""}}>
//         {/* <i className="bi bi-search search-icon"></i> */}

        
//         <input
//           type="text"
//           className="form-control search-input"
//           placeholder= "Eg: How do I open my account, How do I activate F&O..."
//         />
//       </div>
//     </div>
//      );
// }

// export default Hero;
import React from 'react';

function Hero() {
  return (
    // 'container-fluid' poori width lega, 'py-5' upar-neeche spacing dega
    <div className="container-fluid py-5 " style={{ backgroundColor: "#f6f6f6" }}>
      
      {/* Hum 'row' aur 'col-md-10' ka use karenge taaki content center mein rahe aur tables se align ho */}
      <div className="row justify-content-center">
        <div className="col-11 col-md-10">
          
          {/* Header row: Title aur Button */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 style={{ fontSize: "36px", color: "#424242", fontWeight: "500" }}>
              Support Portal
            </h1>
            <button className="btn btn-primary" style={{ backgroundColor: "#397dd0", border: "none" }}>
              My tickets
            </button>
          </div>

          {/* Search Box row */}
          <div className="row">
            <div className="col-12 col-md-8"> {/* Search box ko thoda chhota rakha hai desktop par */}
              <input
                type="text"
                className="form-control p-3" // 'p-3' se input box thoda bada aur sundar dikhega
                placeholder="Eg: How do I open my account, How do I activate F&O..."
                style={{ borderRadius: "4px", fontSize: "18px" }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;