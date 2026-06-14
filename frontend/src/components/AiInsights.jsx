import { useState } from "react";
import API from "../api/axios";

const AiInsights = ({ stocks }) => {
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState("");

  const getAiInsight = async () => {
    if (stocks.length === 0) {
      alert("Please add stocks first");
      return;
    }

    try {
      setLoading(true);
      setInsight("");

      const res = await API.post("/api/ai/analyze", { stocks });

      setInsight(res.data.analysis);
    } catch (error) {
      alert(error.response?.data?.message || "AI analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-box">
      <h2>AI Portfolio Insights</h2>

      <button onClick={getAiInsight} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze My Portfolio"}
      </button>

      {insight && (
        <div className="ai-result">
          <h3>AI Analysis</h3>
          <p>{insight}</p>
        </div>
      )}
    </div>
  );
};

export default AiInsights;