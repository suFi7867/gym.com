import { Button, Divider, FormControl, FormHelperText, FormLabel, HStack, Image, Input, PinInput, PinInputField, Stack, Text, useToast, VStack, Wrap } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserData } from '../../../redux/auth/auth.actions'
import { ACTION_PURCHASE } from '../../../redux/cart/cart.actions'
import RazorPay from '../../Payment'
import pay from "../styles/pay.png"

const PaymentForm = () => {

    const price = 1100
    const navigate = useNavigate()
    const toast = useToast()

    const {userData, token, isAuth } = useSelector((store) => store.auth);
    const total = userData.cart.reduce((a, b) => a + +b.price, 0);
  
    const dispatch = useDispatch()

    const PaymentDone = () => {
        // prompt()

        dispatch(ACTION_PURCHASE(token.email))
        .then((res)=> {
            dispatch(getUserData(token.email))
            
              toast({
                title: 'Payment Successfull.',
                description: "Thank You For Shopping.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            navigate("/OrderSuccessfull")
        })


    }
    

    return (

        <>
            <VStack  position={"relative"} justify="center" align="center"  overflow="hidden"
             bgGradient=" radial-gradient(circle, rgba(0,0,0,1) 7%, rgba(64,64,64,1) 100%)" spacing={10} w={{ base: "full", md: "1200px" }} 
              margin="auto" style={{ width:"100%", height:"90vh"}} >


                <Stack zIndex={"1"} direction={{ base: "column", md: "row" }} spacing={5}  >

                    <VStack align="flex-start" padding={5} bg="#F3F3F3"
                    >

                        <HStack  >
                            <Image w={25} h="100%" src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg" />
                            <Text>Debit/Credit Card</Text>
                        </HStack>

                        <Divider />


                        <HStack>
                            <Image w={25} src="https://images.bewakoof.com/web/Group-1645705428.png" />
                            <Text>WALLET</Text>
                        </HStack>

                        <Divider />
                        <HStack>
                            <Image w={25} src="https://images.bewakoof.com/web/upi-icon-1645705429.png" />
                            <Text>UPI</Text>
                        </HStack>

                        <Divider />
                        <HStack>
                            <Image w={25} src="https://images.bewakoof.com/web/nb-icon-1645705428.png" />
                            <Text>NET BANKING</Text>
                        </HStack>

                        <Divider />
                        <HStack>
                            <Image w={25} src="https://images.bewakoof.com/web/cod-icon-1645705427.png" />
                            <Text>CASH ON DELIVERY</Text>
                        </HStack>

                        <Divider />


                    </VStack>

                    <VStack  bg="whiteAlpha.200" boxShadow="2xl" align="flex-start" spacing={5} padding={5}  >
                        <VStack>
                            <HStack>
                                <FormControl  >
                                    <FormLabel fontSize="1.1rem" color={"white"} >First Name</FormLabel>
                                    <Input focusBorderColor='#F87219' textColor={"white"} size="md" />
                                </FormControl>
                                <FormControl  >
                                    <FormLabel fontSize="1.1rem" color={"white"}>Last Name</FormLabel>
                                    <Input focusBorderColor='#F87219' textColor={"white"} size="md" />
                                </FormControl>
                            </HStack>

                            <FormControl  >
                                <FormLabel fontSize="1.1rem" color={"white"}>Address</FormLabel>
                                <Input focusBorderColor='#F87219' textColor={"white"} size="md" />
                            </FormControl>

                            <HStack>
                                <FormControl  >
                                    <FormLabel fontSize="1.1rem" color={"white"}>City</FormLabel>
                                    <Input focusBorderColor='#F87219' textColor={"white"} size="md" />
                                </FormControl>
                                <FormControl  >
                                    <FormLabel fontSize="1.1rem" color={"white"}>State</FormLabel>
                                    <Input focusBorderColor='#F87219' textColor={"white"} type="city" size="md" />
                                </FormControl>
                            </HStack>
                        </VStack>

                        <Divider />

                        <VStack>
                            <HStack width="full" >
                                <FormControl  >
                                    <FormLabel fontSize="1.1rem" color={"white"}>Card Number</FormLabel>
                                    <Input focusBorderColor='#F87219' textColor={"white"} size="md" />
                                </FormControl>

                                <FormControl >
                                    <FormLabel fontSize="1.1rem" color={"white"}>CVV</FormLabel>
                                    <HStack width="full" >
                                        <PinInput focusBorderColor='#F87219' textColor={"white"} size="md">
                                            <PinInputField textColor={"white"} />
                                            <PinInputField textColor={"white"} />
                                            <PinInputField textColor={"white"}/>
                                        </PinInput>
                                    </HStack>
                                </FormControl>
                            </HStack>

                            <HStack>
                                <FormControl  >
                                    <FormLabel fontSize="1.1rem" color={"white"}>Exp Month</FormLabel>
                                    <Input focusBorderColor='#F87219' textColor={"white"} size="md" />
                                </FormControl>
                                <FormControl  >
                                    <FormLabel fontSize="1.1rem" color={"white"}>Exp Year</FormLabel>
                                    <Input focusBorderColor='#F87219' textColor={"white"} size="md" />
                                </FormControl>
                            </HStack>

                            <Button style={{ marginTop: "20px" }} height="40px" onClick={PaymentDone} fontSize="xl" padding={3} w="full" colorScheme='orange'> ${total} {"  "} Pay Now </Button>

                        </VStack>

                    </VStack>

                </Stack>

                <Image h="120%"  position={"absolute"}  src={pay} />
                <RazorPay  />

            </VStack>

        </>

    )
}

export default PaymentForm;