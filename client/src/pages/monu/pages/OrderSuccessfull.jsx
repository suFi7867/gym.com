import { Button, VStack, Text, Image, HStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
//import pay from "../Styles/pay.png"

const OrderSuccessfull = () => {

    const navigate = useNavigate();

    return (
        <div>
            <VStack margin="auto"
             spacing={10} position={"relative"} overflow="hidden"
                bgGradient="radial-gradient(circle, rgba(0,0,0,1) 7%, rgba(64,64,64,1) 100%)" style={{ width: "100%", height: "100vh" }} >
                <div>
                    <Text style={{ color: "orange", fontSize: "2.5rem", fontWeight: "bold" }}>Hurray !! Order Successful</Text>
                </div>
                <div>
                    <img
                        src="https://www.pinkwigscloset.com/images/success-tick.gif"
                        width="500px"
                        alt="img"
                    />
                </div>

              {/*  <Image w="80%" position={"absolute"} top="0" src={pay} /> */}
                <Button width="30%" height="50px" onClick={() => navigate("/")} fontSize="x" padding={3} w="30%" colorScheme='orange'> CONTINUE SHOPPING </Button>
            </VStack>
        </div>
    );
};

export default OrderSuccessfull;