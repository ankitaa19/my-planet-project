// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const planetRoutes = require('./routes/planetRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Use routes for planet API
app.use('/api/planets', planetRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
