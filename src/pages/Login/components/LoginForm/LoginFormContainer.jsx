import { Box } from "@chakra-ui/react";
import LoginFormView from "./LoginFormView";

const LoginFormContainer = () => { 
    return(
        <Box p="8" bg="#232323" rounded="10" w={450}>
            <LoginFormView />
        </Box>
    );
}

export {LoginFormContainer};