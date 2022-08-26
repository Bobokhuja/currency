import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { currencySlice } from '../features/currency/currencySlice'
import { exchangeSlice } from '../features/exchange/exchangeSlice'
import { exchangeMiddleware } from '../features/exchange/exchangeMiddleware'
import { currencyMiddleware } from '../features/currency/currencyMiddleware'

export const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
    exchange: exchangeSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(exchangeMiddleware, currencyMiddleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
