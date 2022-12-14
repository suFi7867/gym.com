import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarLeft from './nestedPages/Sidebar'

const AdminDashbord = () => {
  return (
    <HStack h="100vh" bgGradient={"linear-gradient(279deg, rgba(64,64,64,1) 31%, rgba(0,0,0,1) 100%)"}>
     
   <SideBarLeft />
    <Outlet />
  </HStack>
  )
}

export default AdminDashbord
