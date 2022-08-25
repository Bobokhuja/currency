import classes from './CurrencyList.module.scss'
import CurrencyItem from './CurrencyItem/CurrencyItem'
import { useAppSelector } from '../../app/hooks'

function CurrencyList() {
  const {currencies} = useAppSelector(state => state.currency)

  return (
    <ul className={classes.List}>
      {currencies.map(currency =>
        <CurrencyItem
          key={currency.code}
          name={currency.name}
          code={currency.code}
        />
      )}
    </ul>
  )
}

export default CurrencyList