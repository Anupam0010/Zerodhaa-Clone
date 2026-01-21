import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container mt-md-0 mt-5">
      <div className="row d-flex align-items-md-center">
        <h2 className="text-center">People</h2>
        <div className="col-md-6 col-12 p-md-5  mt-md-0 mt-3 text-center "  >
            <img src="media\images\myimg.jpeg" className="img-fluid rounded-circle " style={{ width: "280px", height: "280px", objectFit: "cover", marginTop:"10px" }}/> 
            <br/>
            <p className="mt-3 ">Anupam Rachit <br/> Web Developer</p>
        </div>
        <div className="col-md-6 col-12 fs-md-4 mb-md-0 mb-5 mt-md-5 mt-4 "    >
          <p style={{color:"#424242"}}>
            Hi, I’m Anupam Rachit.
I’m a B.Tech 3rd year student with a strong interest in Web Development and Data Structures & Algorithms. I enjoy building clean, scalable web applications and continuously improving my problem-solving skills through DSA.

I believe in learning by building — turning ideas into real products, understanding systems from the ground up, and writing code that is simple, efficient, and meaningful.
Currently, I’m focused on strengthening my full-stack development skills while preparing for industry-level software roles.
          </p>
            <p>Connect on <Link to={""} style={{textDecoration:"None", color:"#387ed1"}}>Homepage</Link> / <Link to={""} style={{textDecoration:"None", color:"#387ed1"}}>TradingQnA</Link> / <Link to={""} style={{textDecoration:"None", color:"#387ed1"}}>Twitter</Link></p>
          
        </div>
      </div>
    </div>
  );
}

export default Team;
