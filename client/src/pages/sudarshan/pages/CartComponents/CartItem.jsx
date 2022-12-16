import {
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_CART, ACTION_REMOVE_ITEM_CART } from "../../../../redux/cart/cart.actions"
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
  console.log(1)
  const {
    isGiftWrapping,
    name,
    description,
    quantity,
    defaultImage: imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
    id
  } = props;
  const { isAuth, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const itemDelete = () => {
    console.log({id:id,token:token.token})
    dispatch(ACTION_REMOVE_ITEM_CART({id:id,token:token.token}))
    dispatch(ACTION_GET_CART(token.token))
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
        name={name}
        description={description}
        image={imageUrl}
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
          aria-label={`Delete ${name} from cart`}
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
