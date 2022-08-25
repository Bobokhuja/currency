import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { currencySlice } from '../features/currency/currencySlice'
import { exchangeSlice } from '../features/exchange/exchange'

export const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
    exchange: exchangeSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
