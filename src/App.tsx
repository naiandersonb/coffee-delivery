import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { OrdersContextProvider } from './contexts/OrdersContext'
import { defaultTheme } from './styles/themes/default'
import { GLobalStyle } from './styles/themes/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrdersContextProvider>
          <Router />
        </OrdersContextProvider>
        <GLobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
