import Header from './Components/Shared/Header'
import Footer from './Components/Shared/Footer'
import { RouterProvider } from 'react-router-dom'
import { router } from './Components/Routes/Routes'
import './index.css'



function App() {




  return (
    <>
      <div >

        <RouterProvider router={router} >
        </RouterProvider>

      </div>
    </>
  )
}

export default App
