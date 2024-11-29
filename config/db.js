// config/db.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); 

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI; 
        if (!uri) {
            throw new Error('MongoDB URI is not defined. Please check your .env file.');
        }
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDB;
