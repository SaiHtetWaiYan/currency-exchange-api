const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const data = await fs.readFile("data.json", "utf8");
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
