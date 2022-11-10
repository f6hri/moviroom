import { FormControl,FormErrorMessage, Input } from "@chakra-ui/react";
import { Field } from "formik";

const FormInput = ({ name, type, validate, placeholder }) => {
  return (
    <Field name={name} validate={validate}>
      {({field, form}) => (
        <FormControl
          isInvalid={eval(`form.errors.${name} && form.touched.${name}`)}
        >
          <Input
            {...field}
            py="7"
            borderColor="#414141"
            focusBorderColor="#950101"
            placeholder={placeholder}
            type={type}
          />
          <FormErrorMessage>{eval(`form.errors.${name}`)}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormInput;
