import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  margin: 8px;
`;

export default function Container(props: ContainerProps) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}
