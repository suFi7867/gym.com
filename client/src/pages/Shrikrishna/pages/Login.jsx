import React, { useState } from 'react'
import { AspectRatio, Image } from '@chakra-ui/react'
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
import ForgotPasswordForm from './forgotPassword';
import LoginForm from './LoginForm';
import ResetPasswordForm from './ResetPassword';
import VerifyEmailForm from './EmailCard';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ForegetPassword } from '../../../redux/auth/auth.actions';

import gymbro from "../assets/gymBro.gif"

const Login = () => {
  const [forgot,setForget]=useState(false);
  const [verify,setVerify]=useState(false);
  const [otp,setOtp] =useState(false);
  const [login,setLogin]=useState(true);

  


  const dispatch = useDispatch()

const handleForgot=()=>{
  setForget(true)
  setLogin(false)
}
const handleOtp= async()=>{


  setVerify(true)
  setForget(false)
}
const handleVerify=()=>{
  setOtp(true);
  setVerify(false)
}
const handleReset=()=>{
  setOtp(false)
  setLogin(true)
}
  return (
    <> 
    <Box 
    overflow={"hidden"}
    position={"relative"} bg="black"
     // bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
      w="100%" h={{base:"100%"}}
      align={"center"}
      justify={"center"}
    >
    {login && <LoginForm handleForgot={handleForgot}></LoginForm>}
    {forgot && <ForgotPasswordForm handleOtp={handleOtp}/>}
    {otp && <ResetPasswordForm handleReset={handleReset}></ResetPasswordForm>}
    {verify && <VerifyEmailForm handleVerify={handleVerify}></VerifyEmailForm>}
  
  
   
    
    <Image 
    opacity={{base:"30%", md:"80%"}}
    display={{base:"none", md:"block"}}
    bottom="0" right={{md:"-150",lg:"-250"}} 
    h={{md:"80%",lg:"100%"}}
    w={{md:"400px", lg:"600px", xl:"fit-content"}}
    position={"absolute"} src={gymbro} />
    
    <Image 
     opacity={{base:"40%", md:"80%"}}
    transform={"scaleX(-1)"} 
    bottom="0" left={{md:"-150",lg:"-250"}} 
    h={{md:"80%",lg:"100%"}}
    w={{md:"400px", lg:"600px", xl:"fit-content"}}
    position={"absolute"} src={gymbro} />

  
    </Box>
    </>
   
  );
}

export default Login
