import { Box, Flex } from "@chakra-ui/react";
import Brand from "./Brand";
import SearchInput from "./SearchInput";

const HeaderView = () => {
  return (
    <>
      <Flex justify="space-between">
        <Brand />
        <Box w="container.sm">
          <SearchInput />
        </Box>
        <Box>Menu</Box>
      </Flex>
    </>
  );
};

export default HeaderView;
