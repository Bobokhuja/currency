import { IExchange } from '../../models/IExchange'
import { ICurrency } from '../../models/ICurrency'

export const currencyMiddleware = (storeAPI: any) => (next: any) => (action: any) => {

  switch (action.type) {
    case 'currency/addCurrency': {
      const localCurrencies = localStorage.getItem('currencies')
      if (localCurrencies) {
        const copyCurrencies = JSON.parse(localCurrencies)
        copyCurrencies.push(action.payload)
        localStorage.setItem('currencies', JSON.stringify(copyCurrencies))
      } else {
        localStorage.setItem('currencies', JSON.stringify([action.payload]))
      }
      return next(action)
    }
    case 'currency/deleteCurrency': {
      const localCurrencies = localStorage.getItem('currencies')
      const copyCurrencies: ICurrency[] = JSON.parse(localCurrencies!)
      localStorage.setItem('currencies', JSON.stringify(
        copyCurrencies.filter(currency => currency.code !== action.payload)
      ))
      return next(action)
    }
    default:
      return next(action)
  }


}