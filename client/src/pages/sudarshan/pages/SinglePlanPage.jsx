import { Box, Heading, Image,chakra, VStack,SimpleGrid,Flex,Text, Tag} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import workout from "../assets/workout.png"
import React from 'react'
import { useParams } from 'react-router-dom'
import {FaRocket,FaCoffee,FaNutritionix} from "react-icons/fa"

const SinglePlanPage = () => {
  const {plan}=useParams()
  let data = [
    {
      name: "DAILY WORKOUTS",
      logo:FaRocket,
      desc:"Excepteur pit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      type:"8-Week Training Plan",
      button: "GET STARTED",
    },
    {
      name: "NUTRITION PLAN",
      logo:FaNutritionix,
      desc:"Excepteur pit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      type:"Properly fuel your Body",
      
      button: "GET STARTED",
    },
    {
      name: "SUPPLEMENT GUIDE",
      logo:FaCoffee,
      desc:"Excepteur pit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      type:"Increase your Results",
      
      button: "GET STARTED",
    },
   
  ];

  return (
   <Box bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
   w="100%" >
   
    <Box  width={"70%"} margin="auto" align="center">
    <VStack spacing={"8"}>
    <Heading color={"white"}>{plan}</Heading>
    <Heading fontSize={"22.75"} color={"white"}>WORKOUT SCHEDULE</Heading>
    <chakra.P width="80%" color={"white"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</chakra.P>
   
    <Link to={`/plans/${plan}/${"workout"}`}><Image src={workout}></Image></Link>
    <Heading  fontSize={"22.75"} color={"white"}>THIS WORKOUT PLAN INCLUDES</Heading>
    <VStack maxW="1400px" m="auto">
            <SimpleGrid
              p={5}
              w="100%"
              spacing={10}
              columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
            >
              {data?.map((item, index) => (
                <Box
                  key={index}
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  pb={5}
                  maxW="xs"
                  mx="auto"
                  spacing={5}
                  bg="whiteAlpha.300"
                  // _dark={{
                  //   bg: "gray.800",
                  // }}
                  shadow="lg"
                  rounded="lg"
                  z-index={-1}
                >
                  <Box marginTop={2} color={"white"} >
                <Text fontSize={"4xl"}><item.logo/></Text>
                  </Box>
                  <Box textAlign={"center"} px={0} py={-50}>
                    <chakra.h1
                      color="white"
                      mt={2}
                      mb={2}
                      _dark={{
                        color: "white",
                      }}
                      fontWeight="bold"
                      fontSize="14.56px"
                      textTransform="uppercase"
                    >
                      {item.name}
                    </chakra.h1>
                    <chakra.p
                      mt={-1}
                      fontSize="sm"
                      color="#cb1313"
                      _dark={{
                        color: "gray.400",
                      }}
                      key={2}
                      
                      z-index={2}
                    >
                      {item.type}
                    </chakra.p>
                    <chakra.p
                    width={"90%"}
                    margin={"auto"}
                    key={1}
                      mt={2}
                      mb={2}
                      fontSize="12.35"
                      color="white"
                      _dark={{
                        color: "gray.400",
                      }}
                      z-index={2}
                    >
                      {item.desc}
                    </chakra.p>
                   
                  </Box>
                  
                  
                  <Box   align={"center"}>
                    <Link to={`/plans/${item.name}`}>
                    <chakra.button
                      mt={2}
                      mb={2}
                      px={4}
                      py={3}
                      // bg="white"
                      fontSize="xs"
                      color="white"
                      fontWeight="bold"
                      rounded="lg"
                      textTransform="uppercase"
                      _hover={{
                        bg: "white",
                        color: "#f45f02;",
                      }}
                      // _focus={{
                      //   bg: "gray.400",
                      // }}
                      bg="#cb1313"
                      alignSelf={"center"}
                    >
                      {item.button}
                    </chakra.button></Link>
                  
                  </Box>
                
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
    
    </VStack>
    </Box>
   
   
 
   </Box>
  )
}

export default SinglePlanPage
