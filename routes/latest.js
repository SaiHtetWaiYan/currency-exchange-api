const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    info: "Market Rate",
    description: "Market rates for various currencies",
    rates: {
      USD: "3,400.0",
      EUR: "3,400.0",
    },
  });
});

module.exports = router;
