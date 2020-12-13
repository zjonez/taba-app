import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 8px;
  display: flex;
  justify-content: space-evenly;
`;

const Tab = styled(Link)`
  padding: 8px;
  background: #1F1F1F;
  color: #fff;
  text-decoration: none;
  text-align:center;
  flex-grow: 1;
`;

export default function NavTab() {
  return (
    <Wrapper>
      <Tab to="/">Tab 1</Tab>
      <Tab to="/tab2">Tab 2</Tab>
    </Wrapper>
  )
}
