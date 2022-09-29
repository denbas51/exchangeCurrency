import { Container } from "@mui/material"
import BoxCurrency from "./BoxCurrency"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setAmount1,
  setAmount2,
  setCurrency1,
  setCurrency2,
} from "../redux/slices/currencySlice"

function Main() {
  // const [amount1, setAmount1] = useState(1)
  // const [amount2, setAmount2] = useState(1)
  // const [currency1, setCurrency1] = useState("USD")
  // const [currency2, setCurrency2] = useState("EUR")
  const dispatch = useDispatch()

  const { items, amount1, amount2, currency1, currency2 } = useSelector(
    (state) => state.currency
  )

  function handleAmount1Change(amount1) {
    dispatch(setAmount2((amount1 * items[currency2]) / items[currency1]))
    dispatch(setAmount1(amount1))
  }

  function handleCurrency1Change(currency1) {
    dispatch(setAmount2((amount1 * items[currency2]) / items[currency1]))
    dispatch(setCurrency1(currency1))
  }

  function handleAmount2Change(amount2) {
    dispatch(setAmount1((amount2 * items[currency1]) / items[currency2]))
    dispatch(setAmount2(amount2))
  }

  function handleCurrency2Change(currency2) {
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
