const express = require("express");
const { analyzePortfolio } = require("../controllers/aiController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/analyze", protect, analyzePortfolio);

module.exports = router;