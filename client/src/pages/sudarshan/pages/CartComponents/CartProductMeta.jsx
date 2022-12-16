import {
    Box,
    HStack,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiGift } from 'react-icons/fi'
  
  export const CartProductMeta = (props) => {
    const { isGiftWrapping = true, image, name, description } = props
    return (
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text color={"white"} fontWeight="medium">{name}</Text>
            <Text color="white" fontSize="sm">
              {description}
            </Text>
          </Stack>
          {isGiftWrapping && (
            <HStack spacing="1" mt="3" color={mode('gray.600', 'gray.400')}>
              <Icon color={"orange"} as={FiGift} boxSize="4" />
              <Link fontSize="sm"  color={"#f45f02"} _hover={{color:"white"}} textDecoration="underline">
                Add gift wrapping
              </Link>
            </HStack>
          )}
        </Box>
      </Stack>
    )
  }