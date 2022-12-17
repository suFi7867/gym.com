import {
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_CART, ACTION_REMOVE_ITEM_CART } from "../../../../redux/cart/cart.actions"
import { getUserData } from "../../../../redux/auth/auth.actions";
const QuantitySelect = (props) => {
  return (
    <Select
    color={"white"}
    bg="#f45f02"
    _hover={{color:"#f45f02",bg:"white"}}
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

export const CartItem = (props) => { 
  //console.log(1)
  const {
    isGiftWrapping,
    productName,
    description,
    quantity,
    image,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
    _id
  } = props;
  const { isAuth, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const toast = useToast()

  const itemDelete = () => {

    let data = { 
      email : token.email,
      data : {
        _id : _id
      }
    }
    console.log(data)

   dispatch(ACTION_REMOVE_ITEM_CART(data))
   .then((res)=>  {
  
    dispatch(getUserData(token.email)) 
    toast({
      title: "Product Deleted Successfully",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  })

   
  };
  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={productName}
        description={description}
        image={image}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
        <CloseButton color="#f45f02" _hover={{color:"white"}}
          aria-label={`Delete ${productName} from cart`}
          onClick={itemDelete}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" color={"#f45f02"} _hover={{color:"white"}} textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
