import { createContext, useEffect, useReducer } from "react"
import { ProductsContainer } from "../../organisms/ProductsContainer/ProductsContainer"
import style from './Products.module.css'
import { productsApi } from "../../../api/api"
import { initState, reducer } from "../../../store/store"

export const MyContext = createContext(null)

export const Products = () => {

   const [state, dispatch] =  useReducer(reducer, initState)

  useEffect(() => {
    productsApi.getAllProducts(dispatch)
  }, [])

  return (
    <>
        <div className={style.productcontainer}>
          <MyContext.Provider value={state.products}>
            <ProductsContainer />
          </MyContext.Provider>
        </div>
    </>
  )
}
