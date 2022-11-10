import { Image, Text, Box } from "@chakra-ui/react";
import FormContent from "../../../../components/Form/FormContent";
import {
  userNameOrEmailValidation,
  passwordValidtaion,
} from "../../../../utils/validation/authValidation";
import FormInput from "../../../../components/Form/FormInput";
import TextLink from "../../../../components/Link/TextLink";
import {SIGNUP} from "../../../../navigation/CONSTANTS";
import login from "../../../../utils/auth/login";


const LoginFormView = () => {
  return (
    <>
      <Image src="./Logo.png" mx="auto" />
      <FormContent
        initialValues={{ userNameOrEmail: "", password: "" }}
        onSubmit={login}
        submitName="Login"
      >
        <FormInput
          name="userNameOrEmail"
          type="text"
          validate={userNameOrEmailValidation}
          placeholder="User name or email"
        />
        <FormInput
          name="password"
          type="password"
          validate={passwordValidtaion}
          placeholder="Password"
        />
      </FormContent>

      <Box display="flex" justifyContent="center" gap="2" mt="5">
        <Text fontSize="sm" color="#626262">
          Dont haven't account
        </Text>
        <TextLink href={SIGNUP} name="Sign up" />
      </Box>
    </>
  );
};

export default LoginFormView;
