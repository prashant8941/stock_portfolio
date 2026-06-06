const OpenAI = require("openai");

exports.analyzePortfolio = async (req, res) => {
  try {
    const { stocks } = req.body;

    if (!process.env.OPENROUTER_API_KEY) {
      return res.status(500).json({
        message: "OpenRouter API key missing in .env"
      });
    }

    if (!stocks || stocks.length === 0) {
      return res.status(400).json({
        message: "No stocks found for analysis"
      });
    }

    const client = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY.trim(),
      defaultHeaders: {
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "Stock Portfolio AI"
      }
    });

    const portfolioData = stocks.map((stock) => {
      const quantity = Number(stock.quantity);
      const buyPrice = Number(stock.buyPrice);
      const currentPrice = Number(stock.currentPrice);

      const investment = quantity * buyPrice;
      const currentValue = quantity * currentPrice;
      const profitLoss = currentValue - investment;

      return {
        stockName: stock.stockName,
        symbol: stock.symbol,
        sector: stock.sector,
        quantity,
        buyPrice,
        currentPrice,
        investment,
        currentValue,
        profitLoss
      };
    });

    const prompt = `
Analyze this stock portfolio in simple beginner-friendly language:

${JSON.stringify(portfolioData, null, 2)}

Give answer in this format:
1. Portfolio Summary
2. Profit or Loss Explanation
3. Risk Level: Low / Medium / High
4. Diversification Suggestion
5. Simple Advice

Rules:
- Do not guarantee returns.
- Do not directly say buy or sell.
- Keep it simple.
`;

    const completion = await client.chat.completions.create({
      model: "openrouter/auto",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    const analysis =
      completion.choices?.[0]?.message?.content ||
      "AI analysis could not be generated. Please try again.";

    return res.status(200).json({
      analysis
    });
  } catch (error) {
    console.log("OPENROUTER AI ERROR:", error.message);

    return res.status(500).json({
      message: "AI analysis failed",
      error: error.message
    });
  }
};