import React from 'react';

const SearchInput = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full mb-4 mr-4 px-4 py-2 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none dark:text-white"
    />
  );
};

export default SearchInput;
