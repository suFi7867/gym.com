import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useNavigate } from 'react-router-dom'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'



let dataTobeMatch = [
  {
    id:0,
    name: "Winner Whey",
    image: "https://i.ibb.co/94BnTpt/product-2.png",
    price: "$16.74",
    button: "ADD TO CART",
  },
  {
    id:1,
    name: "100% WHEY",
    image: "https://i.ibb.co/pQFBWGb/product-3.png",
    price: "$16.74",
    button: "ADD TO CART",
  },
  {
    id:2,
    name: "BCAA pro",
    image: "https://i.ibb.co/rxzqPWN/product-4.png",
    price: "$32.56",
    button: "ADD TO CART",
  },
  {
    id:3,
    name: "DYNAMIC BCAA",
    image: "https://i.ibb.co/rxzqPWN/product-4.png",
    price: "$32.56",
    button: "ADD TO CART",
  },
  {
    id:4,
    name: "ESSENTIALS",
    image: "https://i.ibb.co/1bqh7Yx/product-5.png",
    price: "$8.37",
    button: "ADD TO CART",
  },
  {
    id:5,
    name: "FLYING NINJA ",
    image: "https://i.ibb.co/BfPJ2HF/product-6.png",
    price: "$11.16",
    button: "ADD TO CART",
  },
  {
    id:6,
    name: "HIGH POWER",
    image: "https://i.ibb.co/RQfmgyQ/product-7.png",
    price: "$18.60",
    button: "ADD TO CART",
  },
  {
    id:7,
    name: "HYDRA FUSION",
    image: "https://i.ibb.co/mT0N794/product-8.png",
    price: "$16.74",
    button: "ADD TO CART",
  },
  {
    id:8,
    name: "INVICTA DUMBBELL",
    image: "https://i.ibb.co/xqGSNGC/product-10.png",
    price: "$1.74",
    button: "ADD TO CART",
  },
  {
    id:9,
    name: "JUMPING ROPE",
    image: "https://i.ibb.co/xqGSNGC/product-10.png",
    price: "$13.35",
    button: "ADD TO CART",
  },
  {
    id:10,
    name: "Leather Lyca",
    image: "https://i.ibb.co/123fSm3/product-11.png",
    price: "$11.16",
    button: "ADD TO CART",
  },
  {
    id:11,
    name: "Mass Gainer",
    image: "https://i.ibb.co/hMf5TJq/product-12.png",
    price: "$18.60",
    button: "ADD TO CART",
  },
  {
    id:12,
    name: "Winner Whey",
    image: "https://i.ibb.co/94BnTpt/product-2.png",
    price: "$16.74",
    button: "ADD TO CART",
  },
  {
    id:13,
    name: "100% WHEY",
    image: "https://i.ibb.co/pQFBWGb/product-3.png",
    price: "$16.74",
    button: "ADD TO CART",
  },
  {
    id:14,
    name: "BCAA pro",
    image: "https://i.ibb.co/rxzqPWN/product-4.png",
    price: "$32.56",
    button: "ADD TO CART",
  },
  {
    id:15,
    name: "DYNAMIC BCAA",
    image: "https://i.ibb.co/rxzqPWN/product-4.png",
    price: "$32.56",
    button: "ADD TO CART",
  },
  {
    id:16,
    name: "ESSENTIALS",
    image: "https://i.ibb.co/1bqh7Yx/product-5.png",
    price: "$8.37",
    button: "ADD TO CART",
  },
  {
    id:17,
    name: "FLYING NINJA ",
    image: "https://i.ibb.co/BfPJ2HF/product-6.png",
    price: "$11.16",
    button: "ADD TO CART",
  },
  {
    id:18,
    name: "HIGH POWER",
    image: "https://i.ibb.co/RQfmgyQ/product-7.png",
    price: "$18.60",
    button: "ADD TO CART",
  },
  {
    id:19,
    name: "HYDRA FUSION",
    image: "https://i.ibb.co/mT0N794/product-8.png",
    price: "$16.74",
    button: "ADD TO CART",
  },
  {
    id:20,
    name: "INVICTA DUMBBELL",
    image: "https://i.ibb.co/xqGSNGC/product-10.png",
    price: "$1.74",
    button: "ADD TO CART",
  },
  {
    id:21,
    name: "JUMPING ROPE",
    image: "https://i.ibb.co/xqGSNGC/product-10.png",
    price: "$13.35",
    button: "ADD TO CART",
  },
  {
    id:22,
    name: "Leather Lyca",
    image: "https://i.ibb.co/123fSm3/product-11.png",
    price: "$11.16",
    button: "ADD TO CART",
  },
  {
    id:23,
    name: "Mass Gainer",
    image: "https://i.ibb.co/hMf5TJq/product-12.png",
    price: "$18.60",
    button: "ADD TO CART",
  },
];

  

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
   
navigate(`/products/${item.id}`)
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