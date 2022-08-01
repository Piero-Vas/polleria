import { useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../App";
import CheckoutPage from "../components/CheckoutPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Inicio from "../components/Inicio";
import Navbar from "../components/Navbar";
import Nosotros from "../components/Nosotros";
import NosotrosBar from "../components/NosotrosBar";
import Products from "../components/Products";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useStateValue } from "../components/StateProvider";
import { auth } from "../conn";
import { actionTypes } from "../reducer";


const Router = () => {
  //se ejecutara una vez
  //si tiene un valor se ejecuta cada vez que cambia el valor
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type:actionTypes.SET_USER,
          user:authUser
        })
        
      }
    })
  },[])
    // como esto es un componente tenemos que usar return para poder crear las rutas
    return (
        <BrowserRouter> 
        <Header/>
        <Routes>
        <Route path="/" element ={<Inicio/>}/>    
          <Route path="/carta" element ={<App/>}/>     
          <Route path="/checkout-page" element ={<CheckoutPage/>}/> 
          <Route path="/login" element ={<SignIn/>}/> 
          <Route path="/register" element ={<SignUp/>}/> 
          <Route path="/nosotros" element ={<NosotrosBar/>}/> 
        </Routes>
        
       </BrowserRouter>
    );
  };
  
  export default Router;