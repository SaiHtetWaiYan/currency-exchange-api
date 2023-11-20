const express = require("express");
const fs = require("fs");

const app = express();
const port = 3001;

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
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
