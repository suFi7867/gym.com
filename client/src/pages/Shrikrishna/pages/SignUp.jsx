import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  option,
  useToast,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/auth.actions";
import { registerUser } from "../../../redux/register/register.actions";

import gymbro from "../assets/gymBro.gif"

export default function Signup() {

  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast()
  const dispatch  = useDispatch()

  const defaultValues = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "age": 0,
    "height": 0,
    "weight": 0,
    "gender": "",
    "password": "",
  }

  const [user, setUser] = useState(defaultValues);

 // console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

 
  const handleClick = () => {
    if (
      !user.firstName ||
      !user.lastName ||
      !user.email ||
      !user.password || !user.age || !user.height ||  !user.weight || !user.gender           
    ) {
      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {

      dispatch(registerUser(user));
      setUser(defaultValues)
      toast({
        title: "Your account is created",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
   
     
    }
  };




  return (
    <Flex
   
    position={"relative"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
    >
      <Stack  zIndex={2} spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        
        <Box
          rounded={"lg"}
          bg={useColorModeValue("whiteAlpha.200", "gray.700")}
          boxShadow={"lg"}
          p={8}
          color="white"
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input value={user.firstName} onChange={handleChange} type="text" name="firstName" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input value={user.lastName} onChange={handleChange} type="text" name="lastName" />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="age" isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input value={user.age} onChange={handleChange} type="number" name="age" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="gender" bg="none">
                  <FormLabel>Gender</FormLabel>
                  <Select value={user.gender} _hover={{color:"black"}}  type="text" name="gender" onChange={handleChange}>
                    <option  value="">select gender</option>
                    <option  value="Male">male</option>
                    <option  value="Female">female</option>
                    <option  value="Others">Custom</option>
                  </Select>
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="weight">
                  <FormLabel>Weight</FormLabel>
                  <Input value={user.weight} onChange={handleChange} type="number" name="weight" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="height">
                  <FormLabel>Height</FormLabel>
                  <Input value={user.height} onChange={handleChange} type="number" name="height" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input value={user.email} onChange={handleChange} type="email" name="email" />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input 
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={user.password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#f45f02"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}

                onClick={handleClick}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>

   

  
    </Flex>
  );
}
