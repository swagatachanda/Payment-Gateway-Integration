import { Text, Box, Heading, VStack } from "@chakra-ui/react"
import React from "react"
import { useSearchParams } from "react-router-dom"

const PaymentSuccess = () => {
    const search = useSearchParams()[0]
    // console.log(search.get("reference"))
    const referenceNum = search.get("reference")
    return (
        <Box>
            <VStack h='100vh' justifyContent={"center"}>
                <Heading textTransform={"uppercase"}>Order Successfull</Heading>
                <Text>Reference no. {referenceNum}</Text>
            </VStack>
        </Box>
    )
}

export default PaymentSuccess
