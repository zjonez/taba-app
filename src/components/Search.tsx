import React from 'react';
import styled from 'styled-components';

interface SearchProps {
  searchNames: (name: string) => void;
}

const SearchInput = styled.div`
  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;

export default function Search(props: SearchProps) {
  const { searchNames } = props;
  const [name, setName] = React.useState<string | undefined>();

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setName(value);
    searchNames(value);
  }

  return (
    <SearchInput>
      <input type="text" placeholder="search" value={name || ''} onChange={(e) => {
        handleOnChange(e)
      }} />
    </SearchInput>
  )
}
