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
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
//import { ACTION_ADD_PRODUCT } from "../../redux/admin/admin.actions";

const AddProduct = () => {
  const [resize, setResize] = React.useState("horizontal");

  const [value, setvalue] = useState("mens");

  let [area, setarea] = useState("");

  const dispatch = useDispatch();

  const AddToDatabase = () => {
   // dispatch(ACTION_ADD_PRODUCT({ value: value, area: area }));
    setvalue("mens");
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

        <HStack alignItems="flex-start" spacing="1rem">
          <VStack>
            <Textarea
              placeholder="Here is a sample placeholder"
              height="360px"
              width="350px"
              value={area}
              onChange={(e) => setarea(e.target.value)}
              resize={resize}
            />

          </VStack>
          <RadioGroup colorScheme='orange'  value={value} onChange={setvalue}>
            <VStack spacing="24px" align="left">
              <Radio value="mens">Men</Radio>
              <Radio value="womens">Women</Radio>
              <Radio value="electronics">Electronics</Radio>
            </VStack>

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
        </HStack>
      </Flex>
    </Flex>
  );
};

export default AddProduct;
