import API from "../api/axios";

const StockList = ({ stocks, fetchStocks, setEditStock }) => {
  const deleteStock = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this stock?");

    if (!confirmDelete) return;

    try {
      await API.delete(`/stocks/${id}`);
      alert("Stock deleted successfully");
      fetchStocks();
    } catch (error) {
      alert("Failed to delete stock");
    }
  };

  return (
    <div className="stock-list">
      <h2>Your Stocks</h2>

      {stocks.length === 0 ? (
        <p>No stocks added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Symbol</th>
              <th>Sector</th>
              <th>Qty</th>
              <th>Buy Price</th>
              <th>Current Price</th>
              <th>P/L</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {stocks.map((stock) => {
              const investment = stock.quantity * stock.buyPrice;
              const value = stock.quantity * stock.currentPrice;
              const profitLoss = value - investment;

              return (
                <tr key={stock._id}>
                  <td>{stock.stockName}</td>
                  <td>{stock.symbol}</td>
                  <td>{stock.sector}</td>
                  <td>{stock.quantity}</td>
                  <td>₹{stock.buyPrice}</td>
                  <td>₹{stock.currentPrice}</td>
                  <td className={profitLoss >= 0 ? "profit" : "loss"}>
                    ₹{profitLoss.toFixed(2)}
                  </td>
                  <td>
                    <button onClick={() => setEditStock(stock)}>Edit</button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteStock(stock._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StockList;