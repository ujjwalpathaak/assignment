import { useEffect, useState } from 'react'
import getData from './service.js'
import Table from './Table.jsx'
import './App.css'
import ToggleSwitch from './components/ToggleSwitch.jsx';

export default function App() {
  const [data, setData] = useState([])
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  return (
    <div className={`h-screen w-screen ${darkMode ? "dark" : ""}`}>
      <div className="h-full w-full bg-white dark:bg-black flex flex-col">
        <div className='flex flex-col items-center'>
          <ToggleSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <h1 className="text-4xl mt-8 font-bold text-black dark:text-white">Ecommerce Products</h1>
        </div>
        <div className='h-full flex mt-16'>
          <Table data={data} darkMode={darkMode} />
        </div>
      </div>
    </div>
  )
}
