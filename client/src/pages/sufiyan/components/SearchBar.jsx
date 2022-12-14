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

  

const SearchBar = () => {

    const navigate = useNavigate()

    const formatResult = (item) => {
        return (
          <HStack>
          
            <Image boxSize={100} src={item.image} />
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
    
    <Stack position="fixed"  style={{ width: 400,  top:10 }}>
      

      
    <ReactSearchAutocomplete

    // data to be match
      items={dataTobeMatch}
      onSearch={handleOnSearch}
     // onHover={handleOnHover}
      onSelect={handleOnSelect}
     // onFocus={handleOnFocus}
      autoFocus
      formatResult={formatResult}

      fuseOptions={{ keys: ["name", "price"] }}
  //     // necessary, otherwise the results will be blank
   styling={
   {
    borderRadius: "5px"
   }
   }

    />
      
  </Stack>
  
  )
}

export default SearchBar


 // fuseOptions={
 //   API == "material_master"
 //     ? { keys: ["MaterialName", "MaterialCode"] }
 //     : { keys: ["storagebinName", "capacity"] }
 // }
 // resultStringKeyName={
 //   API == "material_master" ? "MaterialName" : "capacity"
 // }

  //     fuseOptions={{ keys: ["title", "description"] }}
  //     // necessary, otherwise the results will be blank
  //     resultStringKeyName="title"

    // {
  //   height: "44px",
  //   border: "1px solid #dfe1e5",
  //   borderRadius: "24px",
  //   backgroundColor: "white",
  //   boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
  //   hoverBackgroundColor: "#eee",
  //   color: "#212121",
  //   fontSize: "16px",
  //   fontFamily: "Arial",
  //   iconColor: "grey",
  //   lineColor: "rgb(232, 234, 237)",
  //   placeholderColor: "grey",
  //   clearIconMargin: '3px 14px 0 0',
  //   searchIconMargin: '0 0 0 16px'
  // };