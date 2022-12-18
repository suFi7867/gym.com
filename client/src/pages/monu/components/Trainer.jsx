import React from 'react'
import { Box, Heading, HStack,  Text } from '@chakra-ui/react'
import TrainerCarousel from './TrainerCarousel'
const Trainer = () => {
  return (
    <Box bg="#151515" pt="10" pb="20"  w="full">
        <Box w="80%" margin={"auto"} mb="20">

          <HStack  spacing={["50","20","260","460","610"]}>
            <Box>
                <Text color="#f45f02" mb="5" fontWeight={"500"}>OUR TEAM</Text>
                <Heading color="#fff" fontSize={[20,17,20,25,30]} mb="10">TRAIN WITH EXPERTS</Heading>
            </Box>
              <button className='oggu'>Appointment</button>
          </HStack>
        </Box>
        <TrainerCarousel />

    </Box>
  )
}

export default Trainer