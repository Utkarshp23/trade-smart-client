import React from "react";

const PortfolioDetails = ({ selectedStock, portfolio }) => {
  return (
    <div>
      <h3>Portfolio Details</h3>
      <p><strong>Stock:</strong> {selectedStock}</p>
      <p><strong>Quantity:</strong> {portfolio.quantity}</p>
      <p><strong>Average Price:</strong> ${portfolio.avgPrice.toFixed(2)}</p>
    </div>
  );
};

export default PortfolioDetails;
