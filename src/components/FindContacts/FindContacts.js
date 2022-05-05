import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './FindContacts.styles';
import { changeFilter, getFilter } from 'redux/contacts/contacts-filter';

const FindContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <Label>
      <b>Find contacts by name:</b>
      <Input
        type="text"
        value={filter}
        onChange={changeFieldFilter}
        name="filter"
      />
    </Label>
  );
};

export default FindContacts;
