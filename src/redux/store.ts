import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import currency from "./slices/currencySlice"

export const store = configureStore({
  reducer: { currency },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
