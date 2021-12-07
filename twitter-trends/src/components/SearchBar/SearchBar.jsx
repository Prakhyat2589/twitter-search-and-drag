import React, { useRef } from "react";
import {
  StyledColumns,
  SearchInput,
  SearchBarWrapper,
} from "./SearchBar.style";

const SearchBar = ({ searchTweets }) => {
  const searhValueRef = useRef(null);

  const search = (event) => {
    //When user press Enter key
    if (event.charCode === 13) {
      const text = event.target.value;
      text !== "" ? searchTweets(text) : event.preventDefault();
    }
  };

  return (
    <StyledColumns>
      <SearchBarWrapper>
        <SearchInput
          className="form-control"
          type="search"
          placeholder="Enter search keyword and press enter"
          aria-label="Search"
          onKeyPress={search}
          ref={searhValueRef}
        />
      </SearchBarWrapper>
    </StyledColumns>
  );
};

export { SearchBar };
