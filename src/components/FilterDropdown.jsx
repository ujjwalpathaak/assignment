import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FilterDropdown = ({ filter, setFilter }) => {
  const options = [
    { value: '', label: 'Category' },
    { value: 'smartphones', label: 'Smartphones' },
    { value: 'laptops', label: 'Laptops' },
    { value: 'fragrances', label: 'Fragrances' },
    { value: 'skincare', label: 'Skincare' },
    { value: 'groceries', label: 'Groceries' },
    { value: 'home-decoration', label: 'Home Decoration' },
  ];
  return (
    <div className="relative mb-4">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="block appearance-none w-full bg-white dark:bg-gray-900 border-2 border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:border-gray-700 dark:text-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
};

export default FilterDropdown;
