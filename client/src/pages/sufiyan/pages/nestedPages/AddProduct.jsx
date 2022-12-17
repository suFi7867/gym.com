import React, { useState } from "react";
import {
  Spacer,
  Text,
  RadioGroup,
  HStack,
  VStack,
  Image,
  Textarea,
  Box,
  Radio,
  Flex,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { ACTION_ADD_PRODUCT } from "../../../../redux/admin/admin.actions";
//import { ACTION_ADD_PRODUCT } from "../../redux/admin/admin.actions";

const AddProduct = () => {
  const [resize, setResize] = React.useState("horizontal");

  const [value, setvalue] = useState("products");
  let [area, setarea] = useState("");

  const dispatch = useDispatch();

  const toast = useToast()

  const AddToDatabase = () => {

    dispatch(ACTION_ADD_PRODUCT( area ))
    .then((res)=>{
      toast({
        title: "Product Added Successfull",
        status: "success",
        duration: 4000,
        isClosable: true,
      })
    })
    
    //setarea("");
  };

  return (
    <Flex gap="10rem" justifyContent="center" alignItems="center">
     

      <Flex
        p={50}
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        gap="1.2rem"
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="1.2rem"
        >
          <Text fontSize="1.5rem" fontWeight="bold" color="#f45f02">
            Choose Category
          </Text>
        </Flex>

        <VStack alignItems="flex-start" spacing="1rem">
          <VStack>
            <Textarea
              placeholder="Here is a sample placeholder"
             height={"200px"}
              width="650px"
              value={area}
              color="white"
              onChange={(e) => setarea(e.target.value)}
              resize={resize}
            />

          </VStack>
          <RadioGroup color="white" colorScheme='orange'  value={value} onChange={setvalue}>
            <HStack spacing="24px" align="left">
            <Radio value="products">Products</Radio>
            
              <Radio value="plans">Plans</Radio>
           
            </HStack>

            <Spacer />

            <Button
              height="50px"
              width="200px"
              fontSize="1.3rem"
              color="white"
              bg="#f45f02"
              marginTop="1rem"
              onClick={() => AddToDatabase()}
            >
              ADD PRODUCTS
            </Button>
          </RadioGroup>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default AddProduct;
