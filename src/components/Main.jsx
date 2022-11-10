import { Box } from "@chakra-ui/react";

const Main = ({ children }) => {
  return (
    <Box
      color="#fff"
      minW="min"
      minH="100vh"
      overflow="hidden"
      bg="#1A1A1A"
      as="main"
    >
      {children}
    </Box>
  );
};

export default Main;
