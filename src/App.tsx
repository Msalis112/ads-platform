import { useEffect } from 'react'

import { useRoutes } from 'react-router-dom'
import { useWebApp } from '@vkruglikov/react-telegram-web-app'
import NavBar from './component/NavBar'
import { routes } from './routes'
import './App.css'

function App() {
  const element = useRoutes(routes)
  const webApp = useWebApp()
  useEffect(() => {
    webApp?.expand()
    webApp?.disableVerticalSwipes()
  }, [])
  return (
    <div className=" relative aspect-auto h-screen bg-gray-800 overflow-hidden">
      <div className='absolute bottom-0 w-full z-10'>
        <NavBar />
      </div>
      {element}
    </div>
  )
}

export default App
