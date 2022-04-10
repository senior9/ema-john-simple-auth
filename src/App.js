import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
// import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetails/ProductDetail";
// import Product from "./components/Product/Product";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Shop/>}/> 
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/order"element={<Order/>}/> 
          <Route path="/inventory"element={<Inventory/>}/> 
          <Route path="/product/:productKey"element={<ProductDetail/>}/> 

          <Route path="*" element={<NotFound/>}/>
          
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
