import './App.css'
import router from "./Routes/router"
import { RouterProvider } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return(
     <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
