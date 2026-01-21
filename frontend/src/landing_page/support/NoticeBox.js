import React from "react";

function NoticeBox() {
  return (
    <div className="container " >
      <div className="row">
        
        <div className="col-4 ">
          <div
            className="p-4"
            style={{
              backgroundColor: "#fff4e5",
              borderLeft: "4px solid #ff9800",
            }}
          >
            <ul className="mb-0 notice-list">
              <li>
                <a href="#" className="notice-link">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
              <li>
                <a href="#" className="notice-link">
                  Surveillance measure on scrips - January 2026
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeBox;
