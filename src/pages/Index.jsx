import { Container, Text, VStack, Button, Heading, Box, Flex, Input, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaUser } from "react-icons/fa";

const Index = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.7.6/build/spline-viewer.js";
    document.head.appendChild(script);
  }, []);

  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative" color="white" bgGradient="linear(to-r, #0f0c29, #302b63, #24243e)">
      <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex="-1">
        <spline-viewer url="https://prod.spline.design/veg-svYPBiFff9l4/scene.splinecode"></spline-viewer>
      </Box>
      <Flex width="100%" justifyContent="space-between" alignItems="center" p={4}>
        <Heading as="h1" size="lg" color="white">GPTEngineer</Heading>
        <HStack spacing={4}>
          <Link to="/changelog">
            <Button variant="link" color="white">Changelog</Button>
          </Link>
          <Link to="/signin">
            <Button variant="outline" color="white">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button colorScheme="teal">Join the waitlist</Button>
          </Link>
        </HStack>
      </Flex>
      <VStack spacing={4} mt={10}>
        <Heading as="h2" size="2xl" color="white">Chat to build real web apps. Really fast.</Heading>
        <HStack spacing={2}>
          <Input placeholder="you@example.com" size="lg" />
          <Button colorScheme="teal" size="lg">Sign up</Button>
        </HStack>
        <Box mt={4} textAlign="center">
          <Button leftIcon={<FaStar />} colorScheme="orange" variant="solid" size="lg">
            5.0 (based on 28 reviews)
          </Button>
          <Button leftIcon={<FaUser />} colorScheme="gray" variant="solid" size="lg" ml={4}>
            51,132
          </Button>
        </Box>
      </VStack>
      <Box mt={20} textAlign="center">
        <Heading as="h3" size="lg" color="white">AI-first, with humans in the loop.</Heading>
      </Box>
    </Container>
  );
};

export default Index;