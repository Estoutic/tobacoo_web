import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginContainer from './main/pages/auth/LoginContainer'
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
          <QueryClientProvider client={queryClient}>

    <LoginContainer/>
    </QueryClientProvider>
  </React.StrictMode>,
)
