import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {  FaDumbbell , FaHeartbeat} from "react-icons/fa"
import {GiFruitBowl} from "react-icons/gi"
const Choose  = () => {
  return (
    <Container maxW={"full"} bg="#0A0A0A" centerContent py={"20"}>
        <Text mb="5" color="#f45f02" fontWeight={"500"}>WHY CHOSE US ?</Text>
        <Heading color="#fff" >PUSH YOUR LIMITS FORWARD</Heading>
        <SimpleGrid columns={[1, 1, 2,4]} mt="20" w="85%">
            <VStack  spacing={2} className="one" >
                 <Box mb="10" borderRadius={"50%"} color="#f45f02" backgroundColor="#2c2b2e" p="5" className="one_one">
                    <FaDumbbell fontSize={"45px"}   />
                 </Box>
                 <Heading fontSize={"23"} mt="10" color="#fff">Modern Equipment</Heading>
                 <Text textAlign={"center"} color="#363538" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</Text>
            </VStack >
            <VStack  spacing={2} className="two" >
                 <Box mb="10" borderRadius={"50%"} color="#f45f02"  backgroundColor="#2c2b2e" p="5" className="two_2">
                    <GiFruitBowl fontSize={"45px"} />
                 </Box>
                 <Heading fontSize={"23"} mt="10" color="#fff">Healthy nutrition plan</Heading>
                 <Text  textAlign={"center"} color="#363538" fontFamily={"Muli, sans-serif"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</Text>
            </VStack>
            <VStack  spacing={2} className="three" >
                 <Box mb="10" borderRadius={"50%"} color="#f45f02" backgroundColor="#2c2b2e" p="5" className="three_3">
                    <FaDumbbell fontSize={"45px"}   />
                 </Box>
                 <Heading fontSize={"23"} mt="10" color="#fff">Professional training plan</Heading>
                 <Text textAlign={"center"}  color="#363538" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</Text>
            </VStack>
            <VStack  spacing={2} className="four" >
                 <Box borderRadius={"50%"} mb="10"  color="#f45f02" backgroundColor="#2c2b2e" p="5" className="four_4" >
                    <FaHeartbeat fontSize={"45px"}  />
                 </Box>
                 <Heading fontSize={"23"} mt="10" color="#fff">Unique to your needs</Heading>
                 <Text textAlign={"center"}  color="#363538" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</Text>
            </VStack>
        </SimpleGrid>
      
    </Container>
  )
}

export default Choose