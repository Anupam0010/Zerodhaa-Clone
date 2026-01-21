import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // const { closeBuyWindow } = useContext(GeneralContext);

  // const handleBuyClick = () => {
  //   axios.post("http://localhost:3002/newOrder", {
  //     name: uid,
  //     qty: stockQuantity,
  //     price: stockPrice,
  //     mode: "BUY",
  //   });

  //   closeBuyWindow();
  // };
const { closeBuyWindow, fetchHoldings } = useContext(GeneralContext);

const handleBuyClick = async () => {
  await axios.post("http://localhost:3002/buyStock", {
    name: uid,
    qty: Number(stockQuantity),
    price: Number(stockPrice),
  });

  // 🔥 MOST IMPORTANT
  fetchHoldings();

  closeBuyWindow();
};

  const handleCancelClick = () => {
    closeBuyWindow();
  };



  return (
    <div className="container" id="buy-window" draggable="true">

      {/* HEADER */}
      <div className="header">
        <h3>
          Buy {uid} <span>NSE</span>
        </h3>
        
      </div>

      {/* BODY */}
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              
              onChange={(e) => setStockQuantity(e.target.value)}
             value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      {/* FOOTER */}
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;

