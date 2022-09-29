import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export default function Header() {
  const { items } = useSelector((state: RootState) => state.currency)
  let currencies = Object.entries(items)
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            National Bank
          </Typography>
          <div>
            {currencies.map(
              (item) =>
                (item[0] === "EUR" || item[0] === "UAH") && (
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ marginRight: 5 }}
                    key={item[0]}
                  >
                    {`${item[0]}: ${item[1]}`}
                  </Typography>
                )
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
