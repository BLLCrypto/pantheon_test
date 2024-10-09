import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import DiagonalBorderCard from './components/test'
import Logo from "./assets/logo.png"
import { BorderTop, BorderBottom } from './assets/svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full flex justify-between'>
      <header className='w-full px-12 pt-2 h-12'>
        <div className='h-full'><img className='h-full' src={Logo} /></div>
        <div className='w-full flex justify-center pt-3'>
          <BorderTop className="max-w-full" />
        </div>
      </header>
      <Sidebar />
      <footer className='absolute bottom-0 w-full p-12'>
        <div className='w-full flex justify-center pt-3'>
          <BorderBottom className="max-w-full" />
        </div>
      </footer>
    </div>
  )
}

export default App
