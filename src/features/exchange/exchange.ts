import { IExchange } from '../../models/IExchange'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IExchangeSlice {
  exchanges: IExchange[]
}

const initialState: IExchangeSlice = {
  exchanges: []
}

export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    addExchange(state, action: PayloadAction<IExchange>) {
      const {currency1, currency2} = action.payload
      const el = state.exchanges.find(exchange => {
        if (exchange.currency1 === currency1 || exchange.currency2 === currency1) {
          if (exchange.currency2 === currency1 || exchange.currency2 === currency2) {
            return true
          }
        }
        return false
      })

      if (!el) {
        state.exchanges.push(action.payload)
      }
    },
    deleteExchange(state, action: PayloadAction<number>) {
      state.exchanges = state.exchanges.filter(exchange => exchange.id === action.payload)
    }
  }
})

export const {deleteExchange, addExchange} = exchangeSlice.actions