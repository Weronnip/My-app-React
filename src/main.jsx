import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import New from './New'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('rot')).render(
  <React.StrictMode>
    <New />
  </React.StrictMode>
)
