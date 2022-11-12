import HomeView from "./HomeView";
import { Container } from "@chakra-ui/react";

const HomeContainer = () => {
  return (
    <Container maxW="container.xl">
      <HomeView />
    </Container>
  );
};

export { HomeContainer };
