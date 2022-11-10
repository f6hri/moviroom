import { Formik, Form } from "formik";
import { Button, VStack } from "@chakra-ui/react";

const FormContent = ({ initialValues, onSubmit,submitName, children }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(props) => (
        <Form>
          <VStack spacing="5" my="8">
            {children}
          </VStack>
          <Button
            isLoading={props.isSubmitting}
            type="submit"
            bgColor="#950101"
            w="full"
            p="7"
            _hover={{ bg: "#730202" }}
            _active={{ bg: "#730202" }}
          >
            {submitName}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContent;
