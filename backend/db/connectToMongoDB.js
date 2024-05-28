import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongoDB = async () => {
	try {
		await mongoose.connect();
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
