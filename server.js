const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection Events
mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB Connected Successfully");
});

mongoose.connection.on("error", (err) => {
    console.log("❌ MongoDB Connection Error");
    console.log(err);
});

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/VehicleServiceDB");

// Import Routes
const vehicleRoutes = require("./routes/vehicleroutes");

// Routes Middleware
app.use("/api/vehicles", vehicleRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Vehicle Service Management API Running...");
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});