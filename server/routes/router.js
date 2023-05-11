import express from "express"
import { checkOut } from "../controllers/paymentController.js"

const router = express.Router()
router.use(express.json())
router.route("/checkout").post(checkOut)

export default router