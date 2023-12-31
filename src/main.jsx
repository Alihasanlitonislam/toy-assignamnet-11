import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthContext from './AuthContext/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
)
