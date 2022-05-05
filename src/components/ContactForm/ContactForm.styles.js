import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  padding: 15px;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: aqua;
`;

const InputName = styled.input.attrs(() => ({
  type: 'text',
  name: 'name',
  autoComplete: 'off',
  required: true,
  pattern: `^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$`,
  title: `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`,
}))`
  display: block;
  margin-top: 5px;
  color: teal;
`;

const InputNumber = styled.input.attrs(() => ({
  type: 'tel',
  name: 'number',
  autoComplete: 'off',
  required: true,
  pattern: `\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}`,
  title: `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`,
}))`
  display: block;
  margin-top: 5px;
  color: teal;
`;

const ButtonSubmit = styled.button.attrs(() => ({
  type: 'submit',
}))`
  height: 2em;
  border: none;
  background-color: aqua;
  border-radius: 8px;
  padding: 5px 15px;
  cursor: pointer;
  background-color: aqua;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    background-color: green;
  }
`;

export { Form, Label, InputName, InputNumber, ButtonSubmit };
