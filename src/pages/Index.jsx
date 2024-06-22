import { Container, Text, VStack, Button, Heading, Box, Flex, Input, HStack, Image, SimpleGrid, Icon, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaUser, FaCheckCircle, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Index = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.7.6/build/spline-viewer.js";
    document.head.appendChild(script);
  }, []);

  return (
    <Container centerContent maxW="container.xl" p={0} color="white" bgGradient="linear(to-r, #0f0c29, #302b63, #24243e)">
      {/* Header */}
      <Flex width="100%" justifyContent="space-between" alignItems="center" p={4}>
        <Heading as="h1" size="lg" color="white">GPTEngineer</Heading>
        <HStack spacing={4}>
          <Link to="/">
            <Button variant="link" color="white">Home</Button>
          </Link>
          <Link to="/features">
            <Button variant="link" color="white">Features</Button>
          </Link>
          <Link to="/pricing">
            <Button variant="link" color="white">Pricing</Button>
          </Link>
          <Link to="/blog">
            <Button variant="link" color="white">Blog</Button>
          </Link>
          <Link to="/contact">
            <Button variant="link" color="white">Contact</Button>
          </Link>
          <Button colorScheme="teal">Get Started</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box position="relative" width="100%" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex="-1">
          <spline-viewer url="https://prod.spline.design/veg-svYPBiFff9l4/scene.splinecode"></spline-viewer>
        </Box>
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="2xl" color="white">Transform Your Workflow with Cutting-Edge AI Solutions</Heading>
          <Text fontSize="lg" color="white">Maximize efficiency and streamline operations with our state-of-the-art AI tools.</Text>
          <HStack spacing={4}>
            <Button colorScheme="teal" size="lg">Get Started</Button>
            <Button colorScheme="gray" size="lg">Learn More</Button>
          </HStack>
        </VStack>
      </Box>

      {/* Features Section */}
      <Box py={20} textAlign="center">
        <Heading as="h3" size="lg" mb={10}>Features</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Icon as={FaCheckCircle} w={10} h={10} color="teal.500" />
            <Heading as="h4" size="md" mt={4}>Feature One</Heading>
            <Text mt={2}>Description of feature one highlighting its benefits.</Text>
          </Box>
          <Box>
            <Icon as={FaCheckCircle} w={10} h={10} color="teal.500" />
            <Heading as="h4" size="md" mt={4}>Feature Two</Heading>
            <Text mt={2}>Description of feature two highlighting its benefits.</Text>
          </Box>
          <Box>
            <Icon as={FaCheckCircle} w={10} h={10} color="teal.500" />
            <Heading as="h4" size="md" mt={4}>Feature Three</Heading>
            <Text mt={2}>Description of feature three highlighting its benefits.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* How It Works Section */}
      <Box py={20} textAlign="center" bg="gray.800">
        <Heading as="h3" size="lg" mb={10}>How It Works</Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          <Box>
            <Icon as={FaArrowRight} w={10} h={10} color="teal.500" />
            <Heading as="h4" size="md" mt={4}>Step One</Heading>
            <Text mt={2}>Description of step one.</Text>
          </Box>
          <Box>
            <Icon as={FaArrowRight} w={10} h={10} color="teal.500" />
            <Heading as="h4" size="md" mt={4}>Step Two</Heading>
            <Text mt={2}>Description of step two.</Text>
          </Box>
          <Box>
            <Icon as={FaArrowRight} w={10} h={10} color="teal.500" />
            <Heading as="h4" size="md" mt={4}>Step Three</Heading>
            <Text mt={2}>Description of step three.</Text>
          </Box>
          <Box>
            <Icon as={FaArrowLeft} w={10} h={10} color="teal.500" />
            <Heading as="h4" size="md" mt={4}>Step Four</Heading>
            <Text mt={2}>Description of step four.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Testimonials Section */}
      <Box py={20} textAlign="center">
        <Heading as="h3" size="lg" mb={10}>Testimonials</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Testimonial 1" mx="auto" />
            <Text mt={4}>"This product has transformed our business!"</Text>
            <Text fontWeight="bold" mt={2}>- Customer One</Text>
          </Box>
          <Box>
            <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Testimonial 2" mx="auto" />
            <Text mt={4}>"Incredible results and fantastic support."</Text>
            <Text fontWeight="bold" mt={2}>- Customer Two</Text>
          </Box>
          <Box>
            <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Testimonial 3" mx="auto" />
            <Text mt={4}>"Highly recommend to anyone looking to improve efficiency."</Text>
            <Text fontWeight="bold" mt={2}>- Customer Three</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Pricing Section */}
      <Box py={20} textAlign="center" bg="gray.800">
        <Heading as="h3" size="lg" mb={10}>Pricing</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth={1} borderRadius="lg" p={6}>
            <Heading as="h4" size="md">Basic</Heading>
            <Text fontSize="2xl" fontWeight="bold" mt={4}>$10/month</Text>
            <Text mt={2}>Feature 1</Text>
            <Text mt={2}>Feature 2</Text>
            <Text mt={2}>Feature 3</Text>
            <Button colorScheme="teal" mt={4}>Choose Plan</Button>
          </Box>
          <Box borderWidth={1} borderRadius="lg" p={6}>
            <Heading as="h4" size="md">Standard</Heading>
            <Text fontSize="2xl" fontWeight="bold" mt={4}>$20/month</Text>
            <Text mt={2}>Feature 1</Text>
            <Text mt={2}>Feature 2</Text>
            <Text mt={2}>Feature 3</Text>
            <Button colorScheme="teal" mt={4}>Choose Plan</Button>
          </Box>
          <Box borderWidth={1} borderRadius="lg" p={6}>
            <Heading as="h4" size="md">Premium</Heading>
            <Text fontSize="2xl" fontWeight="bold" mt={4}>$30/month</Text>
            <Text mt={2}>Feature 1</Text>
            <Text mt={2}>Feature 2</Text>
            <Text mt={2}>Feature 3</Text>
            <Button colorScheme="teal" mt={4}>Choose Plan</Button>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box py={10} textAlign="center" bg="gray.900">
        <HStack spacing={4} justifyContent="center" mb={4}>
          <Link to="/privacy-policy">
            <Button variant="link" color="white">Privacy Policy</Button>
          </Link>
          <Link to="/terms-of-service">
            <Button variant="link" color="white">Terms of Service</Button>
          </Link>
        </HStack>
        <HStack spacing={4} justifyContent="center" mb={4}>
          <Button variant="link" color="white" leftIcon={<FaStar />}>Facebook</Button>
          <Button variant="link" color="white" leftIcon={<FaStar />}>Twitter</Button>
          <Button variant="link" color="white" leftIcon={<FaStar />}>LinkedIn</Button>
        </HStack>
        <Text color="white">Contact us at: info@gptengineer.app</Text>
        <Text color="white">123 AI Street, Tech City</Text>
      </Box>
    </Container>
  );
};

export default Index;