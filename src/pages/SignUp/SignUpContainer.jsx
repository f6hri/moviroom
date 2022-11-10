import { Flex } from "@chakra-ui/react";
import SignUpView from "./SignUpView";

const SignUpContainer = () => {
    return(
        <Flex direction="row" align="center" justify="center" minH="100vh">
            <SignUpView />
        </Flex>
    );
}

export {SignUpContainer}
