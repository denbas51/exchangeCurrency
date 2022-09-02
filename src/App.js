import { useEffect, useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import axios from "axios"

function App() {
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.apilayer.com/fixer/latest?base=USD&apikey=viz1DPXEMRbcz6s4FYkELrg46JeDTvEs"
      )
      .then((response) => {
        setCurrencies(response.data.rates)
      })
  }, [])

  return (
    <div>
      <Header currencies={Object.entries(currencies)} />
      <Main currencies={currencies} />
    </div>
  )
}

export default App
