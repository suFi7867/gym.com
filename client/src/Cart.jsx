import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
    useColorModeValue as mode,
    VStack,
  } from "@chakra-ui/react";
  import * as React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import { CartItem } from "./pages/sudarshan/pages/CartComponents/CartItem"
  import { CartOrderSummary } from "./pages/sudarshan/pages/CartComponents/CartOrderSummary"
  import { cartData } from "./pages/sudarshan/pages/CartComponents/_data"
import CartCard from "./pages/sufiyan/pages/nestedPages/Card";
  
  const Cart = () => { 
    const {userData, token, isAuth } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
  
    
   const navigate = useNavigate();
  
   const BackToPRoductPage = () => {
    navigate("/product")
   
  };

  
  let totalPurchase = 0
  userData.purchase.map((el)=> totalPurchase+= +el.price )
  
   
   // const { data } = useSelector((store) => store.cart);
  
  
     
  {/* if(userData.cart.length===0){
  
    return (  
  
  
  
            <Stack bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
            w="100%" alignItems="center" p={15} direction={{base:"column", md:"row"}}   justify="center">
  
            <Image src='https://img.pikbest.com/png-images/20191028/little-boy-pushing-a-shopping-cart-to-buy-things-gif_2515305.png!c1024wm0' />
         
           <VStack spacing={30} >
           <Text fontSize="3xl" color={"white"}>Nothing In The Bag </Text>
  
           <Divider />
  <Button  onClick={()=>BackToPRoductPage()} fontSize="x-large" padding={8}  color="white" bg="#f45f02" _hover={{color:"#f45f02",bg:"white",border:"1px solid #f45f02"}}> 
  Continue Shopping
  </Button>
  
  
  
           </VStack>
            </Stack>
  
      
      
      ) 
  
   }  */}
  
  
  
    return (
    <Box 
    minH={"80vh"}
    bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
    w="100%">
         <Box borderBottom={"4px solid #f45f02"}
      bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
      w="100%"
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
       
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading color={"white"} fontSize="2xl" >
              Total Product in Cart {userData.cart.length}
            </Heading>
  
            <Stack spacing="6">
              {userData.cart?.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>
          <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <Text color={"white"}>or</Text>
            <Link color="#f45f02" _hover={{color:"white"}}>Continue shopping</Link>
          </HStack>
        </Flex>
        </Stack>
      </Box>

      <Box borderBottom={"4px solid #f45f02"}
      bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
      w="100%"
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
       
        <Stack
        h="100%"
        w="100%"
          direction={{
            base: "column",
            md: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
         
        >
          <VStack p={5} minH="100%" borderLeft={"4px solid #f45f02"}   
            spacing={{
              base: "5",
              md: "5",
            }}
          
            align={"left"}
          >
            <Heading color={"white"} fontSize="2xl" >
              Total Product in Wishlist {userData.wishlist.length}
            </Heading>
  
            <SimpleGrid  columns={[2,3,4,4]} spacing="6">
              {userData.wishlist?.map((item) => (
                <CartCard key={item.id} {...item} />
              ))}
            </SimpleGrid>

          </VStack>

  <Spacer/>

          <VStack spacing={5} w="350px"
          minH="100%" borderLeft={"4px solid #f45f02"} 
          direction="column" align="center">
          <Heading color={"white"} fontSize="2xl" >
              Purchase History  
            </Heading>

            <VStack h="250px" spacing={5} overflowY="scroll" >  
            { 
              userData.purchase.map((el)=>(
                <Flex w="full" bg={"whiteAlpha.200"} p={3}> 
                <Text color={"white"} fontWeight="medium" > {el.productName} {"   "}</Text> 
                <Spacer/>
                <Text color={"white"} fontWeight="medium" >{"   "} $ {el.price}</Text>
                </Flex>
              ))
            }
            </VStack>
<Divider/>


        <Text 
        p={5}
        bg={"#f45f02"} color="white"
        fontSize={"2xl"} fontWeight="semibold" > Total : {  totalPurchase.toFixed(2) } </Text> 


        </VStack>
    
        </Stack>
      </Box>
    </Box>
     
    );
  };
  
  export default Cart;
  