import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
// import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shipping from "./components/Shipping/Shipping";
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
          <Route path="/inventory"element={<RequireAuth><Inventory/></RequireAuth>}/> 
          <Route path="/shipment" element={<RequireAuth><Shipping/></RequireAuth>}/>
          <Route path="/product/:productKey"element={<ProductDetail/>}/> 
          <Route path="/login"element={<Login/>}/>
          <Route path="/signup"element={<Signup/>}/>
          <Route path="*" element={<NotFound/>}/>
          
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
