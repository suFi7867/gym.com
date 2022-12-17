import { Box, Button, HStack, Img, Tag, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ACTION_ADD_ITEM_TO_CART } from "../../../redux/cart/cart.actions";
import { ACTION_GET_PRODUCTS } from "../../../redux/products/product.actions";

//bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
// backgroundColor="#312e2e"
//bg="#f36100"

const SingleProductPage = () => {
  
  const [quant, setQuant] = useState(1);

  const dispatch = useDispatch();
  const  {data}  = useSelector((store) => store.product);
 console.log(data, "frontend single route");

 const [SingleData, setSingle] = useState({});

  // let data = [
  //   {
  //     name: "Winner Whey",
  //     image: "https://i.ibb.co/94BnTpt/product-2.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "100% WHEY",
  //     image: "https://i.ibb.co/pQFBWGb/product-3.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "BCAA pro",
  //     image: "https://i.ibb.co/rxzqPWN/product-4.png",
  //     price: "$32.56",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "DYNAMIC BCAA",
  //     image: "https://i.ibb.co/rxzqPWN/product-4.png",
  //     price: "$32.56",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "ESSENTIALS",
  //     image: "https://i.ibb.co/1bqh7Yx/product-5.png",
  //     price: "$8.37",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "FLYING NINJA ",
  //     image: "https://i.ibb.co/BfPJ2HF/product-6.png",
  //     price: "$11.16",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "HIGH POWER",
  //     image: "https://i.ibb.co/RQfmgyQ/product-7.png",
  //     price: "$18.60",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "HYDRA FUSION",
  //     image: "https://i.ibb.co/mT0N794/product-8.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "INVICTA DUMBBELL",
  //     image: "https://i.ibb.co/xqGSNGC/product-10.png",
  //     price: "$1.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "JUMPING ROPE",
  //     image: "https://i.ibb.co/xqGSNGC/product-10.png",
  //     price: "$13.35",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "Leather Lyca",
  //     image: "https://i.ibb.co/123fSm3/product-11.png",
  //     price: "$11.16",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "Mass Gainer",
  //     image: "https://i.ibb.co/hMf5TJq/product-12.png",
  //     price: "$18.60",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "Winner Whey",
  //     image: "https://i.ibb.co/94BnTpt/product-2.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "100% WHEY",
  //     image: "https://i.ibb.co/pQFBWGb/product-3.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "BCAA pro",
  //     image: "https://i.ibb.co/rxzqPWN/product-4.png",
  //     price: "$32.56",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "DYNAMIC BCAA",
  //     image: "https://i.ibb.co/rxzqPWN/product-4.png",
  //     price: "$32.56",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "ESSENTIALS",
  //     image: "https://i.ibb.co/1bqh7Yx/product-5.png",
  //     price: "$8.37",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "FLYING NINJA ",
  //     image: "https://i.ibb.co/BfPJ2HF/product-6.png",
  //     price: "$11.16",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "HIGH POWER",
  //     image: "https://i.ibb.co/RQfmgyQ/product-7.png",
  //     price: "$18.60",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "HYDRA FUSION",
  //     image: "https://i.ibb.co/mT0N794/product-8.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "INVICTA DUMBBELL",
  //     image: "https://i.ibb.co/xqGSNGC/product-10.png",
  //     price: "$1.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "JUMPING ROPE",
  //     image: "https://i.ibb.co/xqGSNGC/product-10.png",
  //     price: "$13.35",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "Leather Lyca",
  //     image: "https://i.ibb.co/123fSm3/product-11.png",
  //     price: "$11.16",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     name: "Mass Gainer",
  //     image: "https://i.ibb.co/hMf5TJq/product-12.png",
  //     price: "$18.60",
  //     button: "ADD TO CART",
  //   },
  // ];


  const { id } = useParams();
  useEffect(() => {
    //dispatch(ACTION_GET_PRODUCTS(id));
    let X =  data.find((el)=> el._id == id)
    setSingle(X)
  console.log(X)
  }, [id]);


  const handleCart = (data) => {
    dispatch(ACTION_ADD_ITEM_TO_CART({ ...data, quant }));
  };
  const handleBuy = (data) => {};



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
        <VStack mt="50px" h="100%" p={5} align={"center"} justify="center" 
        w={"100%"}>
          <Img
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
        <VStack  p={5} bg={"whiteAlpha.200"} mt="50px" spacing={3} align={"flex-start"}>
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
          <Box
            m={{ base: "0px", sm: "10px", lg: "20px", md: "10px" }}
            display="flex"
            w={{ base: "100%", sm: "60%", md: "70%", lg: "40%" }}
            justifyContent="space-between"
            // border="1px solid white"
          >
            <Box
              //   border="1px solid white"
              w={{ base: "50%", sm: "50%", md: "100%", lg: "60%" }}
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
            </Box>

          </Box>
          <HStack
            m={{ base: "0px", sm: "0px", lg: "20px", md: "10px" }}
            mt="20px"
            // border="1px solid white"
            w={{ base: "100%", sm: "60%", md: "70%", lg: "50%" }}
          >
            <Button bg="#f36100"  onClick={() => handleBuy(SingleData)}>
              Buy Now
            </Button>
            <Button
                bg="#f36100"
                
                onClick={() => handleCart(SingleData)}
              >
                Add to Cart
              </Button>
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
