import { ChakraProvider } from "@chakra-ui/react";
import RouterConfig from "./navigation/RouterConfig";

const App = () => {
  return(
    <ChakraProvider>
      <RouterConfig />
    </ChakraProvider>
  );
}

export default App;