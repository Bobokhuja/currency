import { IExchange } from '../../models/IExchange'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IExchangeSlice {
  exchanges: IExchange[]
}

const initialState: IExchangeSlice = {
  exchanges: JSON.parse(localStorage.getItem('exchanges') || '[]')
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
    deleteExchange(state, action: PayloadAction<{currency1: string, currency2: string}>) {
      state.exchanges = state.exchanges
        .filter(exchange => (exchange.currency1 !== action.payload.currency1)
          && exchange.currency2 !== action.payload.currency2)
    },
    deleteExchanges(state, action: PayloadAction<string>) {
      state.exchanges = state.exchanges
        .filter(exchange => (exchange.currency1 !== action.payload)
          && exchange.currency2 !== action.payload)
    }
  }
})

export const {deleteExchange, addExchange, deleteExchanges} = exchangeSlice.actions