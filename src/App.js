import { ThemeProvider } from "styled-components"
import theme from "./Theme/theme"

import ButtonShowcase from "./components/ButtonShowcase"
import ClickCounter from "./components/ClickCounter"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonShowcase />
      <ClickCounter />
    </ThemeProvider>
  )
}

export default App
