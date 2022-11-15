import { Header } from "./components/Header"
import { Order } from "./components/Order"
import { GlobalStyles } from "./styles/GlobalStyles"

export function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Order />
    </div>
  )
}
