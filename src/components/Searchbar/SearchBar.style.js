import styled from 'styled-components';

export const SearchBarContainer = styled.header`
  padding: 10px;
  width: auto;
`;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
`;
export const SearchButton = styled.button`
  cursor: pointer;

  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;

  background: rgb(0, 140, 255);
  box-shadow: 0 0 25px rgb(0, 140, 255);

  &:hover {
    box-shadow: 0 0 5px rgb(0, 140, 255), 0 0 25px rgb(0, 140, 255),
      0 0 50px rgb(0, 140, 255), 0 0 100px rgb(0, 140, 255);
  }
`;
export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border: 2px solid olive;
  width: 15em;
  height: 2.5em;
  padding-left: 0.8em;
  outline: none;
  overflow: hidden;
  background-color: #f3f3f3;
  border-radius: 10px;
  transition: all 0.5s;
  gap: 8px;

  &:hover {
    border: 2px solid #4a9dec;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }
`;
