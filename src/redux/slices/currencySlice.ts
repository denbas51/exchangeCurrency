import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { CurrencySliceState, Responce } from "../../@types/types"

export const fetchCurrency = createAsyncThunk(
  "currency/fetchCurrency",
  async () => {
    const result = axios.get<Responce>(
      "https://api.apilayer.com/fixer/latest?base=USD&apikey=viz1DPXEMRbcz6s4FYkELrg46JeDTvEs"
    )
    return result
  }
)

const initialState: CurrencySliceState = {
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
    setAmount1(state, action: PayloadAction<number>) {
      state.amount1 = action.payload
    },
    setAmount2(state, action: PayloadAction<number>) {
      state.amount2 = action.payload
    },
    setCurrency1(state, action: PayloadAction<string>) {
      state.currency1 = action.payload
    },
    setCurrency2(state, action: PayloadAction<string>) {
      state.currency2 = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.pending, (state) => {
      state.items = []
      state.status = "loading"
      state.error = ""
    })

    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.items = action.payload.data.rates
      state.status = "success"
      state.error = ""
    })

    builder.addCase(fetchCurrency.rejected, (state, action) => {
      state.items = []
      state.status = "error"
      state.error = action.payload
    })
  },
})

export const { setAmount1, setAmount2, setCurrency1, setCurrency2 } =
  currencySlice.actions

export default currencySlice.reducer
