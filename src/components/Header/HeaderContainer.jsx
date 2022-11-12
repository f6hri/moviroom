import { Box, Container } from "@chakra-ui/react";
import HeaderView from "./HeaderView";

const HeaderContainer = () => {
  return (
    <Box as="header">
      <Container maxW="container.xl" py="5">
        <HeaderView />
      </Container>
    </Box>
  );
};

export { HeaderContainer };
