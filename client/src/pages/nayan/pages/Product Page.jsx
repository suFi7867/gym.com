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
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ACTION_GET_PRODUCTS } from "../../../redux/products/product.actions";
// import axios from "axios";
// const getData = async () => {
//   let { data } = await axios.get("http://localhost:8080/products");
//   console.log(data.length);
//   return data;
// };

const ProductPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.product);
  console.log(product.data, "from selector");
  // const [data, setData] = useState([]);
  // let data = [
  //   {
  //     id: 0,
  //     name: "Winner Whey",
  //     image: "https://i.ibb.co/94BnTpt/product-2.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 1,
  //     name: "100% WHEY",
  //     image: "https://i.ibb.co/pQFBWGb/product-3.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 2,
  //     name: "BCAA pro",
  //     image: "https://i.ibb.co/rxzqPWN/product-4.png",
  //     price: "$32.56",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 3,
  //     name: "DYNAMIC BCAA",
  //     image: "https://i.ibb.co/rxzqPWN/product-4.png",
  //     price: "$32.56",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 4,
  //     name: "ESSENTIALS",
  //     image: "https://i.ibb.co/1bqh7Yx/product-5.png",
  //     price: "$8.37",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 5,
  //     name: "FLYING NINJA ",
  //     image: "https://i.ibb.co/BfPJ2HF/product-6.png",
  //     price: "$11.16",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 6,
  //     name: "HIGH POWER",
  //     image: "https://i.ibb.co/RQfmgyQ/product-7.png",
  //     price: "$18.60",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 7,
  //     name: "HYDRA FUSION",
  //     image: "https://i.ibb.co/mT0N794/product-8.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 8,
  //     name: "INVICTA DUMBBELL",
  //     image: "https://i.ibb.co/xqGSNGC/product-10.png",
  //     price: "$1.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 9,
  //     name: "JUMPING ROPE",
  //     image: "https://i.ibb.co/xqGSNGC/product-10.png",
  //     price: "$13.35",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 10,
  //     name: "Leather Lyca",
  //     image: "https://i.ibb.co/123fSm3/product-11.png",
  //     price: "$11.16",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 11,
  //     name: "Mass Gainer",
  //     image: "https://i.ibb.co/hMf5TJq/product-12.png",
  //     price: "$18.60",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 12,
  //     name: "Winner Whey",
  //     image: "https://i.ibb.co/94BnTpt/product-2.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 13,
  //     name: "100% WHEY",
  //     image: "https://i.ibb.co/pQFBWGb/product-3.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 14,
  //     name: "BCAA pro",
  //     image: "https://i.ibb.co/rxzqPWN/product-4.png",
  //     price: "$32.56",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 15,
  //     name: "DYNAMIC BCAA",
  //     image: "https://i.ibb.co/rxzqPWN/product-4.png",
  //     price: "$32.56",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 16,
  //     name: "ESSENTIALS",
  //     image: "https://i.ibb.co/1bqh7Yx/product-5.png",
  //     price: "$8.37",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 17,
  //     name: "FLYING NINJA ",
  //     image: "https://i.ibb.co/BfPJ2HF/product-6.png",
  //     price: "$11.16",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 18,
  //     name: "HIGH POWER",
  //     image: "https://i.ibb.co/RQfmgyQ/product-7.png",
  //     price: "$18.60",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 19,
  //     name: "HYDRA FUSION",
  //     image: "https://i.ibb.co/mT0N794/product-8.png",
  //     price: "$16.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 20,
  //     name: "INVICTA DUMBBELL",
  //     image: "https://i.ibb.co/xqGSNGC/product-10.png",
  //     price: "$1.74",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 21,
  //     name: "JUMPING ROPE",
  //     image: "https://i.ibb.co/xqGSNGC/product-10.png",
  //     price: "$13.35",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 22,
  //     name: "Leather Lyca",
  //     image: "https://i.ibb.co/123fSm3/product-11.png",
  //     price: "$11.16",
  //     button: "ADD TO CART",
  //   },
  //   {
  //     id: 23,
  //     name: "Mass Gainer",
  //     image: "https://i.ibb.co/hMf5TJq/product-12.png",
  //     price: "$18.60",
  //     button: "ADD TO CART",
  //   },
  // ];

  useEffect(() => {
    dispatch(ACTION_GET_PRODUCTS());
  }, [dispatch]);

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
          minH={"70vh"}
        >
          <Heading
            color={"white"}
            mt={50}
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
              spacing={10}
              columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
            >
              {product.data?.map((item, index) => (
                <Box
                  key={item._id}
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  borderRadius="10px"
                  maxW="xs"
                  mx="auto"
                  bg="whiteAlpha.300"
                  // _dark={{
                  //   bg: "gray.800",
                  // }}
                  shadow="lg"
                  rounded="lg"
                  z-index={-1}
                >
                  <Box px={4} py={2}>
                    <chakra.h1
                      color="white"
                      _dark={{
                        color: "white",
                      }}
                      fontWeight="bold"
                      fontSize="3xl"
                      textTransform="uppercase"
                    >
                      {item.name}
                    </chakra.h1>
                    <chakra.p
                      mt={1}
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
                  <Box w="100%" h="300px" m="auto">
                    <Link to={`/products/${item._id}`}>
                      <Image
                        h="100%"
                        w="100%"
                        fit="cover"
                        mt={2}
                        // src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                        src={item.image}
                        alt="NIKE AIR"
                      />
                    </Link>
                  </Box>
                  <Flex
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
                      Add to cart
                    </chakra.button>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
