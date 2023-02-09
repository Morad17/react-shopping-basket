import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import { ShopContextProvider } from "./context/shop-context";
import Basket from "./pages/Basket"
import Shop from "./pages/Shop"

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" />
            <Route path="/basket" element={<Basket />}/>
            <Route path="/shop" element={<Shop />}/>
          </Routes>
       </Router>
      </ShopContextProvider>
       
    </div>
  );
}

export default App;
