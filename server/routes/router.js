import express from "express"
import { checkOut, paymentVerification } from "../controllers/paymentController.js"

const router = express.Router()
router.use(express.json())
router.route("/checkout").post(checkOut)
router.route("/paymentverification").post(paymentVerification)

export default router