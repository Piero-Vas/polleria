
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CheckoutPage from './components/CheckoutPage';
import Inicio from './components/Inicio';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      
       <Products/>
       <Footer/>
    </div>
  );
}

export default App;
