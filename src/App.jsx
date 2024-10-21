import { useState } from 'react'
import { Navbar } from './components'
import Home from "./pages/Home";
// React
import { AnimatePresence, motion } from "framer-motion"
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
