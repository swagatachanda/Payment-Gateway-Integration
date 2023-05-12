import express from "express"
import { config } from "dotenv"
import paymentRouter from "./routes/router.js"
import cors from "cors"
import mongoose from "mongoose"
config({ path: "./configs/config.env" })
export const app = express()
app.use("/api", paymentRouter)
app.use(cors())
app.set("trust proxy", 1)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get("/api/getkey", (req, res) => {
    res.status(200).json({
        key: process.env.RAZORPAY_API_KEY,
    })
})
export const connectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB is connected with ${connection.host}`)
}
