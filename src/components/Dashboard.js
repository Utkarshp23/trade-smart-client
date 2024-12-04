import React, { useState } from "react";
import StockSelector from "./StockSelector";
import RealTimeGraph from "./RealTimeGraph";
import PortfolioDetails from "./PortfolioDetails";
import ActionButtons from "./ActionButtons";

const Dashboard = ({ userName }) => {
  console.log(userName);
  const [selectedStock, setSelectedStock] = useState("AAPL");
  const [portfolio, setPortfolio] = useState({ quantity: 0, avgPrice: 0 });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ padding: "10px", backgroundColor: "#f4f4f4", textAlign: "center" }}>
        <h1>Welcome, {userName}</h1>
      </header>
      <main style={{ padding: "20px" }}>
        <StockSelector selectedStock={selectedStock} setSelectedStock={setSelectedStock} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <RealTimeGraph selectedStock={selectedStock} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <PortfolioDetails selectedStock={selectedStock} portfolio={portfolio} />
          <ActionButtons
            selectedStock={selectedStock}
            onBuy={() => alert(`Buying more ${selectedStock}!`)}
            onSell={() => alert(`Selling ${selectedStock}!`)}
          />
        </div>
      </main>
      {/* Stock Selector */}
    </div>
  );
};

export default Dashboard;