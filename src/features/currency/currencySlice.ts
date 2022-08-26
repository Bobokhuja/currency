import { ICurrency } from '../../models/ICurrency'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICurrencySlice {
  currencies: ICurrency[]
}

const initialState: ICurrencySlice = {
  currencies: JSON.parse(localStorage.getItem('currencies') || '[]')
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    addCurrency(state, action: PayloadAction<ICurrency>) {
      const {code} = action.payload
      if (!state.currencies.find(currency => currency.code === code)) {
        state.currencies.push(action.payload)
      }
    },
    deleteCurrency(state, action: PayloadAction<string>) {
      state.currencies = state.currencies.filter(currency => currency.code !== action.payload)
    }
  }
})

export const {deleteCurrency, addCurrency} = currencySlice.actions
