import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, RouterProvider} from "react-router-dom"; 
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/call',
    element: <Layout/>
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: (<div>
    Error: Route not found</div>)
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
