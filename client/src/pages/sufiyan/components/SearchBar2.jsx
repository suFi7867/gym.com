import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'



const SearchBar2 = ( OpenSearch , SetOpenSearch ) => {
  
  const {data : dataTobeMatch} = useSelector((store) => store.product);
  
  for(let i of dataTobeMatch){
    i.name = i["productName"]
  }



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
    navigate(`/products/${item._id}`)
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
      fuseOptions={{ keys: ["name", "price"] }}
    />

  </Stack>
 
  )
}

export default SearchBar2
