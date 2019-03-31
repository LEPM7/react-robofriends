import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className="pa3">
      <input
        className="pa3 ba b--light-blue"
        type="search"
        placeholder="seach robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;