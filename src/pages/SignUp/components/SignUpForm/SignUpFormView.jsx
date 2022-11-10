import {
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import {
  passwordValidtaion,
  fullNameValidaton,
  userNameValidaton,
  emailValidation,
} from "../../../../utils/validation/authValidation";
import FormContent from "../../../../components/Form/FormContent";
import FormInput from "../../../../components/Form/FormInput";
import TextLink from "../../../../components/Link/TextLink";
import {LOGIN} from "../../../../navigation/CONSTANTS";

const SignUpFormView = () => {
  return (
    <>
      <Image src="./Logo.png" mx="auto" />
      <FormContent
        initialValues={{ userName: "", fullName: "", email: "", passowrd: "" }}
        onSubmit={() => {
          alert("create account");
        }}
        submitName="Sign up"
      >
        <FormInput
          name="fullName"
          type="text"
          validate={fullNameValidaton}
          placeholder="Full name"
        />
        <FormInput
          name="userName"
          type="text"
          validate={userNameValidaton}
          placeholder="User name"
        />
        <FormInput
          name="email"
          type="email"
          validate={emailValidation}
          placeholder="Email"
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
          You have account
        </Text>
        <TextLink href={LOGIN} name="Log in" />
      </Box>
    </>
  );
};

export default SignUpFormView;
