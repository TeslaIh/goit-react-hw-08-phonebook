import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Button, Flex, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Avatar from 'components/Img/icons8-avatar-48.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <Flex justifyContent="end" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={Avatar}
        alt="Avatar"
        mr="3"
      />
      <Text as="i" mr="10">
        Hello, {name}
      </Text>

      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        colorScheme="yellow"
        variant="ghost"
      >
        Log Out
      </Button>
    </Flex>
  );
}
