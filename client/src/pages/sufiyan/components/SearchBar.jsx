import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'




const SearchBar = () => {

    const navigate = useNavigate()

    const {data : dataTobeMatch} = useSelector((store) => store.product);
  
    for(let i of dataTobeMatch){
      i.name = i["productName"]
    }

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