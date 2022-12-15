import { Center, Heading } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { useState } from 'react';

export default function VerifyEmailForm({handleVerify}) {
    const [pin,setPin]=useState({p1:"",p2:"",p3:"",P4:""})
    
    const handleChange=(e)=>{
       const {name,value}=e.target
        setPin({...pin,[name]:value})
    }
    const handleSubmit=()=>{
        const {p1,p2,p3,p4}=pin;
      console.log(p1+p2+p3+p4)
    }
  return (
    <Flex 
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)">
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verify your Email
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          We have sent code to your email
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
          username@mail.com
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput>
                <PinInputField name="p1" onChange={handleChange}/>
                <PinInputField name="p2" onChange={handleChange}/>
                <PinInputField name="p3" onChange={handleChange}/>
                <PinInputField name="p4" onChange={handleChange}/>
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
          onClick={(e)=>{handleSubmit(e);handleVerify()}}
            bg={'#f45f02'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}