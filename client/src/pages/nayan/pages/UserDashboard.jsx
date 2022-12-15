import { Box, Img, Tag, Text } from "@chakra-ui/react";
import React from "react";
import Vid from "./Vid";
const UserDashboard = () => {
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
          left={-70}
          bottom={0}
          transform={"scaleX(-1)"}
        />
      </Box>

      <Box border="2px solid white" maxW="xl" >
        <Box
          bg="whiteAlpha.100"
          position="absolute"
          top={5}
          
          right={{ base: "50", sm: "0", md: "150", lg: "50" }}
          p="10px"
          display={{ base: "grid", sm: "grid", md: "grid", lg: "flex" }}
          gap="20px"
        //   borderRadius="20px"
          w={{ base: "70%", sm: "100%", md: "50%", lg: "40%" }}
        >
          <Box w={{ base: "100%", sm: "40%", md: "50%", lg: "40%" }}>
            <Img src="https://i.ibb.co/9ZgzzJy/Pngtree-user-avatar-login-interface-abstract-6796239.png" />
          </Box>
          <Box color="white">
            <Text fontSize="2xl">Name lindsey</Text>
            <Tag bg="#f45f02" color="white" mb="10px">
              @lindsey_jam3s
            </Tag>
            <Text>Age Alenendra</Text>
            <Text>Height 5'8"</Text>
            <Text>Weight 75kg</Text>
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
          </Box>
        </Box>
        <Box
          position={"absolute"}
          top={265}
          right={50}
          
        >
          <Vid />
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard;
