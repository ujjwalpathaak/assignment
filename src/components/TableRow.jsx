import React from 'react'

function TableRow({ item }) {
    return (
        <tr key={item.id}>
            <td className="px-6 py-2 text-md text-gray-700 dark:text-gray-200 truncate max-w-xs">{item.title}</td>
            <td className="px-6 py-2 text-md text-gray-700 dark:text-gray-200 truncate max-w-md">{item.description}</td>
            <td className="px-6 py-2 text-md text-gray-700 dark:text-gray-200 truncate max-w-xs">{item.price}</td>
            <td className="px-6 py-2 text-md text-gray-700 dark:text-gray-200 truncate max-w-xs">{item.stock}</td>
            <td className="px-6 py-2 text-md text-gray-700 dark:text-gray-200 truncate">{item.brand}</td>
            <td className="px-6 py-2 text-md text-gray-700 dark:text-gray-200 truncate">{item.category}</td>
        </tr>
    )
}

export default TableRow