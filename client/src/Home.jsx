import React from "react"
import { Box, Stack } from "@chakra-ui/react"
import Card from "./Card"
import axios from "axios"

const Home = () => {
    const checkOutHandler = async (amount) => {
        const {
            data: { key },
        } = await axios.get("/api/getkey")
        const {
            data: { order },
        } = await axios.post(
            "/api/checkout",
            { amount },
            { headers: { "Content-Type": "application/json" } }
        )
        // console.log(window)
        const options = {
            key: key,
            amount: order.amount,
            currency: "INR",
            name: "ABC Enterprise",
            description: "Test Transaction",
            image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Swagata Chanda",
                email: "abc@example.com",
                contact: "9000090000",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = await new window.Razorpay(options)
        rzp1.open()
        console.log(order)
    }
    return (
        <Box>
            <Stack
                h={"100vh"}
                justifyContent={"center"}
                alignItems={"center"}
                direction={["column", "row"]}
            >
                <Card
                    amount={5000}
                    img={
                        "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                    }
                    checkOutHandler={checkOutHandler}
                />
                <Card
                    amount={3000}
                    img={
                        "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                    }
                    checkOutHandler={checkOutHandler}
                />
            </Stack>
        </Box>
    )
}

export default Home
