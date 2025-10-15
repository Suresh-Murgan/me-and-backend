// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
// import express from 'express';




// const app =express()
// ;(async()=>{
//     try{
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error",(error)=>{
//         console.error("ERROR:",error) // log the error to the console
//         throw error; // crash the server to avoid undefined behavior
//     })
//     app.listen(process.env.PORT,()=>{
//         console.log(`Server started on PORT ${process.env.PORT}`);
//     })
//     }catch(err){
//         console.error("ERROR:",err);
//         throw err;
//     }
// })()//ifiy