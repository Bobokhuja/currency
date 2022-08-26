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
        copyExchanges.filter(exchange => exchange.id !== action.payload)
      ))
      return next(action)
    }
    default:
      return next(action)
  }


}