const dotenv = require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoute")
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Sever running on PORT ${PORT}`);
});
