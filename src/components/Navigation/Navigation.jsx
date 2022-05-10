import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { Box, Flex, Link } from '@chakra-ui/react';

 function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <Flex>
        <Box mx="4">
          <Link as={NavLink} to="/" color="blue.500">
            Home
          </Link>
        </Box>
        {isLoggedIn && (
          <Link as={NavLink} to="/contacts" color="blue.500">
            Contacts
          </Link>)}
      </Flex>
    </nav>
  );
}

export default Navigation