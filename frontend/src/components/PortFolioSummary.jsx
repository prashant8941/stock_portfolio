const PortfolioSummary = ({ stocks }) => {
  const totalInvestment = stocks.reduce((sum, stock) => {
    return sum + stock.quantity * stock.buyPrice;
  }, 0);

  const currentValue = stocks.reduce((sum, stock) => {
    return sum + stock.quantity * stock.currentPrice;
  }, 0);

  const profitLoss = currentValue - totalInvestment;

  return (
    <div className="summary">
      <div className="summary-card">
        <h3>Total Investment</h3>
        <p>₹{totalInvestment.toFixed(2)}</p>
      </div>

      <div className="summary-card">
        <h3>Current Value</h3>
        <p>₹{currentValue.toFixed(2)}</p>
      </div>

      <div className="summary-card">
        <h3>Profit / Loss</h3>
        <p className={profitLoss >= 0 ? "profit" : "loss"}>
          ₹{profitLoss.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default PortfolioSummary;