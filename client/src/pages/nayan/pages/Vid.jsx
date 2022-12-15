import { chakra, Box, Image, Flex } from "@chakra-ui/react";
import React from "react";

const Vid = () => {
  return (
    <Box
      //   key={index}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      borderRadius="10px"
      pb={5}
      maxW="xs"
      mx="auto"
      bg="whiteAlpha.100"
      // _dark={{
      //   bg: "gray.800",
      // }}
      shadow="lg"
      rounded="lg"
      z-index={-1}
    >
      <Box w="100%" h="200px" m="auto">
        <Image
          h="100%"
          w="100%"
          fit="cover"
          borderRadius="10px"
          mt={0}
          //   src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          //   src={item.image}
          src="https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-blueprint-to-size.jpg"
          alt="NIKE AIR"
        />
      </Box>
      <Box width={"90%"} margin={"auto"} textAlign={"center"} px={0} py={-50}>
        <chakra.h1
          color="white"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          fontSize="14.56px"
          textTransform="uppercase"
        >
          name
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
          Workout Plan
        </chakra.p>
        <chakra.p
          key={1}
          mt={2}
          mb={2}
          fontSize="13.35"
          color="white"
          _dark={{
            color: "gray.400",
          }}
          z-index={2}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        </chakra.p>
      </Box>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={4}
        py={2}
        // bg="gray.900"
        roundedBottom="lg"
      >
        <chakra.h1 color="white" fontSize="sm">
          <i class="fa-solid fa-trophy"> </i>  LEAN
        </chakra.h1>
        <chakra.h1 color="white" fontSize="sm">
          <i class="fa-solid fa-person-half-dress"> </i> Female
        </chakra.h1>
        <chakra.h1 color="white" fontSize="sm">
          <i class="fa-regular fa-clock"> </i> 1 Month
        </chakra.h1>
      </Flex>
      <Box align={"center"}>
        {/* <Link to={`/plans/${item.name}`}> */}
        <chakra.button
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
          bg="#f45f02"
          alignSelf={"center"}
        >
          VIEW DETAILS
        </chakra.button>
        {/* </Link> */}
      </Box>
    </Box>
  );
};

export default Vid;
