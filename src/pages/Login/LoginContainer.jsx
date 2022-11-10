import { Flex } from "@chakra-ui/react";
import LoginView from "./LoginView";

const LoginContainer = () => {
  return (
    <Flex direction="row" align="center" justify="center" minH="100vh">
      <LoginView />
    </Flex>
  );
};

export { LoginContainer };
