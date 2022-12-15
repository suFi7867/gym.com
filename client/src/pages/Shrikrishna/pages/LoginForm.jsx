import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
  
  export default function LoginForm({handleForgot}) {
    const [user,setUser]=useState({email:"",password:""})
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
            <Heading color={"white"} fontSize={'4xl'}>Sign in to your account</Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={handleChange} type="email" name="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={handleChange} type="password" name="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Button onClick={handleForgot} color={'blue.400'}>Forgot password?</Button>
                </Stack>
                <Button
                  bg={'#f45f02'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }