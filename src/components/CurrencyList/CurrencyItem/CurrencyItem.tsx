import classes from './CurrencyItem.module.scss'
import { useState } from 'react'
import { ICurrency } from '../../../models/ICurrency'
import { useAppDispatch } from '../../../app/hooks'
import { deleteCurrency } from '../../../features/currency/currencySlice'


function CurrencyItem({name, code}: ICurrency) {
  const [isShow, setIsShow] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  return (
    <li className={classes.Item}>
      <header className={classes.Header}>

        <p
          className={classes.Name}
        >{name} </p>

        <p
          className={classes.Name}
        >{code}</p>

        <div className={classes.Right}>
          <button
            title="Удалить валюту"
            className={classes.Delete}
            onClick={() => dispatch(deleteCurrency(code))}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1C15.1333 15.4 18.6667 19 18.6667 19" stroke="#777777" strokeWidth="2"/>
              <path d="M19 1C4.86667 15.4 1.33333 19 1.33333 19" stroke="#777777" strokeWidth="2"/>
            </svg>

          </button>
        </div>
      </header>
    </li>
  )
}

export default CurrencyItem