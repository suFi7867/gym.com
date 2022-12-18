import React from "react";
import { Text, Box, Image, Heading, Spacer } from "@chakra-ui/react";
import {BsTwitter , BsGithub} from"react-icons/bs"
import {FaFacebookF , FaLinkedinIn, FaEye} from"react-icons/fa"
import {RiUserFill} from"react-icons/ri"

import "../styles/Card.css"

const Card = ({image,title,portfolio,linkedin,github,desc}) => {
  return (<Box className="papa">
   <Box className="our_profile_card">
      <Box className="imgbx">
        <Image src={image} alt="Monu" pos={"absolute"} top="0" left="0" width={"100%"} height="100%" objectFit={"cover"} />
      </Box>
      <Box className="Our_content">
          <Box className="Our_details">
               <Text  fontSize={"1.5em"} color='#fff' fontWeight='500'>{title}<br/><span>{desc}</span></Text>
               <Spacer/>
               <ul className="our_social_icons">
               <li><a href={portfolio} target="_blank"><RiUserFill /></a></li>
               <li><a href={linkedin} target="_blank"><FaLinkedinIn /></a></li>
               <li><a href={github} target="_blank"><BsGithub /></a></li>
               </ul>
          </Box>
      </Box>
   </Box></Box>
  )
};

export default Card;
