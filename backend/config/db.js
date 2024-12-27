import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        if (!process.env.MONGO_URI) {
            console.error("MongoDB URI is missing. Please check your .env file.");
            process.exit(1); // Exit with failure if URI is missing
        }
        
        console.error(`Error: ${error.message}`);
        process.exit(1); //process code 1 is exit with failure, 0 means success
    }
}