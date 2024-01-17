import "./App.css";
import Myapp from "./Myapp";
import Context from "./components/Context/Context";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<Myapp  />} />
          <Route path="/cart" element={ <Cart />}/>
        </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;
