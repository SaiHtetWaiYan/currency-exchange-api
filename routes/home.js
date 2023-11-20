const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

router.get("/", async (req, res, next) => {
  try {
    // Read data from the JSON file
    const data = await fs.readFile("data.json", "utf8");
    const jsonData = JSON.parse(data);

    // Include the data in the response
    return res.status(200).json({
      title: "Express Testing",
      message: "The app is working properly!",
      data: jsonData, // Include the data from the JSON file in the response
    });
  } catch (err) {
    console.error("Error reading file:", err);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
