import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App' // Import the 'App' component
import {Services} from './services/Services.js'
Services.getInstance();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
