import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import 'dotenv/config'
import orderRouter from "./routes/orderRoute.js";




// app config
const app=express();
const port= process.env.PORT || 4000;


//midllewares


app.use(express.json())
app.use(cors());


//db connection

connectDb(process.env.MONGODB_URI);

//api end points

app.use("/api/food",foodRouter);
app.use('/images', express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`port is listening on ${port}`)
})
