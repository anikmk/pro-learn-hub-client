import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='font-poppins'>
    <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
  </div>
)
