import React from 'react'
import {
    Box,
    
    Container,
    
    SimpleGrid,
    Stack,
    VStack
  } from '@chakra-ui/react';
import Card from '../components/Card';



import ProfileCard from '../components/ProfileCard';
let first=[{
  image:"https://i.ibb.co/9tT8KtB/sufi-black.png",
  desc:"Problem Solver",
  title:"suFiyan Shaikh",
  portfolio:"https://sufi.vercel.app/",
  github:"https://github.com/suFi7867",
  linkedin:"https://www.linkedin.com/in/sufiyan-shaikh-9bb808183/"
},
{
  linkedin:"https://www.linkedin.com/in/nayan-kumar-/",
  github:"https://github.com/NAYANKUMAR21",
  title:"Nayan Kumar",
  desc:"Backend Expert",
  portfolio:"https://nayankumar21.github.io/",
  image:"https://avatars.githubusercontent.com/u/99751552?v=4"   
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
    image:"https://avatars.githubusercontent.com/u/107467585?v=4",
    desc:"Team PLayer",
    title:"Sudarshan P",
    portfolio:"https://sudarshan441.github.io/",
    github:"https://github.com/sudarshan441",
    linkedin:"https://www.linkedin.com/in/sudarshan-pujari/"
  },
  {
    image:"https://avatars.githubusercontent.com/u/105938098?v=4",
    title:"Krishna Aluri",
    desc:"Full Stack",
    portfolio:"https://641krishna.github.io/",
    github:"https://github.com/641krishna",
    linkedin:"https://www.linkedin.com/feed/"
  },

]

const About = () => {
  return (
   <VStack
   justify="center"
   p={5}
   margin={"auto"}
   bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)" maxW="full" minH={{base:"100%", md:"", lg:"70vh", xl:"70vh"}}>
       <SimpleGrid
       spacing={10}
       maxW={"1400px"}
      
       columns={[1,1,2,3,5]}  
        >
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

   </VStack>
  )
}

export default About