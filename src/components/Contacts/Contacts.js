import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-filter';
import { Container } from './Contacts.styles';
import ContactsItem from '../ContactsItem';
import Loader from '../Loader';
import { useGetContactsQuery } from 'redux/contacts/contacts-slice';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';


export default function Contacts() {
  const { data, isFetching, isError, error } = useGetContactsQuery('');
  const filter = useSelector(getFilter);

  if (data) {
    return getVisibleContacts(data, filter).map(
      ({ id, name, phone }, index) => {
        return (
          <ContactsItem
            key={id}
            id={id}
            name={name}
            number={phone}
            index={index}
          />
        );
      }
    );
  }

  return (
    <Container>
      {isError && <p>{error.data}</p>}
      {isFetching && <Loader />}
    </Container>
  );
}
