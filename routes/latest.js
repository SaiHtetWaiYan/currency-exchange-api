const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

router.get("/", async (req, res, next) => {
  const path = require("path");
  const filePath = path.join(__dirname, "data.json");

  try {
    const data = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);

    res.json(jsonData);
  } catch (err) {
    console.error("Error reading file:", err);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
