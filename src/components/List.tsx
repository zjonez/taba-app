import React from 'react'
import styled from 'styled-components';

import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { removeName } from '../actions';

interface ListProps {
  list: Array<string>;
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

const List = (props: ListProps) => {
  const dispatch = useDispatch();
  const { list, hideOdd, searchValue } = props;
  return (
    <ListStyle>
      {list.map((item, index) => {
        if ((!hideOdd || !isOdd(index)) && item && itemFound(item, searchValue)) {
          return (
            <ListItem key={`list-item-${index}`}>
              {index + 1}. {item}
              <button onClick={() => { dispatch(removeName(item)) }}> x </button>
            </ListItem>
          )
        } else {
          return null;
        }
      })}
    </ListStyle>
  )
}

const mapStateToProps = (state: Array<string>) => ({
  names: state
})

const matchDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    removeName: removeName
  }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(List)
