
// import { Container, Vstack } from '@chakra-ui/react';
import Trainer1 from"../assets/Trainer1.jpg"
import Trainer2 from"../assets/Trainer2.jpg"
import Trainer3 from"../assets/Trainer3.jpg"
import Trainer4 from"../assets/Trainer4.jpg"
import Trainer5 from"../assets/Trainer5.jpg"
import Trainer6 from"../assets/Trainer6.jpg"
import Trainer9 from"../assets/Trainer9.jpg"
import Trainer10 from"../assets/Trainer10.jpg"
import Trainer11 from"../assets/Trainer11.jpg"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Text } from "@chakra-ui/react"
const settings = {
  className: "center",
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  centerPadding: "60px",
  slidesToShow: 3,
  swipeToSlide: true,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
  afterChange: function(index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  }
};
export  default function ProductCarousel(){
return (
    <> 
        <Slider {...settings}>
          <div>
            <div className="lisa">
              <img src={Trainer1} alt='monu'/>
              <Box className="overlay2" >
                 <Heading color="#fff" mb="-4" fontSize={["10","15","20","25"]}>Michael Jackson</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
             </Box>
            </div>
            
          </div>
          <div>
            <div className="lisa">
              <img src={Trainer2} alt='monu'/>
              <Box className="overlay2">
              <Heading color="#fff" mb="-4" fontSize={["10","15","20","25"]}>Athart Rachel</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
                </Box>
            </div>
           
          </div>
          <div>
            <div className="lisa">
              <img src={Trainer3} alt='monu'/>
              <Box className="overlay2" >
              <Heading color="#fff" mb="-4" fontSize={["10","15","20","25"]} >Nikki Bella</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
            </Box>
            </div>
            
          </div>
          <div>
            <div className="lisa">
              <img src={Trainer4} alt='monu'/>
              <Box className="overlay2" >
              <Heading color="#fff" mb="-4" fontSize={["10","15","20","25"]}>Stephanie MicMahon</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
             </Box>
            </div>
             
          </div>
          <div>
            <div className="lisa">
              <img src={Trainer5} alt='monu'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["10","15","20","25"]}>Lana Rhoades</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Trainer6} alt='monu'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["10","15","20","25"]}>Monu Marquis</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Trainer10} alt='monu'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4"fontSize={["10","15","20","25"]} >Eva Elfie</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Trainer9} alt='monu'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["10","15","20","25"]} >Matt Hardy</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Trainer11} alt='monu'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["10","15","20","25"]} >Charlotte Flair</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
            </div>
            

          </div>
        </Slider>

    </>
)
}