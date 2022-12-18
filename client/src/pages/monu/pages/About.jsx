import React from 'react'
import {
    Box,
    
    Container,
    
    SimpleGrid,
    Stack
  } from '@chakra-ui/react';
import Card from '../components/Card';
import ProfileCard from '../components/ProfileCard';
let first=[{
  image:"https://i.ibb.co/52YF6Sg/green-Monu.png",
  desc:"Problem Solver",
  title:"Sufiyan Shaikh",
  portfolio:"#",
  github:"#",
  linkedin:"#"
},
{
  image:"https://i.ibb.co/52YF6Sg/green-Monu.png",
  desc:"Backend",
  title:"Nayan",
  portfolio:"#",
  github:"#",
  linkedin:"#"
},
  {
    image:"https://i.ibb.co/52YF6Sg/green-Monu.png",
    desc:"UI Expert",
    title:"Monu Yadav",
    portfolio:"https://monumarquis.github.io/",
    github:"https://github.com/monumarquis",
    linkedin:"https://www.linkedin.com/in/monu-yadav-2003m/"
  },

  {
    image:"https://i.ibb.co/52YF6Sg/green-Monu.png",
    desc:"Full Stack",
    title:"Sudharshan Pujari",
    portfolio:"#",
    github:"#",
    linkedin:"#"
  },
 
  {
    image:"https://i.ibb.co/52YF6Sg/green-Monu.png",
    desc:"Full Stack",
    title:"krishna Alurri",
    portfolio:"#",
    github:"#",
    linkedin:"#"
  },

]

const About = () => {
  return (
   <Container bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)" maxW="full" h="auto">
       <SimpleGrid columns={[1,1,2,3,5]} w={["50%","50%","80%","82%"]}  gap="40" pb="10" pt="10" ml='10'>
           {
           first.map((el)=><Card image={el.image} title={el.title} key={el.image} portfolio={el.portfolio}  desc={el.desc} github={el.github}  linkedin={el.linkedin} />)
           } 
      </SimpleGrid>
      {/* <Stack direction={["column","column","row","row"]} spacing="10" w={["50%","50%","80%","55%"]} mt="10" mb="10">
           {
           second.map((el)=><Card image={el.image} title={el.title} key={el.image} portfolio={el.portfolio}   github={el.github}  linkedin={el.linkedin} />)
           } 
      </Stack> */}
    
 {/* <SimpleGrid columns={[1,2,3,5]} w={["50%","70%","80%","90%"]}  mb="10">
           {
           first.map((el)=><ProfileCard image={el.image} title={el.title} key={el.image} facebook={el.facebook}  twitter={el.twitter} github={el.github} />)
           } 
  </SimpleGrid> */}

   </Container>
  )
}

export default About