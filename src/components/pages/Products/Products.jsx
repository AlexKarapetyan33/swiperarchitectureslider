import { ProductsContainer } from "../../organisms/ProductsContainer/ProductsContainer"
import style from './Products.module.css'

export const Products = ({products}) => {
  return (
    <>
        <div className={style.productcontainer}>
          <ProductsContainer products={products}/>
        </div>
    </>
  )
}
