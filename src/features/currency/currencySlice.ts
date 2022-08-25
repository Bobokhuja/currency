import { ICurrency } from '../../models/ICurrency'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import currency from '../../pages/Currency/Currency'

interface ICurrencySlice {
  currencies: ICurrency[]
}

const localCurrency = []

const initialState: ICurrencySlice = {
  currencies: []
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    addCurrency(state, action: PayloadAction<ICurrency>) {
      const {name, code} = action.payload
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
