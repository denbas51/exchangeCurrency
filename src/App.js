import { useEffect, useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import { fetchCurrency } from "./redux/slices/currencySlice"
import axios from "axios"
import { useDispatch } from "react-redux"

function App() {
  // const [currencies, setCurrencies] = useState([])
  const dispatch = useDispatch()
  const setItems = async () => {
    dispatch(fetchCurrency())
  }

  useEffect(() => {
    // axios
    //   .get(
    //     "https://api.apilayer.com/fixer/latest?base=USD&apikey=viz1DPXEMRbcz6s4FYkELrg46JeDTvEs"
    //   )
    //   .then((response) => {
    //     setCurrencies(response.data.rates)
    //   })
    setItems()
    // dispatch(fetchCurrency())
  }, [])

  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

export default App
