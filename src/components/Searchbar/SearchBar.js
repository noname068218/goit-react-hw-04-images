// SearchBar.js
import {
  SearchBarContainer,
  SearchForm,
  SearchButton,
  SearchInput,
} from './SearchBar.style';
import { BsSearch } from 'react-icons/bs';
import { ThemeProviderWrapper } from '../Theme.provider';

export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarContainer>
      <ThemeProviderWrapper />
      <SearchForm
        onSubmit={event => {
          event.preventDefault();
          const query = event.target.elements.query.value;
          onSubmit(query);
        }}
      >
        <SearchButton type="submit">
          <BsSearch /> Search
        </SearchButton>

        <SearchInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarContainer>
  );
};
