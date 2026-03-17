import './App.css'
import Nav from './Components/Nav'
import Index from './Components/Index'
import Footer from './Components/Footer'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App(){
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('theme');
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

    return (
    <>
<div className='bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-500'>
  <Nav isDark={isDark} toggleTheme={toggleTheme} />
  <Routes>
    <Route path='/' element={<Index />} />
  </Routes>
</div>
    </>
  )
}

export default App
