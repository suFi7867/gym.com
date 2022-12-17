import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ForegetPassword } from "../../../redux/auth/auth.actions";

export default function ForgotPasswordForm( {handleOtp} ) {

  const toast = useToast()

  const [email, setEmail] = useState("");
  console.log(email);
  const dispatch = useDispatch()

  const forgetKaro = ()=>{
    dispatch(ForegetPassword(email))
    toast({
      title: "OTP Sent Successfull",
      description: "We've created your account for you.",
      status: "warning",
      duration: 4000,
      isClosable: true,
    });
    localStorage.setItem("tempEmail", email);
  }



  return (
    <Flex
    zIndex={500}
      minH={"60vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("none", "gray.800")}
    //  bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        // bg={useColorModeValue('white', 'gray.700')}
        bg="whiteAlpha.300"
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading
          lineHeight={1.1}
          color="white"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("white", "gray.400")}
        >
          You&apos;ll get an email with a reset link
        </Text>
        <FormControl id="email">
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            color="white"
            placeholder="your email"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={()=>{
              handleOtp()
              forgetKaro()
            }}
            bg={"#f45f02"}
            color={"white"}
            _hover={{
              bg: "white",
              border: "1px solid #f45f02",
              color: "#f45f02",
            }}
          >
            Request Reset
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
