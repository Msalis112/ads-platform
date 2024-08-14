import { useRoutes } from 'react-router-dom'
import NavBar from './component/NavBar'
import { routes } from './routes'
import './App.css'

function App() {
  const element = useRoutes(routes)
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
