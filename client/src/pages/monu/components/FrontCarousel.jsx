import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  Container,
  Button
} from '@chakra-ui/react';

import front1 from"../assets/front1.jpg"
import front2 from"../assets/front2.jpg"
import front3 from"../assets/front3.jpg"
import front4 from"../assets/front4.jpg"
import front5 from"../assets/front5.jpg"
import front6 from"../assets/front6.jpg"
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function FrontCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [{
    title:"SHAPE YOUR BODY",
    text: "TRAINING HARD",
    be:"BE",
    strong:"POWER",
    image:front2,
  },  
   {
    title:"SHAPE YOUR BODY",
    text: "NO GAIN",
    be:"NO",
    strong:"PAIN",
    image:front3,
  },
    {
      title:"SHAPE YOUR BODY",
      text: "TRAINING HARD",
      be:"BE",
      strong:"HERO",
      image:front4,
    },
    {
      title:"SHAPE YOUR BODY",
      text: "TRAINING HARD",
      be:"BE",
      strong:"MIGHTY",
      image:front1,
    },
      {
        title:"SHAPE YOUR BODY",
        text: "TRAINING HARD",
        be:"BE",
        strong:"STRONG",
        image:front5,
      },
      {
        title:"SHAPE YOUR BODY",
        text: "WORK INSANE",
        be:"BE",
        strong:"FLAME",
        image:front6,
      },
   
  ];

  return (
    <Box
      position={'relative'}
      height={'150vh'}
      width={'full'}
      overflow={'hidden'}
      mt="-50"
      filter={'brightness(80%)'}
      >
      {/* CSS files for react-slick */}
      
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPositionX="fixed"
            backgroundAttachment="fixed"
            // background= "rgb(255,255,255)"
            // background= "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%, rgba(0,0,0,1) 100%)"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.2xxl" height="600px" position="relative">
                {/* <Center> */}
            
                
                    {/* </Center> */}
              <Box
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform={["translate(10%,15%)","translate(80%,50%)","translate(20%,20%)","translate(50%,-30%)"]}
                >
                <Heading  mt="30"  letterSpacing='10px' ml="2" fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} fontWeight="500" w='100%' color="#fff">
                  {card.title}
                </Heading>
                <Heading color="#fff" fontSize={["50px","60px","70px","90px"]} >{card.be}<span style={{color:"#f45f02"}}> {card.strong}</span></Heading>
                <Text fontSize={["30px","40px","50px","60px"]}  fontWeight="650" color="#fff">
                  {card.text}
                </Text>
                <Button color="#fff" ml="2" bg={"#f45f02"}>
                  GET INFO
                </Button>
              </Box>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}