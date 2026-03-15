import e from "express";
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connectDb;