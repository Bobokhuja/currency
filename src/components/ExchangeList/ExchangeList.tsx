import classes from './ExchangeList.module.scss'
import ExchangeItem from './ExchangeItem/ExchangeItem'
import { useAppSelector } from '../../app/hooks'

function ExchangeList() {
  const {exchanges} = useAppSelector(state => state.exchange)

  return (
    <ul className={classes.List}>
      {exchanges.map(exchange =>
        <ExchangeItem
          key={exchange.id}
          id={exchange.id}
          exchange={exchange.exchange}
          currency2={exchange.currency1}
          currency1={exchange.currency2}
        />
      )}
    </ul>
  )
}

export default ExchangeList