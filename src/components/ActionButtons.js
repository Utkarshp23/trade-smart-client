import React from "react";

const ActionButtons = ({ selectedStock, onBuy, onSell }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={onBuy}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Buy
      </button>
      <button
        onClick={onSell}
        style={{
          padding: "10px 20px",
          backgroundColor: "#F44336",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Sell
      </button>
    </div>
  );
};

export default ActionButtons;
