import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/*<App />*/}
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
