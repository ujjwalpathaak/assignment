import React from 'react';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
    return (
        <div className="rounded-b-lg border-t border-gray-200 px-4 py-2 dark:border-gray-700">
            <ol className="flex justify-end gap-1 text-xs font-medium">
                {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                        <a
                            href="#"
                            className={`block size-8 rounded border ${currentPage === index + 1
                                ? 'border-blue-600 bg-blue-600 text-white'
                                : 'border-gray-100 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white'
                                } text-center leading-8`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Pagination;
