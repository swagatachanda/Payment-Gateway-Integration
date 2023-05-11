import { instance } from "../server.js"

export const checkOut = async (req, res) => {
    const options = {
        amount: req.body.amount, // amount in the smallest currency unit
        currency: "INR",
    }
    const order = await instance.orders.create(options)

    console.log(order)
    res.status(200).json({
        success: true,
        order,
    })
}

export const paymentverification = async (req, res) => {
    const options = {
        amount: req.body.amount, // amount in the smallest currency unit
        currency: "INR",
    }
    const order = await instance.orders.create(options)

    console.log(order)
    res.status(200).json({
        success: true,
        order,
    })
}
