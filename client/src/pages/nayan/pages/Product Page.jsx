// import wave from "../assets/wave.png";
import banner from "../assets/img1.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  VStack,
  chakra,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbLink,
  Stack,
  Heading,
  BreadcrumbItem,
  Box,
  Flex,
  Image,
  IconButton,
  useToast,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { RiDeleteBinLine } from "react-icons/ri"

import { ACTION_GET_PRODUCTS } from "../../../redux/products/product.actions";
import { ACTION_ADD_PRODUCT, ACTION_DELETE_PRODUCT } from "../../../redux/admin/admin.actions";
// import axios from "axios";
// const getData = async () => {
//   let { data } = await axios.get("http://localhost:8080/products");
//   console.log(data.length);
//   return data;
// };

const ProductPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.product);

  const toast = useToast()

  const { userData, isAuth, AdminIsAuth } = useSelector((store) => store.auth);
  //console.log(product.data, "from selector");

  //useEffect(() => {
  // 
  //}, [dispatch]);


  const DeleteProduct = (id)=>{
    dispatch(ACTION_DELETE_PRODUCT(id))
    .then((res)=> {
      dispatch(ACTION_ADD_PRODUCT)
      toast({
        title: "Product Deleted Successfull",
        status: "success",
        duration: 4000,
        isClosable: true,
      })
    })

  }

  return (
    <Box
      bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
      w="100%"
    >
      <Box maxW="1500px" m="auto">
        {/* Products  Tag*/}
        <Stack
         
          position={"relative"}
          overflow={"hidden"}
          justify={"center"}
          align={"center"}
          spacing={5}
          w="100%"
          // bg="#0078ff"

         minH={{base:"200px", lg:"300px", xl:"500px"}}
        >
          <Heading
           zIndex={2}
            color={"white"}
          
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            lineHeight={"110%"}
          >
            Products
          </Heading>

          <Breadcrumb color={"white"}>
            <BreadcrumbItem
              transition={"all .3s ease"}
              _hover={{ transform: "scale(1.08)" }}
            >
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                transition={"all .3s ease"}
                _hover={{ transform: "scale(1.08)" }}
                href="/our-services"
              >
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Image
          opacity={{base:"30%", md:"100%"}}
            overflow={"hidden"}
            position={"absolute"}
            src={banner}
            // src="https://i.ibb.co/94BnTpt/product-2.png"
            w={{ base: "200px", md: "350px", lg: "400px", xl: "600px" }}
            right={0}
            //left={{ base: "-150px", md: "-15", lg: "-10" }}
            top="20px"
          />
          <Image
        opacity={{base:"30%", md:"100%"}}
            overflow={"hidden"}
            position={"absolute"}
            src={banner}
            w={{ base: "200px", md: "350px", lg: "400px", xl: "600px" }}
            left={0}
            transform={"scaleX(-1)"}
            //left={{ base: "-150px", md: "-15", lg: "-10" }}
            top="20px"
          />

          {/* <Image
          overflow={"hidden"}
          position={"absolute"}
          src={wave}
          //  w={{ base: "200px", md: "300px" }}
          bottom={0}
          
          
          height="50%"
          //left={{ base: "-150px", md: "-15", lg: "-10" }}
          // top="20px"
          backgroundImage="repeat-Y"
        /> */}
        </Stack>
        <Box>
          {/* products crouser */}

          <VStack maxW="1400px" m="auto">
            <SimpleGrid
              p={5}
              w="100%"
              spacing={{base:"3", md:5, lg:"10"}}
              columns={{ base: 2,  md: 3, lg: 4 }}
            >
              {product.data?.map((item, index) => (
                <VStack
                 position={"relative"}
                  key={item._id}
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  borderRadius="10px"
                  maxW="xs"
               
                  bg="whiteAlpha.300"
                  // _dark={{
                  //   bg: "gray.800",
                  // }}
                  shadow="lg"
                  rounded="lg"
                  z-index={-1}
                
               
                >
                  <Box p={{base:"2", md:"2", lg:"3"}} >
                    <chakra.h1
                      color="white"
                      _dark={{
                        color: "white",
                      }}
                      fontWeight="bold"
                      fontSize={{base:"xl", md:"xl", lg:"3xl"}}
                      textTransform="uppercase"
                    >
                      {item.productName}
                    </chakra.h1>
                    <chakra.p
                   
                      fontSize="sm"
                      color="white"
                      _dark={{
                        color: "gray.400",
                      }}
                      z-index={2}
                    >
                      Lorem ipsum dolor sit amet consectetur
                    </chakra.p>
                  </Box>
                  <Box w="100%"  >
                    <Link to={`/products/${item._id}`}>
                      <Image
                     
                       
                        fit="cover"
                   
                        // src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                        src={item.image}
                        alt="NIKE AIR"
                      />
                    </Link>
                  </Box>
                  <Spacer/>
                  <HStack 
                  w="100%"
                
                    alignSelf={"flex-end"}
                    alignItems="center"
                    justifyContent="space-between"
                    px={4}
                    py={2}
                    // bg="gray.900"
                    roundedBottom="lg"
                  >
                    <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                      ${item.price}
                    </chakra.h1>

                    {
                      AdminIsAuth ?  <IconButton
                      
                     p="0px 20px"
                      // bg="white"
                      fontSize="3xl"
                      onClick={()=>DeleteProduct(item._id)} 
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
                      icon={<RiDeleteBinLine/>}
                    />
                      : <Link to={`/products/${item._id}`}>
                    <chakra.button
                     
                      px={4}
                      py={3}
                      // bg="white"
                      fontSize="xs"
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
                    >
                      View
                    </chakra.button>  </Link> 
                    }
                   
                  </HStack>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
