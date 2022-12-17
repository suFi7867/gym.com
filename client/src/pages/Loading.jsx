import { Image, Stack } from "@chakra-ui/react";
import React from "react";


import img from "../assets/Loader.gif"

const Loading = () => {
  return (
     
     <Stack h="90vh"  justify={"center"} align="center" >
         <div  >
           <Image
             maxW="300px"
             src={img}
             alt="loading..."
             />
       
         </div>
      </Stack>

  );



};

export default Loading;
