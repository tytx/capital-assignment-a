const express = require("express");
const cors = require("cors"); 
const app = express();

app.use(cors()); 
app.use(express.json());

const portfolioRoutes = require("./routes/portfolioRoutes");

app.use("/portfolios", portfolioRoutes);

module.exports = app;