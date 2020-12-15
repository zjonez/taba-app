import React from 'react';
import styled from 'styled-components';
import Container from "./Container";
import InputField from './InputField';
import List from './List';
import Search from './Search';
import Toggle from './Toggle';

import { connect } from 'react-redux';

interface Tab1Props {
  names: Array<string>;
}

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

const Tab1 = (props: Tab1Props) => {
  const { names } = props;
  const [hideOdd, setHideOdd] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string | undefined>();

  const handleOnChange = () => {
    setHideOdd(!hideOdd);
  }

  const checkNames = (name: string) => {
    return names.includes(name);
  }

  const searchNames = (name: string) => {
    setSearchValue(name.toLowerCase())
  }

  return (
    <Container>
      <ToolBar>
        <InputField checkNames={checkNames} />
        <Search searchNames={searchNames} />
        <Toggle hideOdd={hideOdd} onChange={handleOnChange} />
      </ToolBar>
      <List list={names} hideOdd={hideOdd} searchValue={searchValue} />
    </Container>
  )
}

const MapStateToProps = (state: { names: Array<string> }) => {
  return state;
}

export default connect(MapStateToProps)(Tab1);
