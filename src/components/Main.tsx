import { Container } from "@mui/material"
import BoxCurrency from "./BoxCurrency"
import { useDispatch, useSelector } from "react-redux"
import {
  setAmount1,
  setAmount2,
  setCurrency1,
  setCurrency2,
} from "../redux/slices/currencySlice"
import { RootState } from "../redux/store"

function Main() {
  const dispatch = useDispatch()

  const { items, amount1, amount2, currency1, currency2 } = useSelector(
    (state: RootState) => state.currency
  )

  const handleAmount1Change = (amount1: number) => {
    //@ts-ignore
    dispatch(setAmount2((amount1 * items[currency2]) / items[currency1]))
    dispatch(setAmount1(amount1))
  }

  const handleCurrency1Change = (currency1: string) => {
    //@ts-ignore
    dispatch(setAmount2((amount1 * items[currency2]) / items[currency1]))
    dispatch(setCurrency1(currency1))
  }

  const handleAmount2Change = (amount2: number) => {
    //@ts-ignore
    dispatch(setAmount1((amount2 * items[currency1]) / items[currency2]))
    dispatch(setAmount2(amount2))
  }

  const handleCurrency2Change = (currency2: string) => {
    //@ts-ignore
    dispatch(setAmount1((amount2 * items[currency1]) / items[currency2]))
    dispatch(setCurrency2(currency2))
  }

  return (
    <Container sx={{ display: "flex" }}>
      <BoxCurrency
        currencies={Object.keys(items)}
        amount={amount1}
        currency={currency1}
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
      />
      <BoxCurrency
        currencies={Object.keys(items)}
        amount={amount2}
        currency={currency2}
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
      />
    </Container>
  )
}

export default Main
