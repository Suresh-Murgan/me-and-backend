import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

const connectDB=async()=>{
    try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  console.log(`\n MongoDB connected successfully ${connectionInstance.connection.host}`);
}catch(err){
    console.error("ERROR:",err);
    process.exit(1)
    }
}
export default connectDB;