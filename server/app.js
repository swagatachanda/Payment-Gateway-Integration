import express from "express"
import { config } from "dotenv"
import paymentRouter from "./routes/router.js"
import cors from "cors"
config({ path: "./configs/config.env" })
export const app = express()
app.use("/api", paymentRouter)
app.use(cors())
app.set("trust proxy", 1)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
