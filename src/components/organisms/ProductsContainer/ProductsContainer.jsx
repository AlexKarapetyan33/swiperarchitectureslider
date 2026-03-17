import { ProductCard } from "../../molecules/ProductCard/ProductCard"

export const ProductsContainer = ({products}) => {
  return (
    <>
        {
            products.map((product) => {
                return <div key={product.id}><ProductCard product={product}/></div>
            })
        }
    </>
  )
}
