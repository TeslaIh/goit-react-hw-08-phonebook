import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: aqua;
`;

const Input = styled.input.attrs(() => ({
  type: 'search',
  name: 'filter',
  autoComplete: 'off',
}))`
  margin-top: 5px;
  color: black;
`;

export { Label, Input };
