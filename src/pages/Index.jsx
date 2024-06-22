import { Container, Text, VStack, Button, Heading, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to AI Info Site</Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the fascinating world of Artificial Intelligence. Learn about its applications, advancements, and how it's shaping the future.
        </Text>
        <Flex mt={4}>
          <Link to="/signin">
            <Button colorScheme="teal" size="lg" mr={4}>Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button colorScheme="teal" size="lg">Sign Up</Button>
          </Link>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;