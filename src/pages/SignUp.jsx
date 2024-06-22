import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

const SignUp = () => {
  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="#070707">
      <Box width="100%" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Heading as="h2" size="lg" textAlign="center" mb={6}>Sign Up</Heading>
        <VStack spacing={4}>
          <FormControl id="name">
            <FormLabel>Full Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="teal" size="lg" width="100%">Sign Up</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default SignUp;