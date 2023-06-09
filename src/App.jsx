import Header from './Components/Shared/Header'
import Footer from './Components/Shared/Footer'
import { RouterProvider } from 'react-router-dom'
import { router } from './Components/Routes/Routes'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';


function App() {




  return (
    <>
      <div >

        <RouterProvider router={router} >
        </RouterProvider>


        <Toaster />
      </div>
    </>
  )
}

export default App
