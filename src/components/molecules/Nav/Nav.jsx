import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
        </nav>
    </>
  )
}
