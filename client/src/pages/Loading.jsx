import { Image, Stack } from "@chakra-ui/react";
import React from "react";




const Loading = () => {
  return (
     
     <Stack  justify={"center"} align="center" >
         <div  >
           <Image
             minW="300px"
             src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"
             alt="loading..."
             />
       
         </div>
      </Stack>

  );



};

export default Loading;
