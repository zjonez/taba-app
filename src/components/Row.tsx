import React from 'react'
import styled from 'styled-components';

interface RowProps {
  children: React.ReactNode;
}

const RowStyle = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;
export default function Row(props: RowProps) {
  return (
    <RowStyle>{props.children}</RowStyle>
  )
}
