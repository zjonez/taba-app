import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addName } from '../actions';

interface InputFieldProps {
  checkNames: (name: string) => boolean;
}

const InputFieldStyle = styled.div`
  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
`;

const AddElement = styled.div`
  display: flex;
  & button {
    flex-grow: 1;
    margin-left: 8px;
  }
`

const InputField = (props: InputFieldProps) => {
  const dispatch = useDispatch();
  const { checkNames } = props;

  const [name, setName] = React.useState<string | ''>('');
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setName(value);
  }

  const addItem = () => {
    setErrorMsg(null);
    if (validateName(name)) {
      dispatch(addName(name));
    }
  }

  const validateName = (name: string) => {
    let valid = true;
    if (!name || name.replace(/\s/g, '') === "") {
      setErrorMsg("Name is required");
      valid = false;
    } else if (name && name.length < 5) {
      setErrorMsg("Name should have at least 5 characters");
      valid = false;
    } else if (checkNames(name)) {
      setErrorMsg("Name already exists");
      valid = false;
    }
    return valid;
  }

  const renderError = () => {
    if (errorMsg) {
      return (
        <ErrorMessage>{errorMsg}</ErrorMessage>
      )
    }
  }

  return (
    <InputFieldStyle>
      {renderError()}
      <AddElement>
        <input type="text" value={name} onChange={(e) => {
          handleOnChange(e);
        }} />
        <button onClick={addItem}>Add</button>
      </AddElement>
    </InputFieldStyle>
  )
}

export default InputField;