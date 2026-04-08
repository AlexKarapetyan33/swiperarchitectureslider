import { createContext, useContext } from "react"
import { ProductCard } from "../../molecules/ProductCard/ProductCard"
import { MyContext } from "../../pages/Products/Products"

export const NewContext = createContext(null)

export const ProductsContainer = () => {

  const products = useContext(MyContext)
  console.log(products)


  return (
    <>

        {
          products.map((product) => {
            return <NewContext.Provider value={product}>
              <ProductCard />
              </NewContext.Provider>
          })
        }

    </>
  )
}
