import { useEffect, useState } from "react";
import API from "../api/axios";

const StockForm = ({ fetchStocks, editStock, setEditStock }) => {
  const [form, setForm] = useState({
    stockName: "",
    symbol: "",
    quantity: "",
    buyPrice: "",
    currentPrice: "",
    sector: ""
  });

  useEffect(() => {
    if (editStock) {
      setForm({
        stockName: editStock.stockName,
        symbol: editStock.symbol,
        quantity: editStock.quantity,
        buyPrice: editStock.buyPrice,
        currentPrice: editStock.currentPrice,
        sector: editStock.sector
      });
    }
  }, [editStock]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setForm({
      stockName: "",
      symbol: "",
      quantity: "",
      buyPrice: "",
      currentPrice: "",
      sector: ""
    });
    setEditStock(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editStock) {
        await API.put(`/api/stocks/${editStock._id}`, form);
        alert("Stock updated successfully");
      } else {
        await API.post("/api/stocks", form);
        alert("Stock added successfully");
      }

      clearForm();
      fetchStocks();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form className="stock-form" onSubmit={handleSubmit}>
      <h2>{editStock ? "Edit Stock" : "Add Stock"}</h2>

      <input
        type="text"
        name="stockName"
        placeholder="Stock Name"
        value={form.stockName}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="symbol"
        placeholder="Symbol e.g. RELIANCE"
        value={form.symbol}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="buyPrice"
        placeholder="Buy Price"
        value={form.buyPrice}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="currentPrice"
        placeholder="Current Price"
        value={form.currentPrice}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="sector"
        placeholder="Sector e.g. Banking, IT, FMCG"
        value={form.sector}
        onChange={handleChange}
        required
      />

      <button type="submit">{editStock ? "Update Stock" : "Add Stock"}</button>

      {editStock && (
        <button type="button" className="cancel-btn" onClick={clearForm}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default StockForm;