import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Container, TextField } from "@mui/material"
import { BoxCurrencyProps } from "../@types/types"

function BoxCurrency({
  currencies,
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
}: BoxCurrencyProps) {
  return (
    <Container sx={{ display: "flex" }}>
      <TextField
        id="standard-basic"
        label="amount"
        variant="standard"
        value={amount}
        sx={{ marginRight: 5 }}
        onChange={(e) => onAmountChange(+e.target.value)}
      />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth variant="standard">
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Currency"
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            {currencies.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Container>
  )
}

export default BoxCurrency
