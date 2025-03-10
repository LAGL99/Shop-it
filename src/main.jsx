import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import ProductDetails from './Pages/ProductDetails'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductDetails />
  </StrictMode>,
)
