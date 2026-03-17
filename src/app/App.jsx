import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../components/templates/Layout/Layout'
import { Home, Products } from '../components/pages'
import '../app/style/style.css'

export const App = ({products}) => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='/home' element={<Home/> }/>
              <Route path='/products' element={<Products products={products}/>}/>
          </Route>
        </Routes>
    </>
  )
}
