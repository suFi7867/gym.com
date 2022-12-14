import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminDashbord = () => {
  return (
    <HStack>
   { /*<SideBar menu={sidebar_menu} />*/}
    <Outlet />
  </HStack>
  )
}

export default AdminDashbord
