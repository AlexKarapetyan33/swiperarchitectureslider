import { Route, Routes } from 'react-router-dom'
import { Layout } from '../components/templates/Layout/Layout'
import { Home, Products, Product } from '../components/pages'
import '../app/style/style.css'

export const App = ({products}) => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<Home products={products}/> }/>
              <Route path='/products' element={<Products />}/>
              <Route path='/products/:id' element={<Product />}/>
          </Route>
        </Routes>
    </>
  )
}
