import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import {
  Button,
  FormControl,
  Stack,
  Input,
  Flex,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { EmailIcon, EditIcon } from '@chakra-ui/icons';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack mx="auto" my="8" w="400px">
          <FormControl>
            <Flex flexDirection="column">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EditIcon color="gray.300" />}
                />
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  mb="3"
                  required
                />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  mb="3"
                  required
                />
              </InputGroup>

              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                mb="3"
                required
              />

              <Button type="submit" colorScheme="green" variant="ghost">
                Sign In
              </Button>
            </Flex>
          </FormControl>
        </Stack>
      </form>
    </>
  );
}