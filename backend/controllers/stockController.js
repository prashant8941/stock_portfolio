const Stock = require("../models/Stock");

exports.addStock = async (req, res) => {
  try {
    const { stockName, symbol, quantity, buyPrice, currentPrice, sector } =
      req.body;

    if (!stockName || !symbol || !quantity || !buyPrice || !currentPrice || !sector) {
      return res.status(400).json({
        message: "Please fill all fields"
      });
    }

    const stock = await Stock.create({
      user: req.user._id,
      stockName,
      symbol,
      quantity,
      buyPrice,
      currentPrice,
      sector
    });

    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({
      message: "Failed to add stock",
      error: error.message
    });
  }
};

exports.getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find({ user: req.user._id }).sort({
      createdAt: -1
    });

    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch stocks",
      error: error.message
    });
  }
};

exports.updateStock = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);

    if (!stock) {
      return res.status(404).json({
        message: "Stock not found"
      });
    }

    if (stock.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    const updatedStock = await Stock.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedStock);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update stock",
      error: error.message
    });
  }
};

exports.deleteStock = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);

    if (!stock) {
      return res.status(404).json({
        message: "Stock not found"
      });
    }

    if (stock.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    await stock.deleteOne();

    res.status(200).json({
      message: "Stock deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete stock",
      error: error.message
    });
  }
};