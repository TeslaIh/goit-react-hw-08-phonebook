import Loader from 'components/Loader';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { checkContact } from 'redux/contacts/contacts-selectors';
import {
  useAddContactMutation,
  contactsApi
} from 'redux/contacts/contacts-slice';
import {
  Form,
  Label,
  ButtonSubmit,
  InputName,
  InputNumber,
} from './ContactForm.styles';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();  
  const contacts = contactsApi.endpoints.getContacts.useQueryState('').data;

  const handleChangeName = e => setName(e.target.value);

  const handleChangeNumber = e => setNumber(e.target.value);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const isContact = checkContact(contacts, name);

    if (isContact) {
      toast.error(`${name} is already in contacts.`);
      reset();
      return;
    }

    await addContact({ name: name, phone: number });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <InputName value={name} onChange={handleChangeName} />
      </Label>
      <Label>
        Number
        <InputNumber value={number} onChange={handleChangeNumber} />
      </Label>
      <ButtonSubmit disabled={isLoading}>
        {isLoading ? <Loader size={10} /> : 'Add contact'}
      </ButtonSubmit>
    </Form>
  );
}
