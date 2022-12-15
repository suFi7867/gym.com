import React from "react";
import { Box, Button, Img, Text } from "@chakra-ui/react";
import { ArrowRightIcon, CalendarIcon } from "@chakra-ui/icons";
import styles from "./Coach.module.css";
const Coach = () => {
  return (
    <Box backgroundColor="#312e2e">
      <Box w="100%" textAlign="center">
        <Box p="40px" w="100%">
          <Box>
            <Box
              fontSize="4xl"
              as="i"
              fontWeight="700"
              display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
              w="40%"
              m="auto"
              textAlign="center"
            >
              <Text color="white"> Personal </Text>{" "}
              <Text color="#f36100"> Coach Mode</Text>
            </Box>
            <Box
              w="70%"
              //   border="1px solid black"

              m="auto"
              mt="30px"
              fontSize="20px"
              lineHeight="2"
              color="white"
            >
              <Text>
                Expand your personal training business with Personal Coach Mode.
                Reduce your average time spent per client by connecting with
                fitness savvy clients remotely to provide personal workout
                plans, track their workout progress, and provide feedback.
              </Text>
            </Box>
          </Box>

          <Button class={styles.buttonA} role="button">
            START 14 DAY FREE TRAIL
          </Button>
        </Box>

        <Box
          mt="70px"
          // p="40px"
          display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
          w="50%"
          gap="5px"
          m="auto"
        >
          <Text
            textAlign="center"
            fontWeight="700"
            fontSize="4xl"
            color="white"
          >
            Jefit Community Members
          </Text>
        </Box>
        {/* SCROLL */}
        {/* <Box m="auto" className={styles.parentSlider}>
          <Box className={styles.slider}>
            {images?.map((item) => {
              return <Img src={item} alt="img" />;
            })}
          </Box>
        </Box> */}
        {/* 1st row body section */}
        <Box
          // display={{ sm: "grid", md: "grid", lg: "flex" }}
          display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
          w={{ base: "100%", lg: "80%", sm: "100%", md: "100%" }}
          m="auto"
          mt="150px"
        >
          <Box w={{ base: "100%", lg: "60%", sm: "100%", md: "100%" }}>
            <Text
              fontSize="24px"
              fontWeight="450"
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "center",
              }}
              color="#f36100"
            >
              Lower Your Time Spent On Each Client
            </Text>

            <Box w="70%" m="auto" fontSize="xl" color="teal" textAlign="left">
              <Text lineHeight="2.1" color="white">
                Quickly and efficiently coach clients via JEFIT allowing you to
                expand your client base without increasing your time invested.
              </Text>
            </Box>

            <Box w="70%" m="auto">
              <Text
                mt="20px"
                fontSize="24px"
                fontWeight="500"
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "left",
                }}
                color="#f36100"
              >
                Easily Build and Sell Workout Plans
              </Text>
            </Box>
            <Box
              w={{ base: "100%", lg: "70%", sm: "100%", md: "100%" }}
              m="auto"
              fontSize="xl"
              color="teal"
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
              }}
            >
              <Text lineHeight="2.1" color="white">
                Develop and distribute your premium workout plan with JEFIT’s
                robust exercise and workout plan libraries
              </Text>
            </Box>
            <Box
              w={{ base: "100%", lg: "70%", sm: "100%", md: "100%" }}
              m="auto"
            >
              <Text
                fontSize="24px"
                mt="20px"
                fontWeight="450"
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "left",
                }}
                color="#f36100"
              >
                Build Your Brand
              </Text>
            </Box>
            <Box w="70%" m="auto" fontSize="xl" color="teal" textAlign="left">
              <Text lineHeight="2.1" color="white">
                Build a profile that highlights your experience, client results,
                or certifications and attracts future clients.
              </Text>
            </Box>
            <Button class={styles.buttonB} role="button">
              START HERE
            </Button>
          </Box>
          <Box w={{ base: "100%", lg: "40%", sm: "100%", md: "100%" }}>
            <Img
              w={{ sm: "100%" }}
              height="600px"
              src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web2.png"
              alt="block1"
            />
          </Box>
        </Box>
        {/* Block 2  */}
        <Box
          w={{ base: "100%", lg: "80%", sm: "100%", md: "100%" }}
          m="auto"
          display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
          mt="40px"
        >
          <Box w={{ base: "100%", lg: "50%", sm: "100%", md: "100%" }}>
            <Box
              // display={{ base: "grid", lg: "flex", sm: "grid", md: "flex" }}
              display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
              fontSize="5xl"
              fontWeight="700"
              gap="10px"
              // pl={{ base: "20px", sm: "20px", lg: "0px", md: "20px" }}
            >
              <Text color="white">Client</Text>
              <Text color="#f36100">Management</Text>
            </Box>

            <Box
              display={{ base: "grid", lg: "flex", sm: "grid", md: "flex" }}
              gap="10px"
              pl={{ base: "10px", sm: "10px", lg: "0px", md: "10px" }}
              mt="20px"
            >
              <Text
                fontSize="4xl"
                fontWeight="450"
                color="white"
                textAlign="center"
              >
                Coach More
              </Text>
              <Text
                fontSize="4xl"
                fontWeight="450"
                textAlign="center"
                color="#f36100"
              >
                Clients in Less Time
              </Text>
            </Box>

            <Text
              lineHeight="2.1"
              fontSize="xl"
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
              }}
              mt="10px"
              color="white"
            >
              . Easily onboard new clients with JEFIT's robust online routine
              building and distribution system
            </Text>
            <Text
              lineHeight="2.1"
              fontSize="xl"
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
              }}
              mt="10px"
              color="white"
            >
              . JEFIT's premium exercise library coaches clients during their
              workout with exercise instructions and HD video demonstrations.
            </Text>
            <Text
              lineHeight="2.1"
              fontSize="xl"
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
              }}
              mt="10px"
              color="white"
            >
              . Limit time spent coaching with advanced analytics, insights, and
              automated notifications from clients logging their workouts.
            </Text>
            <Text
              lineHeight="2.1"
              fontSize="xl"
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
              }}
              mt="10px"
              color="white"
            >
              . JEFIT's feature-rich in-app messenger makes form reviews or
              workout plan updates quick and simple.
            </Text>
            <Text
              lineHeight="2.1"
              fontSize="20px"
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
              }}
              mt="10px"
              color="white"
            >
              . Avoid conflicting with geographic based non-compete clauses by
              expanding your business online.
            </Text>
            <Button class={styles.buttonA} role="button">
              START EXPLORING
            </Button>
          </Box>
          <Box w={{ base: "100%", lg: "50%", sm: "100%", md: "100%" }}>
            <Img
              mt="70px"
              src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1.png"
              alt="block2"
            />
          </Box>
        </Box>
        {/* Block 3 */}
        <Box
          w={{ base: "100%", lg: "80%", sm: "100%", md: "100%" }}
          //   border="1px solid black"
          m="auto"
          mt="100px"
          p="10px"
          display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
        >
          <Box w={{ base: "100%", lg: "50%", sm: "100%", md: "100%" }}>
            <Img
              mt="40px"
              src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1.png"
              alt="block3"
            />
          </Box>
          <Box
            w={{ base: "100%", lg: "50%", sm: "100%", md: "100%" }}
            textAlign="left"
          >
            <Box
              fontSize="6xl"
              fontWeight="600"
              textAlign={{
                base: "center",
                md: "center",
                sm: "center",
                lg: "left",
              }}
              display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
              gap="20px"
              pl={{ base: "10px", sm: "10px", lg: "0px", md: "10px" }}
            >
              <Text color="white">Premium </Text>
              <Text color="#f36100"> Workout</Text>
            </Box>
            <Box
              fontSize="3xl"
              mt="20px"
              fontWeight="450"
              textAlign="left"
              as="i"
              display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
              gap="10px"
            >
              <Text color="#f36100">Easily personalize</Text>
              <Text color="white">your workout plans</Text>
            </Box>

            <Text lineHeight="2.1" fontSize="xl" color="teal" textAlign="left">
              <ArrowRightIcon /> Quickly and efficiently coach clients via JEFIT
              allowing you to expand your client base without increasing your
              time invested.
            </Text>
            <Text lineHeight="2.1" fontSize="xl" color="teal" textAlign="left">
              <ArrowRightIcon /> JEFIT teaches your clients how to perform each
              exercise with detailed instructions and an HD video mid-workout
            </Text>
            <Text lineHeight="2.1" fontSize="xl" color="teal" textAlign="left">
              <ArrowRightIcon /> Sell your services as a coach or just sell your
              premium workout plan - diversify your types of clients.
            </Text>
            <Button class={styles.buttonA} role="button">
              START EXPLORING
            </Button>
          </Box>
        </Box>
        {/* Block 4 */}

        <Box
          w={{ base: "100%", lg: "80%", sm: "100%", md: "100%" }}
          m="auto"
          display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
          mt="30px"
        >
          <Box w={{ base: "100%", lg: "50%", sm: "100%", md: "100%" }}>
            <Box
              fontSize="7xl"
              fontWeight="700"
              display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
              gap="10px"
            >
              <Text color="white">Coach</Text>
              <Text color="#f36100">Branding</Text>
            </Box>
            <Box
              fontSize="5xl"
              fontWeight="400"
              textAlign="left"
              mt="20px"
              display={{ base: "grid", lg: "grid", sm: "grid", md: "grid" }}
            >
              <Text color="white">Build a reputation & let new </Text>
              <Text color="#f36100">clients come to you.</Text>
            </Box>
            <Text
              lineHeight="2"
              fontSize="xl"
              textAlign="left"
              mt="10px"
              color="white"
            >
              . Be one of the first Coaches on JEFIT and start building your
              reputation first
            </Text>
            <Text
              lineHeight="2"
              fontSize="xl"
              textAlign="left"
              mt="10px"
              color="white"
            >
              . Find time efficient clients as JEFIT users require less coaching
              than your average client.
            </Text>
            <Text
              lineHeight="2"
              fontSize="xl"
              textAlign="left"
              mt="10px"
              color="white"
            >
              . Display your client successes and your certifications on your
              profile.
            </Text>
            <Button class={styles.buttonA} role="button">
              START EXPLORING
            </Button>
          </Box>
          <Box w={{ base: "100%", lg: "80%", sm: "100%", md: "100%" }}>
            <Img
              mt="70px"
              src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1.png"
              alt="block2"
            />
          </Box>
        </Box>
        {/* Block 5 */}
        <Box
          w={{ base: "100%", lg: "80%", sm: "100%", md: "100%" }}
          m="auto"
          display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
          mt="150px"
          gap="20px"
        >
          <Box w={{ base: "100%", lg: "40%", sm: "100%", md: "100%" }}>
            <Img
              mt="50px"
              src="https://www.jefit.com/wp/wp-content/uploads/2020/10/coachiphonex.png"
              alt="Block5"
            />
          </Box>
          <Box
            w={{ base: "100%", lg: "60%", sm: "100%", md: "100%" }}
            textAlign="left"
          >
            <Box
              fontSize={{ base: "5xl", lg: "7xl", md: "6xl", sm: "4xl" }}
              fontWeight="600"
              display={{ base: "grid", lg: "grid", sm: "grid", md: "grid" }}
              gap="15px"
            >
              <Text color="white">Start Your</Text>
              <Text color="#f36100">Free Trial.</Text>
            </Box>
            <Box
              fontSize="4xl"
              fontWeight="700"
              as="i"
              display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
              gap="10px"
            >
              <Text color="white">After the</Text>
              <Text color="#f36100">free trial,</Text>
            </Box>
            <Box
              lineHeight="2"
              fontSize="xl"
              mt="10px"
              display="flex"
              gap="5px"
            >
              <CalendarIcon color="#f36100" mt="20px" />{" "}
              <Text>
                <Text color="white">
                  Find time efficient clients as JEFIT users require less
                  coaching than your average client.
                </Text>
              </Text>
            </Box>
            <Box display="flex" gap="5px">
              <Text color="#f36100" mt="20px">
                $
              </Text>
              <Text
                lineHeight="2"
                fontSize="xl"
                textAlign="left"
                mt="10px"
                color="white"
              >
                You decide what to charge your clients and keep the rest!
              </Text>
            </Box>
            <Text
              lineHeight="2"
              fontSize="2xl"
              textAlign="left"
              mt="10px"
              color="white"
            >
              For gym or studio, please contact us for bulk pricing at
              product@jefit.com ​
            </Text>
            <Button class={styles.buttonA} role="button">
              START EXPLORING
            </Button>
          </Box>
        </Box>
        {/* last block */}
        <Box
          w={{ base: "100%", lg: "100%", sm: "100%", md: "100%" }}
          p="50px"
          m="auto"
          mt="100px"
          bgGradient={
            "linear-gradient(0deg, rgba(0,0,0,1) 14%, rgba(64,64,64,1) 100%)"
          }
        >
          <Box w="80%" m="auto" mt="80px">
            <Box
              fontSize="5xl"
              fontWeight="700"
              display={{ base: "grid", lg: "flex", sm: "grid", md: "grid" }}
              m="auto"
              w="67%"
              mb="20px"
            >
              <Text color="white">Our Goal Is To Help</Text>
              <Text color="#f36100">You Succeed</Text>
            </Box>
            <Text color="white">
              Contact us at product@jefit.com for any questions or feedback
            </Text>
            <Button
              class={styles.buttonA}
              role="button"
              style={{ marginBottom: "30px" }}
            >
              START 14 DAY FREE TRAIL
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Coach;

/*
<Box mt="50px" w="30%" textAlign="left" color="#f36100">
          <Text fontSize="13px">
            Interested? Request a demo or give us some feedback
          </Text>
          <Text fontSize="13px" textAlign="left">
            Marketing@jefit.com
          </Text>
        </Box>
*/
