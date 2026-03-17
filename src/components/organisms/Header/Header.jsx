import { Nav } from "../../molecules/Nav/Nav"
import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
        <h1>Logo</h1>
        <Nav />
    </header>
  )
}
