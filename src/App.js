import { useEffect, useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import { fetchCurrency } from "./redux/slices/currencySlice"
import axios from "axios"
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch()
  const setItems = async () => {
    dispatch(fetchCurrency())
  }

  useEffect(() => {
    setItems()
  }, [])

  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

export default App
