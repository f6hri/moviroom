import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const TextLink = ({href,name}) => {
    return(
        <Link to={href}>
            <Text fontWeight="bold" fontSize="sm">{name}</Text>
        </Link>
    );
}

export default TextLink;