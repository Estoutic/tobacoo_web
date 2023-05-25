import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginContainer from './main/pages/auth/LoginContainer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginContainer/>
  </React.StrictMode>,
)
