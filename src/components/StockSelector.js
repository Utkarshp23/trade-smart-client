import React from "react";

const StockSelector = ({ selectedStock, setSelectedStock }) => {
  const availableStocks = ["AAPL", "GOOGL", "MSFT", "TSLA"];

  return (
    <div>
      <label htmlFor="stock-select">Select Stock:</label>
      <select
        id="stock-select"
        value={selectedStock}
        onChange={(e) => setSelectedStock(e.target.value)}
      >
        {availableStocks.map((stock) => (
          <option key={stock} value={stock}>
            {stock}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StockSelector;
