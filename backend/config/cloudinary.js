import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    });

    console.log("Cloudinary Name:", process.env.CLOUDINARY_NAME);
    console.log("API Key:", process.env.CLOUDINARY_API_KEY ? "LOADED" : "MISSING");
    console.log("Secret:", process.env.CLOUDINARY_SECRET_KEY ? "LOADED" : "MISSING");

    try {
        await cloudinary.api.ping();
        console.log("Cloudinary connection successful");
    } catch (error) {
        console.log("Cloudinary connection failed:");
        console.log(error);
    }
};

export default connectCloudinary;