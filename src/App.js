import "./App.css";
import Myapp from "./Myapp";
import { CartContextProvider } from "./components/Context/Context";
function App() {
  return (
    <CartContextProvider>
      <Myapp />
    </CartContextProvider>
  );
}

export default App;
