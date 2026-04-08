

export const ProductCard = ({product}) => {
  return (
    <>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <img src={product.image} alt="" />
        <button>View Product</button>
    </>
  )
}
