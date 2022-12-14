import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useNavigate } from 'react-router-dom'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'



let dataTobeMatch= [
  {
    "name": "Winner Whey Gold",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2015/06/shop-product-1-600x600.jpg",
    "price": "$16.74",
    "button": "ADD TO CART"
  },
  {
    "name": "100% WHEY PRO",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2013/06/shop-product-4-600x600.jpg",
    "price": "$16.74",
    "button": "ADD TO CART"
  },
  {
    "name": "BCAA pro",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2013/06/shop-product-6-600x600.jpg",
    "price": "$32.56",
    "button": "ADD TO CART"
  },
  {
    "name": "DYNAMIC BCAA",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2013/06/shop-product-6-600x600.jpg",
    "price": "$32.56",
    "button": "ADD TO CART"
  },
  {
    "name": "ESSENTIAL WORKOUT BENCH",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2013/06/shop-product-11-600x600.jpg",
    "price": "$8.37",
    "button": "ADD TO CART"
  },
  {
    "name": "FLYING NINJA ",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2013/06/shop-product-24-600x600.jpg",
    "price": "$11.16",
    "button": "ADD TO CART"
  },
  {
    "name": "HIGH POWER FUSION",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2013/06/shop-product-23-600x600.jpg",
    "price": "$18.60",
    "button": "ADD TO CART"
  },
  {
    "name": "HYDRA FUSION",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2013/06/shop-product-22-600x600.jpg",
    "price": "$16.74",
    "button": "ADD TO CART"
  },
  {
    "name": "INVICTA DUMBBELL SET",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2013/06/shop-product-13-600x600.jpg",
    "price": "$1.74",
    "button": "ADD TO CART"
  },
  {
    "name": "JUMPING ROPE",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2013/06/shop-product-20-600x600.jpg",
    "price": "$13.35",
    "button": "ADD TO CART"
  },
  {
    "name": "Leather Lyca Gloves",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2013/06/shop-product-19-600x600.jpg",
    "price": "$11.16",
    "button": "ADD TO CART"
  },
  {
    "name": "Mass Gainer",
    "image": "https://themes.oitentaecinco.com/winner/wp-content/uploads/2013/06/shop-product-6-600x600.jpg",
    "price": "$18.60",
    "button": "ADD TO CART"
  }
]
  
const SearchBar2 = ( OpenSearch , SetOpenSearch ) => {

    const navigate = useNavigate()

    const formatResult = (item) => {
        return (
          <HStack   
          onClick={()=>SetOpenSearch( OpenSearch=="none" ? "block" : "none" )}  >
          
            <Image boxSize={50} src={item.image} />
            <Text>{item.name}</Text>
          </HStack>
        )
      }


      
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    navigate(`/products/${item.type}/${item.id}`)
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }


  return (
    


    <Stack position="fixed"  style={{ width: "90%", left:20, top:90 }}>

    <ReactSearchAutocomplete

    // data to be match
      items={dataTobeMatch}
      onSearch={handleOnSearch}
     // onHover={handleOnHover}
      onSelect={handleOnSelect}
     // onFocus={handleOnFocus}
      autoFocus
      formatResult={formatResult}
    />

  </Stack>
 
  )
}

export default SearchBar2
