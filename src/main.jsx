import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { App } from './app/App.jsx'
import { products } from "../src/components/constants/constants.js"

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App products={products}/>
  </BrowserRouter>

)
