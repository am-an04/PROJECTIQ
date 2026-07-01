import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || "5000",

  NODE_ENV: process.env.NODE_ENV || "development",

  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/projectiq",

  JWT_SECRET:
    process.env.JWT_SECRET ||
    "change_this_secret",
};