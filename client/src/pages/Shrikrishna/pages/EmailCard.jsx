import { Center, Heading, useToast } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function VerifyEmailForm({ handleVerify }) {
  const [pin, setPin] = useState({ p1: "", p2: "", p3: "", p4: "", p5: "", p6:"" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPin({ ...pin, [name]: value });
    
  };



  const toast = useToast()


  const handleSubmit = () => {
    const { p1, p2, p3, p4  ,p5  ,p6   } = pin;
    axios.post(`http://localhost:8080/user/reset-password/verifyOtp`, {otp: p1 + p2 + p3 + p4 + p5 + p6})
    .then((res)=>  { 
      toast({
        title: "OTP Verified Successfull",
        
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      handleVerify()
      
    } )
    .catch((err)=>{
      console.log(err)
      toast({
        title: "OTP is Wrong",
        
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    })

    
    console.log(p1 + p2 + p3 + p4 + p5 + p6  );
  };
  return (
    <Flex
    zIndex={500}
    border="1px solid white"

      minH={"60vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("whiteAlpha.100", "whiteAlpha.100")}
      //bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"sm"}
        
        bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.200")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={10}
      >
        <Center>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "2xl", md: "3xl" }}
            color="white"
          >
            Verify your Email
          </Heading>
        </Center>
        <Center
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("white", "whiteAlpha.200")}
        >
          We have sent code to your email
        </Center>
        <Center
          fontSize={{ base: "sm", sm: "md" }}
          fontWeight="bold"
          color={useColorModeValue("white", "whiteAlpha.200")}
        >
          username@mail.com
        </Center>
        <FormControl color="white">
          <Center>
            <HStack>
              <PinInput>
                <PinInputField name="p1" onChange={handleChange} />
                <PinInputField name="p2" onChange={handleChange} />
                <PinInputField name="p3" onChange={handleChange} />
                <PinInputField name="p4" onChange={handleChange} />
                <PinInputField name="p5" onChange={handleChange} />
                <PinInputField name="p6" onChange={handleChange} />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={(e) => {
              handleSubmit(e);
             
            }}
            bg={"#f45f02"}
            color={"white"}
            _hover={{
              border: "1px solid #f45f02",
              bg: "white",
              color: "#f45f02",
            }}
          >
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
