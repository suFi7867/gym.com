import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import {TfiGallery} from"react-icons/tfi"
const Gallery = () => {
  return (
    <div class="angry-grid">
    <div id="item-0"  >
        <Image height={"100%"} objectFit="cover" src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-1.jpg" alt="gallery" width="100%" />
       <Box className="overlay" >
        <TfiGallery color="#f45f02" className="text"/>
      </Box>
    </div>
    <div id="item-1"> 
        <Image height={"100%"} objectFit="cover" src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-2.jpg" alt="gallery" width="100%" />
       <Box className="overlay" >
        <TfiGallery color="#f45f02" className="text"/>
      </Box>
    </div>
    <div id="item-2"> 
        <Image height={"100%"} objectFit="cover" src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-3.jpg" alt="gallery" width="100%" />
       <Box className="overlay" >
        <TfiGallery color="#f45f02" className="text"/>
      </Box>
    </div>
    <div id="item-3"> 
         <Image height={"100%"} objectFit="cover" src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-4.jpg" alt="gallery" width="100%" />
       <Box className="overlay" >
        <TfiGallery color="#f45f02" className="text"/>
      </Box>
    </div>
    <div id="item-4"> 
        <Image height={"100%"} objectFit="cover" src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-5.jpg" alt="gallery" width="100%" />
       <Box className="overlay" >
        <TfiGallery color="#f45f02" className="text"/>
      </Box>
    </div>

    <div id="item-5"> 
      <Image height={"100%"} objectFit="cover" src="https://preview.colorlib.com/theme/gymlife/img/gallery/gallery-6.jpg" alt="gallery" width="100%" />
        <Box className="overlay" >
        <TfiGallery color="#f45f02" className="text"/>
       </Box> 
    </div>

  </div>
  )
}

export default Gallery