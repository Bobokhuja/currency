import classes from './ExchangeItem.module.scss'
import { useAppDispatch } from '../../../app/hooks'
import { IExchange } from '../../../models/IExchange'
import { deleteExchange } from '../../../features/exchange/exchangeSlice'


function ExchangeItem({exchange, currency2, currency1, id}: IExchange) {
  const dispatch = useAppDispatch()

  return (
    <li className={classes.Item}>
      <header className={classes.Header}>
        <p
          className={classes.Name}
        >
          1 <span className={classes.Currency}>{currency2}</span> =&nbsp;
          <span className={classes.Exchange}>{exchange}</span>&nbsp;
          <span className={classes.Currency}>{currency1}</span>

        </p>

        <div className={classes.Right}>
          <button
            title="Удалить курс"
            className={classes.Delete}
            onClick={() => dispatch(deleteExchange(id))}
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

export default ExchangeItem