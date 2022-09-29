export type CurrencyItem = Record<string, number>

export interface CurrencySliceState {
  items: CurrencyItem[]
  status: "loading" | "success" | "error"
  error: any
  amount1: number
  amount2: number
  currency1: string
  currency2: string
}

export type FetchTodosError = {
  message: string
}

export interface Responce {
  [x: string]: any
  success: boolean
  timestamp: number
  base: string
  data: {
    rates: CurrencyItem[]
  }
}

export type BoxCurrencyProps = {
  currencies: string[]
  amount: number
  currency: string
  onAmountChange: (s: number) => void
  onCurrencyChange: (n: string) => void
}
