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
  option
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [user,setUser]=useState({firstName:"",lastName:"",email:"",age:0,height:0,weight:0,gender:"",password:""})
   console.log(user)
  const handleChange=(e)=>{
     const {name,value}=e.target;
     setUser({...user,[name]:value})
  }
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color={"white"} fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input onChange={handleChange} type="text" name="firstName" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input onChange={handleChange} type="text" name="lastName"/>
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="age" isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input onChange={handleChange} type="number" name="age" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="gender">
                  <FormLabel>Gender</FormLabel>
                  <Select type="text" name="gender" onChange={handleChange}>
                    <option value="">select gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </Select>
                </FormControl>
              </Box>
             
            </HStack>
            <HStack>
              <Box>
                <FormControl id="weight">
                  <FormLabel>Weight</FormLabel>
                  <Input onChange={handleChange} type="number" name="weight" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="height">
                  <FormLabel>Height</FormLabel>
                  <Input onChange={handleChange} type="number" name='height' />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleChange} type="email" name='email' />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input onChange={handleChange} type={showPassword ? 'text' : 'password'}  name="password"/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'#f45f02'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to="/login" color={'blue.400'} >Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}