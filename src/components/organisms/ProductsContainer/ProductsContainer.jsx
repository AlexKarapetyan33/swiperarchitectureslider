import { ProductCard } from "../../molecules/ProductCard/ProductCard"
import style from './ProductContainer.module.css'

export const ProductsContainer = ({products}) => {
  return (
    <>
        {
            products.map((product) => {
                return <div className={style.productcard} key={product.id}><ProductCard product={product}/></div>
            })
        }
    </>
  )
}
