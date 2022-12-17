import React from "react";
import {  Box, Image, Heading } from "@chakra-ui/react";
import {BsTwitter , BsGithub} from"react-icons/bs"
import {FaFacebookF , FaLinkedinIn} from"react-icons/fa"
import "../styles/Card.css"

const Card = ({image,title,facebook,twitter,linkedin,github}) => {
  return (<Box className="papa">
   <Box className="our_profile_card">
      <Box className="imgbx">
        <Image src={image} alt="Monu" pos={"absolute"} top="0" left="0" width={"100%"} height="100%" objectFit={"cover"} />
      </Box>
      <Box className="Our_content">
          <Box className="Our_details">
               <Heading fontSize={"1.5em"} color='#fff' fontWeight='500'>{title}<br/><span>Full Stack Web Developer</span></Heading>
               <ul className="our_social_icons">
               <li><a href={facebook}><FaFacebookF /></a></li>
               <li><a href={twitter}><BsTwitter /></a></li>
               <li><a href={linkedin}><FaLinkedinIn /></a></li>
               <li><a href={github}><BsGithub /></a></li>
               </ul>
          </Box>
      </Box>
   </Box></Box>
  )
};

export default Card;
