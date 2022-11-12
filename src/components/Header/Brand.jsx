import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

const Brand = () => {
  return (
    <Link to="/">
      <Image src="./Logo.png" w="40" />
    </Link>
  );
};

export default Brand;
