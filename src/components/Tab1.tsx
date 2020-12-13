import React from 'react';
import styled from 'styled-components';
import Container from "./Container";
import InputField from './InputField';
import List from './List';
import Search from './Search';
import Toggle from './Toggle';

const ToolBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  & > div {
    display: flex;
    padding: 8px;
    flex-direction: column;  
  }
`;

export default function Tab1() {
  const [list, setList] = React.useState<Array<string>>([]);
  const [hideOdd, setHideOdd] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string | undefined>();

  const handleAdd = (name: string) => {
    const newList = list.map(item => item);
    newList.push(name);
    setList(newList);
  }

  const handleDelete = (index: number) => {
    const toDelete = list[index];
    const newList = list.filter((item) => { return item !== toDelete })
    setList(newList);
  }

  const handleOnChange = () => {
    setHideOdd(!hideOdd);
  }

  const checkNames = (name: string) => {
    return list.includes(name);
  }

  const searchNames = (name: string) => {
    setSearchValue(name.toLowerCase())
  }

  return (
    <Container>
      <ToolBar>
        <InputField onAdd={handleAdd} checkNames={checkNames} />
        <Search searchNames={searchNames} />
        <Toggle hideOdd={hideOdd} onChange={handleOnChange} />
      </ToolBar>
      <List list={list} onDelete={handleDelete} hideOdd={hideOdd} searchValue={searchValue} />
    </Container>
  )
}
