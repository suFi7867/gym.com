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

    return <VStack bg="black"  bgImage={women}   bgRepeat={"no-repeat"}  minH="100vh"     bgSize={"80%"} justify="center" align="center" > 
           <Image width="400px" className="slide-in-blurred-top" src={logo} />
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