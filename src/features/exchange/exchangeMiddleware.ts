import { IExchange } from '../../models/IExchange'

export const exchangeMiddleware = (storeAPI: any) => (next: any) => (action: any) => {

  switch (action.type) {
    case 'exchange/addExchange': {
      console.log(action.payload)
      const localExchanges = localStorage.getItem('exchanges')
      if (localExchanges) {
        const copyExchanges = JSON.parse(localExchanges)
        copyExchanges.push(action.payload)
        localStorage.setItem('exchanges', JSON.stringify(copyExchanges))
      } else {
        localStorage.setItem('exchanges', JSON.stringify([action.payload]))
      }
      return next(action)
    }
    case 'exchange/deleteExchange': {
      const localExchanges = localStorage.getItem('exchanges')
      const copyExchanges: IExchange[] = JSON.parse(localExchanges!)
      localStorage.setItem('exchanges', JSON.stringify(
        copyExchanges.filter(exchange => (exchange.currency1 !== action.payload.currency1)
          || (exchange.currency2 !== action.payload.currency2)
        )))
      return next(action)
    }
    case 'exchange/deleteExchanges': {
      const localExchanges = localStorage.getItem('exchanges')
      const copyExchanges: IExchange[] = JSON.parse(localExchanges!)
      console.log(copyExchanges)
      localStorage.setItem('exchanges', JSON.stringify(
        copyExchanges
          .filter(exchange => (exchange.currency1 !== action.payload) && (exchange.currency2 !== action.payload))
      ))
      console.log(copyExchanges
        .filter(exchange => (exchange.currency1 !== action.payload)
          || (exchange.currency2 !== action.payload)))
      return next(action)
    }
    default:
      return next(action)
  }


}