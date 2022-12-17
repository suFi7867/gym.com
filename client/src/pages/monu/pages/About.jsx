import React from 'react'
import {
    Box,
    IconButton,
    useBreakpointValue,
    Heading,
    Text,
    Container,
    Button,
    Stack,
    SimpleGrid
  } from '@chakra-ui/react';
import Card from '../components/Card';
let first=[{
  image:"https://i.ibb.co/52YF6Sg/green-Monu.png",
  title:"Monu Yadav",
  facebook:"#",
  twitter:"#",
  github:"#",
  linkedin:"#"
},
{
  image:"https://i.ibb.co/52YF6Sg/green-Monu.png",
  title:"Monu Yadav",
  facebook:"#",
  twitter:"#",
  github:"#",
  linkedin:"#"
},
]

let second =  [
  {
    image:"https://i.ibb.co/52YF6Sg/green-Monu.png",
    title:"Monu Yadav",
    facebook:"#",
    twitter:"#",
    github:"#",
    linkedin:"#"
  },
  {
    image:"https://i.ibb.co/52YF6Sg/green-Monu.png",
    title:"Monu Yadav",
    facebook:"#",
    twitter:"#",
    github:"#",
    linkedin:"#"
  },
  {
    image:"https://i.ibb.co/52YF6Sg/green-Monu.png",
    title:"Monu Yadav",
    facebook:"#",
    twitter:"#",
    github:"#",
    linkedin:"#"
  },
]

const About = () => {
  return (
   <Container bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)" maxW="100%" h="auto" centerContent>
      <Stack direction={["column","column","row","row"]} spacing="10" w={["50%","50%","80%","55%"]} mt="10" mb="10">
           {
           first.map((el)=><Card image={el.image} title={el.title} key={el.image} facebook={el.facebook}  twitter={el.twitter} github={el.github} />)
           } 
      </Stack>
      <SimpleGrid columns={[1,1,2,3]} w={["50%","50%","80%","82%"]}  rowGap="10" mb="10">
           {
           second.map((el)=><Card image={el.image} title={el.title} key={el.image} facebook={el.facebook}  twitter={el.twitter} github={el.github} />)
           } 
      </SimpleGrid>
   </Container>
  )
}

export default About