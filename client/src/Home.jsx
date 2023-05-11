import React from "react"
import { Box, Stack } from "@chakra-ui/react"
import Card from "./Card"
import axios from "axios"

const Home = () => {
    const checkOutHandler = async (amount) => {
        const { data } = await axios.post(
            "/api/checkout",
            { amount },
            { headers: { "Content-Type": "application/json" } }
        )
        console.log(data)
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
