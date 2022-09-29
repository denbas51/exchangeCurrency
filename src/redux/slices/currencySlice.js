import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchCurrency = createAsyncThunk(
  "currency/fetchCurrency",
  async (_, { rejectWithValue }) => {
    try {
      const result = axios.get(
        "https://api.apilayer.com/fixer/latest?base=USD&apikey=viz1DPXEMRbcz6s4FYkELrg46JeDTvEs"
      )
      return result
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  items: [],
  status: "loading",
  error: "",
  amount1: 1,
  amount2: 1,
  currency1: "USD",
  currency2: "EUR",
}

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setAmount1(state, action) {
      state.amount1 = action.payload
    },
    setAmount2(state, action) {
      state.amount2 = action.payload
    },
    setCurrency1(state, action) {
      state.currency1 = action.payload
    },
    setCurrency2(state, action) {
      state.currency2 = action.payload
    },
  },
  extraReducers: {
    [fetchCurrency.pending]: (state) => {
      state.items = []
      state.status = "loading"
      state.error = ""
    },
    [fetchCurrency.fulfilled]: (state, action) => {
      state.items = action.payload.data.rates
      state.status = "success"
      state.error = ""
    },
    [fetchCurrency.rejected]: (state, action) => {
      state.items = []
      state.status = "error"
      state.error = action.payload
    },
  },
})

export const { setAmount1, setAmount2, setCurrency1, setCurrency2 } =
  currencySlice.actions

export default currencySlice.reducer
