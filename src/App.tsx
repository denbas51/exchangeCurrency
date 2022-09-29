import { useEffect } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import { fetchCurrency } from "./redux/slices/currencySlice"
import { useAppDispatch } from "./redux/store"

function App() {
  const dispatch = useAppDispatch()
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
