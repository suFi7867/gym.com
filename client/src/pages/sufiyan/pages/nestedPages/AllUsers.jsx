import {
  HStack,
  IconButton,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { IoTrashBinSharp } from "react-icons/io5";
import { Scrollbars } from 'react-custom-scrollbars-2';

import img1 from "../../assets/img1.png"

//import {ImageD} from "../../../public/preview";

const AllUsers = () => {
  const { data } = useSelector((store) => store.admin);
 //const { data } = useSelector((store) => store.admin);
 
  return (
    <VStack p={5}  maxW="1200px">

      <Stack alignSelf={"flex-start"} p={5} >
        <Text fontWeight={"semibold"}  fontSize="xl" >All Users List</Text>
      </Stack>

      <HStack
        p={5}
     
        w="100%"
        justifyContent={"space-around"}
        alignContent={"flex-start"}
        alignItems={"flex-start"}
      >
      

        <VStack p={5} position="relative" top="-100px" >
          <HStack
            p={5}
           
            w="100%"
            bg="#f45f02"
            color="whiteAlpha.900"
            borderRadius={5}
            justifyContent={"space-between"}
          >
            <Text>Username</Text>
            <Text>Email</Text>
            <Text>Hashed</Text>
            <Text>Remove</Text>
            
          </HStack>
          <Scrollbars style={{ width: 1000, height: "65vh" }}>
          <VStack spacing={5}>
         
          {data.users?.map((el) => (
            <HStack
              p={5}
             
              w="full"
              bg="#eee"
              borderRadius={5}
              justifyContent={"space-between"}
            >
              <Text >
                {el.username}
               
              </Text>
              <Text>{el.email}</Text>
              <Text>{el.password.substring(0,20)}....</Text>
             
              <IconButton
                fontSize="25px"
                borderRadius={50}
                variant="link"
                //onClick={toggleColorMode}
                icon={<IoTrashBinSharp />}
              />
            </HStack>
          ))}</VStack> </Scrollbars> 
        </VStack>
      </HStack>

    

    </VStack>
  );
};

export default AllUsers;
