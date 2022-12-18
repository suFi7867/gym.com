import React from "react";
import {BsTwitter , BsGithub} from"react-icons/bs"
import {FaFacebookF , FaLinkedinIn} from"react-icons/fa"
import {IoMdHeadset} from"react-icons/io"
import { chakra, Box, Flex, Icon, HStack, VStack, Text, Heading, Image } from "@chakra-ui/react";
import "../styles/Card.css"
function ProfileCard({image,title,facebook,twitter,linkedin,github}) {
  return (
    <Flex
 
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="320px"
  alignItems="center"
  justifyContent="center"
>
  <Box
    w="sm"
    // mx="auto"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
    overflow="hidden"
  >
    <Image
      w="full"
      h={56}
      fit="cover"
      objectPosition="center"
      src={image}
      alt="avatar"
    />

    <Flex alignItems="center" px={6} py={3} bg="gray.900">
      <Icon as={IoMdHeadset} h={6} w={6} color="white" />

      <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
        Focusing
      </chakra.h1>
    </Flex>

    <Box py={4} px={6}>
      <chakra.h1
        fontSize="xl"
        fontWeight="bold"
        color="#fff"
        _dark={{
          color: "white",
        }}
      >
       {title}
      </chakra.h1>
      <chakra.p
        py={2}
        color="#fff"
        _dark={{
          color: "#fff",
        }}
      >
        Full Stack Developer
      </chakra.p>
      <ul className="our_social_icons">
               <li><a href={facebook}><FaFacebookF /></a></li>
               <li><a href={twitter}><BsTwitter /></a></li>
               <li><a href={linkedin}><FaLinkedinIn /></a></li>
               <li><a href={github}><BsGithub /></a></li>
               </ul>
    </Box>
  </Box>
</Flex>
  );
}

export default ProfileCard;
