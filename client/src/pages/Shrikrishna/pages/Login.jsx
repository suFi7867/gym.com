import React, { useState } from 'react'
import { AspectRatio } from '@chakra-ui/react'
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

const Login = () => {
  const [forgot,setForget]=useState(false);
  const [verify,setVerify]=useState(false);
  const [otp,setOtp] =useState(false);
  const [login,setLogin]=useState(true);
const handleForgot=()=>{
  setForget(true)
  setLogin(false)
}
const handleOtp=()=>{
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
      // bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
      w="100%"
    >
    {login && <LoginForm handleForgot={handleForgot}></LoginForm>}
    {forgot && <ForgotPasswordForm handleOtp={handleOtp}/>}
    {otp && <ResetPasswordForm handleReset={handleReset}></ResetPasswordForm>}
    {verify && <VerifyEmailForm handleVerify={handleVerify}></VerifyEmailForm>}
  
  
   
    
    
  

  
    </Box>
    </>
   
  );
}

export default Login
