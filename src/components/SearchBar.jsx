import React from 'react';

function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
