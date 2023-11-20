const express = require("express");
const router = express.Router();
const fs = require("fs");
router.use(express.json());
router.get("/", async (req, res, next) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

module.exports = router;
