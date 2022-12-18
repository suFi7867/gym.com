import React from "react";
import { chakra, Box, Flex, Icon, HStack, VStack, Text, Heading } from "@chakra-ui/react";
import { IoCheckmark } from "react-icons/io5";

const Pricing = () => {
  const Feature = (props) => {
    return (
      <Flex alignSelf="start" w="full">
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          _light={{ color: "green.500" }}
          viewBox="0 0 20 20"
          fill="currentColor"
          as={IoCheckmark}
        />
        <chakra.p
          fontSize="lg"
          color="gray.600"
          _dark={{ color: "#151515" }}
          {...props}
        />
      </Flex>
    );
  };
  return (
    <Flex
      bg="#151515"
      _dark={{ bg: "#151515" }}
      p={{ base: 5, md:20, lg: 10 }}
      pt="20"
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="full" pt={8}>
                <Text fontWeight={"700"} color="#f45f02" mb="5" textAlign={"center"}>OUR PLAN</Text>
                <Heading color="#fff" fontSize={30} mb="20" textAlign={"center"}>CHOOSE YOUR PRICING PLAN</Heading>
        <Flex
          direction={{ base: "column", md: "column", lg:"row" }}
          justifyContent="center"
          mb={{ base: 6, sm: 0 }}
        >
          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            rounded="lg"
            borderTopRightRadius={0}
            borderBottomLeftRadius="lg"
            bg="#151515"
            _dark={{ bg: "gray.700" }}
            my={6}
            direction="column"
            border="1px solid #8a918c"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold" color="#fff">
                Basic
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                  color={"#f45f02"}
                >
                  $0
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  _light={{ color: "gray.400" }}
                >
                  Free
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg="#151515"
              _dark={{ bg: "gray.800" }}
              borderBottomLeftRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
               <Feature>Free riding</Feature>
                <Feature>Unlimited equipments</Feature>
                <Feature>Personal trainer</Feature>
                <Feature>Weight losing classes</Feature>
                <Feature>Month to mouth</Feature>
                <Feature>Support interval training</Feature>
              </VStack>
              <button className="oggy">ENROLL NOW</button>
            </VStack>
          </Flex>

          <Flex
            flex={{ base: 1, lg: "initial" }}
            w={{ lg: 2.4 / 7 }}
            rounded="lg"
            bg="#151515"
            _dark={{ bg: "gray.700" }}
            mt={{ base: 4, sm: -4 }}
            shadow="xl"
            zIndex={30}
            direction="column"
            border="1px solid #8a918c"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold" color="#fff">
                Elite Monthly
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                  color={"#f45f02"}
                >
                  $149
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  _light={{ color: "gray.400" }}
                >
                  /month
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              h="full"
              roundedBottom="lg"
              spacing={8}
              bg="#151515"
              _dark={{ bg: "gray.800" }}
              p={12}
             
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>Free riding</Feature>
                <Feature>Unlimited equipments</Feature>
                <Feature>Personal trainer</Feature>
                <Feature>Weight losing classes</Feature>
                <Feature>Month to mouth</Feature>
                <Feature>Support interval training</Feature>
              </VStack>
              <button className="oggy">ENROLL NOW</button>
            </VStack>
          </Flex>

          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            roundedTop="lg"
            borderBottomRightRadius="lg"
            borderTopLeftRadius={0}
            bg="#151515"
            _dark={{ bg: "gray.700" }}
            my={6}
            direction="column"
            border="1px solid #8a918c"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold" color="#fff">
              Elite Yearly
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                  color={"#f45f02"}
                >
                  $5.25
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  _light={{ color: "gray.400" }}
                >
                  /month
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg="#151515"
              _dark={{ bg: "gray.800" }}
              borderBottomRightRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>Free riding</Feature>
                <Feature>Unlimited equipments</Feature>
                <Feature>Personal trainer</Feature>
                <Feature>Weight losing classes</Feature>
                <Feature>Month to mouth</Feature>
                <Feature>Support interval training</Feature>
              </VStack>
              <button className="oggy">ENROLL NOW</button>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Pricing;