import { createContext, useContext } from 'react'
import style from './ProductCard.module.css'
import { NewContext } from '../../organisms/ProductsContainer/ProductsContainer'


export const ProductCard = () => {

  const product = useContext(NewContext)

  return (
    <>
    <div className={style.productcard} key={product.id}>
      <h3>{product.title}</h3>
        <p>{product.price}</p>
        <img src={product.image} alt="" />
        <button>View Product</button>
    </div>
    
        
    </>
  )
}
