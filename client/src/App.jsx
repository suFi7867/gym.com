import logo from './logo.png';
import './App.css';
import Navbar from './pages/sufiyan/pages/Navbar';
import AllRoutes from './routes/AllRoutes';
import Footer from './pages/sufiyan/pages/Footer';
import { Box, Image, VStack } from '@chakra-ui/react';
import  { useState, useEffect, React } from 'react';

import women from "./assets/shop-slider-bg-woman.png"



function App() {

  const [ Starting , setStarting ] = useState(true)

  useEffect(()=>{
     setTimeout(() => {
      setStarting(false)
     }, 2000);
  },[])


  if(Starting){

    return <VStack
    overflow={"hidden"}
     bg="black" position={"relative"} // bgImage={women}     bgSize={"80%"} 
      minH="100vh"  justify="center" align="center" > 
           <Image zIndex={999} width={{base:"200px", md:"400px"}} className="slide-in-blurred-top" src={logo} />
           <Image position={"absolute"} minW={{base:"800px", md:"none"}} h="100%" src={women} />
    </VStack>
  }

  

  return (
    <Box >

      <Navbar/>
      <AllRoutes/>
      <Footer/>
     
    </Box>
  );
}

export default App;


// npm i @chakra-ui/icons