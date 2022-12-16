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

//import {ImageD} from "../../../public/preview";

const AllUsers = () => {
  const { data } = useSelector((store) => store.admin);
  return (
    <VStack p={5}  w="full">

      <Stack alignSelf={"flex-start"} p={5} >
        <Text fontWeight={"semibold"}  fontSize="xl" >All Users List</Text>
      </Stack>

      <HStack
        p={5}
     
        w="full"
        justifyContent={"space-around"}
        alignContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <Stack p={5}>
          <Image maxW="500px" src={"https://i.ibb.co/tsThdpL/preview-1.gif"} />
        </Stack>

        <VStack p={5} position="relative" top="-100px" >
          <HStack
            p={5}
           
            w="full"
            bg="#0d6dd7"
            color="whiteAlpha.900"
            borderRadius={5}
            justifyContent={"space-between"}
          >
            <Text>Username</Text>
            <Text>Email</Text>
          
            <Text>Remove</Text>
          </HStack>
          <Scrollbars style={{ width: 500, height: "65vh" }}>
          <VStack spacing={5}>
         
          {data.users?.map((el) => (
            <HStack
              p={5}
             
              w="full"
              bg="#eee"
              borderRadius={5}
              justifyContent={"space-between"}
            >
              <Text>
                {el.name}
                {el.surname}
              </Text>
              <Text>{el.email}</Text>
          
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
