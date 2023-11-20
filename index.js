// Import packages
const express = require("express");
const latest = require("./routes/latest");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/latest", latest);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
