import { Box } from "@chakra-ui/react";
import SignUpFormView from "./SignUpFormView";

const SignUpFormContainer = () => {
    return(
        <Box p="8" bg="#232323" rounded="10" w={450}>
            <SignUpFormView />
        </Box>
    );
}

export {SignUpFormContainer};