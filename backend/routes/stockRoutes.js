const express = require("express");
const {
  addStock,
  getStocks,
  updateStock,
  deleteStock
} = require("../controllers/stockController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addStock);
router.get("/", protect, getStocks);
router.put("/:id", protect, updateStock);
router.delete("/:id", protect, deleteStock);

module.exports = router;