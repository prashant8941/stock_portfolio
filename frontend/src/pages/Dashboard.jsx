import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import StockForm from "../components/StockForm";
import StockList from "../components/StockList";
import PortfolioSummary from "../components/PortfolioSummary";
import AiInsights from "../components/AiInsights";

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [editStock, setEditStock] = useState(null);

  const fetchStocks = async () => {
    try {
      const res = await API.get("/stocks");
      setStocks(res.data);
    } catch (error) {
      alert("Failed to fetch stocks");
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Stock Portfolio Dashboard</h1>

        <PortfolioSummary stocks={stocks} />

        <StockForm
          fetchStocks={fetchStocks}
          editStock={editStock}
          setEditStock={setEditStock}
        />

        <StockList
          stocks={stocks}
          fetchStocks={fetchStocks}
          setEditStock={setEditStock}
        />

        <AiInsights stocks={stocks} />
      </div>
    </>
  );
};

export default Dashboard;