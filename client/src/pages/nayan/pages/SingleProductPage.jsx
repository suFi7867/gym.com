import { Box, Button, HStack, IconButton, Img, Tag, Text, useToast, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getUserData } from "../../../redux/auth/auth.actions";
import { ACTION_ADD_ITEM_TO_CART, ACTION_ADD_ITEM_TO_WISHLIST, ACTION_GET_CART } from "../../../redux/cart/cart.actions";
import { ACTION_GET_PRODUCTS } from "../../../redux/products/product.actions";
import Loading from "../../Loading";

import { AiOutlineHeart } from "react-icons/ai"

//bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
// backgroundColor="#312e2e"
//bg="#f36100"

const SingleProductPage = () => {
  
  const [quant, setQuant] = useState(1);
  const toast = useToast()


  const dispatch = useDispatch();
  const  {data}  = useSelector((store) => store.product);
  const {userData , isAuth } = useSelector((store) => store.auth);
 //console.log(data, "frontend single route");

 //const { token } = useSelector((store) => store.auth);

 const [LoadingT,setLoading] = useState(true);

 const [SingleData, setSingle] = useState({});
 

 
  const { id } = useParams();
  const NavigatKaro = useNavigate()
  
//console.log(id)

  useEffect( () => {

    try{
    fetch("http://localhost:8080/products/" + id)
     .then((res)=>res.json())
     .then((res)=>{
      setSingle(res)
      setLoading(false)
     })
    
    //  setSingle(X.data)
    //  console.log(X.data)
    //  setLoading(false)
    }catch(e){
      setLoading(true)
    }
   
  }, [id]);

  const handleCart = () => {

    if(!isAuth){
      toast({
        title: "You Need Login first",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return NavigatKaro("/login") 
    }


let check = true 

    userData.cart.map((el)=> {
      if(el.productName == SingleData.productName){
        check = false

        return  toast({
          title: "Product Already in Cart",
          status: "warning",
          duration: 4000,
          isClosable: true,
        });

      }
    } )

    if(check){

      let token = JSON.parse(localStorage.getItem("token"))

      let Product = {
        email : token.email,
        data : { ...SingleData, qty : quant}
      }
  
     
     
        dispatch(ACTION_ADD_ITEM_TO_CART(Product))
        .then((res)=> dispatch(getUserData(token.email)))
        toast({
          title: "Product Added to cart",
          
          status: "success",
          duration: 4000,
          isClosable: true,
        });
  
        
     
  
     
    }

  };

  const AddWishlist = () => {

    
    if(!isAuth){
      toast({
        title: "You Need Login first",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return NavigatKaro("/login") 
    }


    let check = true 
    
        userData.wishlist.map((el)=> {
          if(el.productName == SingleData.productName){
            check = false
    
            return  toast({
              title: "Product Already in Wishlist",
              status: "warning",
              duration: 4000,
              isClosable: true,
            });
    
          }
        } )
    
        if(check){
    
          let token = JSON.parse(localStorage.getItem("token"))
    
          let Product = {
            email : token.email,
            data : { ...SingleData, qty : quant}
          }
      
         
         
            dispatch(ACTION_ADD_ITEM_TO_WISHLIST(Product))
            .then((res)=> dispatch(getUserData(token.email)))
            toast({
              title: "Product Added to Wishlist",
              
              status: "success",
              duration: 4000,
              isClosable: true,
            });
      
        }
    
    
  };
    


  if(LoadingT){
    return<Loading/>
  }



 return (
    <Box   bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)" minH="100vh">
      <Box
        display={{ base: "grid", md: "grid", sm: "grid", lg: "flex" }}
        w={{ base: "100%", md: "100%", sm: "100%", lg: "90%" }}
        m="auto"
        maxW="1400px"
        alignContent="center"
        color={"white"}
      
      >
        <VStack 
        mt="50px" h="100%" p={5} align={"center"} justify="center" 
        w={"100%"}>
          <Img borderLeft={"4px solid #f45f02"}
          bg={"whiteAlpha.200"}
          borderRadius={10}
          maxW={{md:"400px", lg:"400px", xl:"500px"}}
            // src="https://i.ibb.co/xqGSNGC/product-10.png"
            alignItems="center" 
            // src="https://i.ibb.co/RQfmgyQ/product-7.png"
            src={SingleData.image}
            alt="singleProduct"
          />
        </VStack>
        <VStack 
        borderRight={"4px solid #f45f02"}
        p={5} bg={"whiteAlpha.200"} mt="50px" spacing={3} align={"flex-start"}>
          <Tag
            bg="#f36100"
          
            _hover={{ bg: "white", color: "#f36100" }}
            color="white"
           
          >
            New In
          </Tag>
          <VStack  align={"flex-start"}>
            <Text fontSize="3xl" fontWeight="500">
              {/* $16.45 */}
              Name : {SingleData.productName}
            </Text>
            <Text fontSize="2xl" fontWeight="500">
              {/* $16.45 */}
             Price : ${SingleData.price}
            </Text>
          </VStack>
          <VStack
           spacing={5}
            w="80%"
            textAlign={{
              base: "left",
              md: "left",
              sm: "left",
              lg: "left",
            }}
          >
            <Text fontSize="md" fontWeight={"medium"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
           
            </Text>
          </VStack>
          <Box>
            <Text>✔️ Brand Authorized</Text>
            <Text>✔️ Free and Fast Delivery</Text>
          </Box>
         
          <HStack
            m={{ base: "0px", sm: "0px", lg: "20px", md: "10px" }}
            mt="20px"
            // border="1px solid white"
            w={{ base: "100%", sm: "60%", md: "70%", lg: "50%" }}
          >
             <HStack
              maxW={"120px"}
                alignItems="center"
                display="flex"
                justifyContent="space-between"
              >
                <Button
                  bg="#f36100"
                  disabled={quant < 1}
                  onClick={() => setQuant((prev) => prev - 1)}
                >
                  -
                </Button>
                <Text>{quant}</Text>
                <Button
                  bg="#f36100"
                  onClick={() => setQuant((prev) => prev + 1)}
                >
                  +
                </Button>
              </HStack>          
           
          </HStack>

          <HStack>
          <Button
                bg="#f36100"
                
                onClick={handleCart}
              >
                Add to Cart
              </Button>
              <IconButton
                      
                     p="0px 20px"
                      // bg="white"
                      fontSize="3xl"
                      onClick={AddWishlist} 
                     color="white"
                      fontWeight="bold"
                      rounded="lg"
                      textTransform="uppercase"
                      _hover={{
                        bg: "white",
                        color: "#f45f02;",
                      }}
                      // _focus={{
                      //   bg: "gray.400",
                      // }}
                      bg="#f45f02;"
                      icon={<AiOutlineHeart/>}
                    />
          </HStack>
          <VStack align={"flex-start"} >
            <Text>📦 Free Shipping + returns</Text>
            <Text>⏱️ we are here for you 24/7</Text>
            <Text>🧾 Prime check before you buy</Text>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default SingleProductPage;
