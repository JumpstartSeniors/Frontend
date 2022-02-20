// create component navbar and export it
import React from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    Input,
    useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon} from "@chakra-ui/icons";
import { Link } from "react-router-dom";



function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());
    const handleSearch = (search) => {
        console.log(search)
    }

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            borderBottom="1px solid rgba(0, 0, 0, 0.1)"
            color="black"
            {...props}
        >
            <Flex align="center" mr={5} mb={2}>
                <svg
                    style={{ marginRight: 5 }}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                            fill="#FFF"
                        />
                        <path
                            d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                            fill="#555AB9"
                        />
                        <path
                            d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                            fill="#91BAF8"
                        />
                    </g>
                </svg>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    Jumpstart Seniors
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <HamburgerIcon />
            </Box>

            <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
            >
                <Link to="/Home">
                    <Text>Home</Text>
                </Link>
                <Link to="/Courses">
                    <Text>Courses</Text>
                </Link>
                <Link to="/Forms">
                    <Text>Forms</Text>
                </Link>
            </Stack>
        </Flex>
    )
}

export default Navbar;