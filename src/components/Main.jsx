import { Container } from "@mui/material"
import BoxCurrency from "./BoxCurrency"
import { useState } from "react"

function Main({ currencies }) {
  const [amount1, setAmount1] = useState(1)
  const [amount2, setAmount2] = useState(1)
  const [currency1, setCurrency1] = useState("USD")
  const [currency2, setCurrency2] = useState("EUR")

  function handleAmount1Change(amount1) {
    setAmount2((amount1 * currencies[currency2]) / currencies[currency1])
    setAmount1(amount1)
  }

  function handleCurrency1Change(currency1) {
    setAmount2((amount1 * currencies[currency2]) / currencies[currency1])
    setCurrency1(currency1)
  }

  function handleAmount2Change(amount2) {
    setAmount1((amount2 * currencies[currency1]) / currencies[currency2])
    setAmount2(amount2)
  }

  function handleCurrency2Change(currency2) {
    setAmount1((amount2 * currencies[currency1]) / currencies[currency2])
    setCurrency2(currency2)
  }

  return (
    <Container sx={{ display: "flex" }}>
      <BoxCurrency
        currencies={Object.keys(currencies)}
        amount={amount1}
        currency={currency1}
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
      />
      <BoxCurrency
        currencies={Object.keys(currencies)}
        amount={amount2}
        currency={currency2}
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
      />
    </Container>
  )
}

export default Main
