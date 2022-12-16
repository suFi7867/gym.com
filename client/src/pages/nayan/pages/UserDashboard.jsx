import { Box, Img, Tag, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Vid from "./Vid";
const UserDashboard = () => {

  const { userData, token, isAuth, AdminIsAuth } = useSelector((store) => store.auth);

  const {details} = userData

  return (
    <Box minH="100vh" position="relative" maxW="1400vh">
      <Box
        bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
        minH="100vh"
      >
        <Img
          w="700px"
          opacity="0.5"
          src="https://i.ibb.co/ydNHbSH/pngegg-24.png"
          alt="userBody"
          position="absolute"
          right={-70}
          bottom={0}
        //  transform={"scaleX(-1)"}
        />
      </Box>

      <Box border="2px solid white" maxW="xl" >
        <Box
          bg="whiteAlpha.100"
          position="absolute"
          top={5}
          
          left={{ base: "50", sm: "0", md: "150", lg: "50" }}
          p="10px"
          display={{ base: "grid", sm: "grid", md: "grid", lg: "flex" }}
          gap="20px"
        //   borderRadius="20px"
          w={{ base: "70%", sm: "100%", md: "50%", lg: "40%" }}
        >
          <Box w={{ base: "100%", sm: "40%", md: "50%", lg: "40%" }}>
            <Img src="https://i.im.ge/2022/07/29/FwZXw1.jpg" />
          </Box>
          <VStack align={"flex-start"}
          color="white">
            <Text fontSize="2xl">{details.username}</Text>
            <Tag bg="#f45f02" color="white" mb="10px">
            @{details.username}_masai
            </Tag>
            <Text>Age {details.age}</Text>
            <Text>Height {details.height}"</Text>
            <Text>Weight {details.weight}kg</Text>
            <Text>BodyType Lean</Text>
            <Box mt="10px">
              <Tag bg="#f45f02" color="white" mr="10px">
                #photography
              </Tag>
              <Tag bg="#f45f02" color="white" mr="10px">
                #Music
              </Tag>
              <Tag bg="#f45f02" color="white">
                #heavyWeight
              </Tag>
            </Box>
          </VStack>
        </Box>
        <Box
          position={"absolute"}
          top={345}
          left={50}
          
        >
          <Vid />
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard;
