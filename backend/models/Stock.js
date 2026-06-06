const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    stockName: {
      type: String,
      required: true
    },

    symbol: {
      type: String,
      required: true
    },

    quantity: {
      type: Number,
      required: true
    },

    buyPrice: {
      type: Number,
      required: true
    },

    currentPrice: {
      type: Number,
      required: true
    },

    sector: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Stock", stockSchema);