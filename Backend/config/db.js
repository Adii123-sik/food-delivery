import mongoose  from "mongoose";


 export const connectDb= async(url)=>{
    await mongoose.connect(url)
    .then(()=>{
        console.log("connect to database")
    });
}