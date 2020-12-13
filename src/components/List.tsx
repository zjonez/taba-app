import React from 'react'
import styled from 'styled-components';

interface ListProps {
  list: Array<string>;
  onDelete: (index: number) => void;
  hideOdd: boolean;
  searchValue: string | undefined;
}

const ListStyle = styled.div`
  & > div:not(:last-child) {
    border-bottom: 0;
  }

  & > div:last-child {
    border-bottom: 1px solid;
  }

  & > div button {
    border-radius: 10px;
  }
`;
const ListItem = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  border: 1px solid #000;
`;

const isOdd = (index: number) => {
  return (index + 1) % 2 > 0;
}

const itemFound = (item: string, name: string | undefined) => {
  let found = true;


  if (name && item.toLowerCase().indexOf(name) === -1) {
    found = false;
  }

  return found;
}

export default function List(props: ListProps) {
  const { list, onDelete, hideOdd, searchValue } = props;
  return (
    <ListStyle>
      {list.map((item, index) => {
        if ((!hideOdd || !isOdd(index)) && item && itemFound(item, searchValue)) {
          return (
            <ListItem key={`list-item-${index}`}>
              {index + 1}. {item}
              <button onClick={() => { onDelete(index) }}> x </button>
            </ListItem>
          )
        } else {
          return null;
        }
      })}
    </ListStyle>
  )
}
