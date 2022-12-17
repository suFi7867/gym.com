import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'


  const dataTobeMatch = [{
    "_id": "639c19c57013b49915666d54",
    
    "image": "https://i.ibb.co/pQFBWGb/product-3.png",
    "price": "16.54",
    "qty": 1,
    "productName": "100% WHEY"
  },{
    "_id": "639c19c57013b49915666d57",
    
    "image": "https://i.ibb.co/1bqh7Yx/product-5.png",
    "price": "16.54",
    "qty": 1,
    "productName": "ESSENTIALS"
  },{
    "_id": "639c19c57013b49915666d55",
    
    "image": "https://i.ibb.co/rxzqPWN/product-4.png",
    "price": "16.54",
    "qty": 1,
    "productName": "BCAA pro"
  },{
    "_id": "639c19c57013b49915666d5c",
    
    "image": "https://i.ibb.co/xqGSNGC/product-10.png",
    "price": "16.54",
    "qty": 1,
    "productName": "JUMPING ROPE"
  },{
    "_id": "639c19c57013b49915666d61",
    
    "image": "https://i.ibb.co/rxzqPWN/product-4.png",
    "price": "16.54",
    "qty": 1,
    "productName": "BCAA pro"
  },{
    "_id": "639c19c57013b49915666d62",
    
    "image": "https://i.ibb.co/rxzqPWN/product-4.png",
    "price": "16.54",
    "qty": 1,
    "productName": "DYNAMIC BCAA"
  },{
    "_id": "639c19c57013b49915666d66",
    
    "image": "https://i.ibb.co/mT0N794/product-8.png",
    "price": "16.54",
    "qty": 1,
    "productName": "HYDRA FUSION"
  },{
    "_id": "639c19c57013b49915666d5a",
    
    "image": "https://i.ibb.co/mT0N794/product-8.png",
    "price": "16.54",
    "qty": 1,
    "productName": "HYDRA FUSION"
  },{
    "_id": "639c19c57013b49915666d67",
    
    "image": "https://i.ibb.co/xqGSNGC/product-10.png",
    "price": "16.54",
    "qty": 1,
    "productName": "INVICTA DUMBBELL"
  },{
    "_id": "639c19c57013b49915666d68",
    
    "image": "https://i.ibb.co/xqGSNGC/product-10.png",
    "price": "16.54",
    "qty": 1,
    "productName": "JUMPING ROPE"
  },{
    "_id": "639c19c57013b49915666d69",
    
    "image": "https://i.ibb.co/123fSm3/product-11.png",
    "price": "16.54",
    "qty": 1,
    "productName": "Leather Lyca"
  },{
    "_id": "639c19c57013b49915666d58",
    
    "image": "https://i.ibb.co/BfPJ2HF/product-6.png",
    "price": "16.54",
    "qty": 1,
    "productName": "FLYING NINJA "
  },{
    "_id": "639c19c57013b49915666d5b",
    
    "image": "https://i.ibb.co/xqGSNGC/product-10.png",
    "price": "16.54",
    "qty": 1,
    "productName": "INVICTA DUMBBELL"
  },{
    "_id": "639c19c57013b49915666d5d",
    
    "image": "https://i.ibb.co/123fSm3/product-11.png",
    "price": "16.54",
    "qty": 1,
    "productName": "Leather Lyca"
  },{
    "_id": "639c19c57013b49915666d5e",
    
    "image": "https://i.ibb.co/hMf5TJq/product-12.png",
    "price": "16.54",
    "qty": 1,
    "productName": "Mass Gainer"
  },{
    "_id": "639c19c57013b49915666d5f",
    
    "image": "https://i.ibb.co/94BnTpt/product-2.png",
    "price": "16.54",
    "qty": 1,
    "productName": "Winner Whey"
  },{
    "_id": "639c19c57013b49915666d64",
    
    "image": "https://i.ibb.co/BfPJ2HF/product-6.png",
    "price": "16.54",
    "qty": 1,
    "productName": "FLYING NINJA "
  },{
    "_id": "639c19c57013b49915666d56",
    
    "image": "https://i.ibb.co/rxzqPWN/product-4.png",
    "price": "16.54",
    "qty": 1,
    "productName": "DYNAMIC BCAA"
  },{
    "_id": "639c19c57013b49915666d53",
    
    "image": "https://i.ibb.co/94BnTpt/product-2.png",
    "price": "16.54",
    "qty": 1,
    "productName": "Winner Whey"
  },{
    "_id": "639c19c57013b49915666d59",
    
    "image": "https://i.ibb.co/RQfmgyQ/product-7.png",
    "price": "16.54",
    "qty": 1,
    "productName": "HIGH POWER"
  },{
    "_id": "639c19c57013b49915666d63",
    
    "image": "https://i.ibb.co/1bqh7Yx/product-5.png",
    "price": "16.54",
    "qty": 1,
    "productName": "ESSENTIALS"
  },{
    "_id": "639c19c57013b49915666d6a",
    
    "image": "https://i.ibb.co/hMf5TJq/product-12.png",
    "price": "16.54",
    "qty": 1,
    "productName": "Mass Gainer"
  },{
    "_id": "639c19c57013b49915666d60",
    
    "image": "https://i.ibb.co/pQFBWGb/product-3.png",
    "price": "16.54",
    "qty": 1,
    "productName": "100% WHEY"
  },{
    "_id": "639c19c57013b49915666d65",
    
    "image": "https://i.ibb.co/RQfmgyQ/product-7.png",
    "price": "16.54",
    "qty": 1,
    "productName": "HIGH POWER"
  },{
    "_id": "639c1b676990e1e92e57a04c",
    
    "productName": "Winner xyz",
    "image": "https://i.ibb.co/94BnTpt/product-2.png",
    "price": "16.54",
    "qty": 1
  },{
    "_id": "639c1bc0f39964668c6eff3f",
    
    "productName": "100% WHEY",
    "image": "https://i.ibb.co/pQFBWGb/product-3.png",
    "price": "16.54",
    "qty": 1
  },{
    "_id": "639c1c3a22c84d41319ec7b5",
    
    "productName": "100% WHEY",
    "image": "https://i.ibb.co/pQFBWGb/product-3.png",
    "price": "16.54",
    "qty": 1
  }]

const SearchBar = () => {

    const navigate = useNavigate()

    const formatResult = (item) => {
        return (
          <HStack>
          
            <Image boxSize={100} src={item.image} />
            <Text>{item.productName}</Text>
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
   
navigate(`/products/${item._id}`)
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

      fuseOptions={{ keys: ["productName", "price"] }}
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