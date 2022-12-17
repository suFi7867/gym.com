import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function ResetPasswordForm({ handleReset }) {

  const [password, setpassword] = useState("")

  const toast = useToast()

  let email = localStorage.getItem("tempEmail")
  const resetPass=( )=>{

    axios.post(`http://localhost:8080/user/reset-password/reset`, {email: email, password: password})
    .then((res)=>  { 
      toast({
        title: "Password Changed Successfull",
  
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      handleReset()
      
    } )
    .catch((err)=>{
      console.log(err)
      toast({
        title: "Both Password not matching",
        
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    })
  }

  return (
    <Flex
    zIndex={500}
    
      align={"center"}
      justify={"center"}
      //bg={useColorModeValue("gray.50", "gray.800")}
      //bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
    >
      <Stack
        spacing={4}
        w={"full"}
        maxH="60vh"
        maxW={"md"}
        bg={useColorModeValue("whiteAlpha.300", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
        color="white"
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Enter new password
        </Heading>
        <FormControl id="password" isRequired>
          <FormLabel>password</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Confirm password
        </Heading>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={()=>{
              
              resetPass()
            }}
            bg={"#f45f02"}
            color={"white"}

            _hover={{
              border: "1px solid #f45f02",
              bg: "white",
              color: "#f45f02",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
