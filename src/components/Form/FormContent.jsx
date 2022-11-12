import { Formik, Form } from "formik";
import { Button, VStack } from "@chakra-ui/react";
import { PRIMARY, PRIMARY_HOVER, SECONDARY } from "../../style/COLORS";

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
            bgColor={PRIMARY}
            w="full"
            p="7"
            _hover={{ bg: PRIMARY_HOVER }}
            _active={{ bg: SECONDARY }}
          >
            {submitName}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContent;
