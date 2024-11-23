import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Logo from "./assets/logo.png"
import { BorderTop, BorderBottom } from './assets/svg'
import Header from './components/Header'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const location = useLocation();

  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full'>
       <Header />
      <Routes key={location.pathname} location={location}>
          <Route
            path="/*"
            element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
