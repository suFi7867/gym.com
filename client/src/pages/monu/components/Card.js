import React from "react";
import { chakra, Box, Flex, Link, Image } from "@chakra-ui/react";
const Card = ({ title, desc, image }) => {
  return (
    <div>
      <Flex
        bg="#ffff"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={30}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="s"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          mx="auto"
          p={5}
        >
          <Image w="full" h={80} fit="cover" src={image} alt="avatar" />

          <Box py={5} textAlign="center">
            <Link
              display="block"
              fontSize="2xl"
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              {title}
            </Link>
            <chakra.span
              fontSize="sm"
              color="gray.500"
              _dark={{
                color: "gray.200",
              }}
            >
              {desc}
            </chakra.span>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Card;
