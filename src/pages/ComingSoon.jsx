import { Box, Text, VStack, keyframes } from "@chakra-ui/react";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ComingSoon = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#070707"
      color="white"
    >
      <VStack spacing={4} animation={`${fadeIn} 2s ease-in-out`}>
        <Text fontSize="4xl" fontWeight="bold">
          Coming Soon
        </Text>
        <Text fontSize="lg">Stay tuned for something amazing!</Text>
      </VStack>
    </Box>
  );
};

export default ComingSoon;