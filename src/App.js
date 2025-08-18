import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Header from "./components/includes/Header";
import Test from "./components/Test";

 function App() {
    return (
        <div>
            
            <Header/>
        
            <div className = "container">
                 <Routes>
                <Route path= "/" element = {<Home/>}/>
                <Route path= "/about" element = {<About/>}/>
                <Route path= "/products" element = {<Products/>}/>
                <Route path= "/contact" element = {<Contact/>}/>
                <Route path = "/test" element = {<Test/>} />
           </Routes>   
            </div>         
          

         </div>

    );

}
export default App;