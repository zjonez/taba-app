import React from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  onAdd: (value: string) => void;
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

export default function InputField(props: InputFieldProps) {
  const { onAdd, checkNames } = props;

  const [value, setValue] = React.useState<string | ''>('');
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
  }

  const addItem = () => {
    setErrorMsg(null);
    if (validateName(value)) {
      onAdd(value);
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
        <input type="text" value={value} onChange={(e) => {
          handleOnChange(e);
        }} />
        <button onClick={addItem}>Add</button>
      </AddElement>
    </InputFieldStyle>
  )
}
