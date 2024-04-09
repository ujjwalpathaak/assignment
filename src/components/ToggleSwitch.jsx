import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ToggleSwitch = ({ toggleDarkMode, darkMode }) => {
    return (
        <button onClick={toggleDarkMode} className="m-4">
            {darkMode ? (
                <>
                    <FontAwesomeIcon icon={faSun} className="text-yellow-500 text-xl" />
                    <span className="text-yellow-500 text-xl font-bold ml-2">Light Mode</span>
                </>
            ) : (
                <>
                    <FontAwesomeIcon icon={faMoon} className="text-blue-500 text-xl" />
                    <span className="text-[#3B82F6] text-xl font-bold ml-2">Dark Mode</span>
                </>
            )}
        </button>
    )
}

export default ToggleSwitch