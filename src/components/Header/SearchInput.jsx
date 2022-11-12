import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { BORDER_COLOR } from "../../style/colors";

const SearchInput = () => {
  return (
    <InputGroup size="lg">
      <InputLeftElement pointerEvents="none" children={<FiSearch />} />
      <Input
        w="full"
        type="text"
        placeholder="Enter search..."
        borderColor={BORDER_COLOR}
      />
    </InputGroup>
  );
};

export default SearchInput;
