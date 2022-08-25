import classes from './Header.module.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className={classes.Header}>
      <h1 className={classes.Title}>Currency</h1>
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/currencies">Валюты</NavLink>
        </li>
        <li>
          <NavLink to="/exchanges">Курсы</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header