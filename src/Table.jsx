import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown, faSortAmountUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import FilterDropdown from './components/FilterDropdown';
import SearchInput from './components/SearchInput';
import Pagination from './components/Pagination';
import TableRow from './components/TableRow';

const Table = ({ data, darkMode }) => {
  const containerClass = darkMode ? 'dark' : '';
  const itemsPerPage = 10;
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortBy) {
      const valueA = typeof a[sortBy] === 'string' ? a[sortBy].toLowerCase() : a[sortBy];
      const valueB = typeof b[sortBy] === 'string' ? b[sortBy].toLowerCase() : b[sortBy];
      if (valueA < valueB) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    }
    return 0;
  });

  const filteredData = sortedData.filter(item => {
    return item.category.toLowerCase().includes(filter.toLowerCase()) && item.title.toLowerCase().includes(search.toLowerCase());
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentPageData = filteredData.slice(firstIndex, lastIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`container mx-auto px-4 py-8 ${containerClass}`}>
      <div className="flex justify-between items-center">
        <SearchInput search={search} setSearch={setSearch} />
        <FilterDropdown filter={filter} setFilter={setFilter} />
      </div>

      <div className="rounded-md border-2 border-gray-300 dark:border-gray-700">
        <div className="overflow-x-auto rounded-t-lg">
          <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900">
            <thead>
              <tr>
                <th className="text-start whitespace-nowrap px-6 max-w-md py-2 text-gray-900 dark:text-white w-1/6">
                  <span className='text-lg font-bold'>Title</span>
                </th>
                <th className="text-start whitespace-nowrap px-6 max-w-md py-2 text-gray-900 dark:text-white w-1/6">
                  <span className='text-lg font-bold'>Description</span>
                </th>
                <th className="text-start whitespace-nowrap px-6 py-2  text-gray-900 dark:text-white cursor-pointer w-1/6" onClick={() => handleSort('price')}>
                  <span className='text-lg font-bold'>Price</span>
                  {sortBy !== 'price' && (
                    <span className="m-1">
                      <FontAwesomeIcon icon={faSortDown} />
                    </span>)
                  }
                  {sortBy === 'price' && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? (
                        <FontAwesomeIcon icon={faSortAmountUp} />
                      ) : (
                        <FontAwesomeIcon icon={faSortAmountDown} />
                      )}
                    </span>
                  )}
                </th>
                <th className="text-start whitespace-nowrap px-6 py-2  text-gray-900 dark:text-white cursor-pointer w-1/6">
                  <span className='text-lg font-bold' onClick={() => handleSort('stock')} >Stock</span>
                  {sortBy !== 'stock' && (
                    <span className="m-1">
                      <FontAwesomeIcon icon={faSortDown} />
                    </span>)
                  }
                  {sortBy === 'stock' && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? (
                        <FontAwesomeIcon icon={faSortAmountUp} />
                      ) : (
                        <FontAwesomeIcon icon={faSortAmountDown} />
                      )}
                    </span>
                  )}
                </th>
                <th className="text-start whitespace-nowrap px-6 max-w-xs py-2 text-gray-900 dark:text-white w-1/6">
                  <span className='text-lg font-bold'>Brand</span>
                </th>
                <th className="text-start whitespace-nowrap px-6 max-w-xs py-2 text-gray-900 dark:text-white w-1/6">
                  <span className='text-lg font-bold'>Category</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 font-normal">
              {currentPageData.map((item) => (
                <TableRow key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div >
  );
};

export default Table;
