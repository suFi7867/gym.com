import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarLeft from './nestedPages/Sidebar'

import cloud from "../assets/cloud.png"
import cloud2 from "../assets/cloud2.png"
import img1 from "../assets/img1.png"


const AdminDashbord = () => {
  return (
    <HStack 
    position="relative"
    align={"flex-start"}
    justifyContent="flex-start"
    p={5}
     bgGradient={"linear-gradient(279deg, rgba(64,64,64,1) 31%, rgba(0,0,0,1) 100%)"}>
     
   <SideBarLeft />
    <Outlet />

    <Image position="absolute" right="0" transform={"scaleX(-1)"}
    src={cloud}/>

<Image position="absolute" bottom="200" left="0" //transform={"scaleX(-1)"}
    src={cloud}/>

<Image zIndex={2}  bottom="30" transform={"scaleX(-1)"} position={"absolute"} opacity="50%" left="-20" src={img1} />
  </HStack>
  )
}

export default AdminDashbord
