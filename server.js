const express = require("express");
const fs = require("fs");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// API endpoint to get data from JSON file
app.get("/api/latest", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const jsonData = JSON.parse(data);
    res.json(jsonData);
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
  });
});

module.exports = app;
