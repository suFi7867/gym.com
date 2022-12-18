import { Button, Flex, HStack, Image, Spacer, Text, useToast, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserData } from '../../../../redux/auth/auth.actions'
import { MOVE_FROM_WISHLIST_TO_CART } from '../../../../redux/cart/cart.actions'

const CartCard = ({image, productName, price, _id}) => {

  const dispatch = useDispatch()

  const toast = useToast()

    const moveToCart = ()=>{
 // console.log(_id)
  
      let token = JSON.parse(localStorage.getItem("token"))

      let data = {
        email : token.email,
        id : _id 
      }
 
      dispatch(MOVE_FROM_WISHLIST_TO_CART(data))
      .then((res)=>{

        dispatch(getUserData(token.email))
        toast({
          title: "Product Moved to cart",
          status: "success",
          duration: 4000,
          isClosable: true,
        })
      })

      
    }

  return (
    <VStack borderRadius={5} p={5} bg={"whiteAlpha.200"}>
        <Image  boxSize={"150px"} src={image} />

       
            <Text color={"white"} fontWeight="semibold" >{productName}</Text>
          
            <Text mt={-5} color={"white"} fontWeight="semibold" >$ {price}</Text>
      

        <Button 
        onClick={moveToCart}
        colorScheme={"orange"} _hover={{bg:"white", border:"1px solid orange",color:"orange.500"}} >Move to Cart</Button>

      
    </VStack>
  )
}

export default CartCard
