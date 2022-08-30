import { ICurrency } from '../../models/ICurrency'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICurrencySlice {
  currencies: ICurrency[]
}

const initialState: ICurrencySlice = {
  currencies: JSON.parse(localStorage.getItem('currencies') || '[]')
}

const saveTodo = (currency: ICurrency) => {
    const localCurrencies = localStorage.getItem('currencies')
    if (localCurrencies) {
      const copyCurrencies = JSON.parse(localCurrencies)
      copyCurrencies.push(currency)
      localStorage.setItem('currencies', JSON.stringify(copyCurrencies))
    } else {
      localStorage.setItem('currencies', JSON.stringify([currency]))
    }
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    addCurrency(state, action: PayloadAction<ICurrency>) {
      const {code} = action.payload
      if (!state.currencies.find(currency => currency.code === code)) {
        state.currencies.push(action.payload)
        saveTodo(action.payload)
      }
    },
    deleteCurrency(state, action: PayloadAction<string>) {
      state.currencies = state.currencies.filter(currency => currency.code !== action.payload)
    }
  }
})

export const {deleteCurrency, addCurrency} = currencySlice.actions
