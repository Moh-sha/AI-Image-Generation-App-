import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './index.css';
import logo from './assets/Logo.png';

//import { Home } from './pages/Home';

import { CreatePost } from "./pages/Createpost";

function App() {
  return (

    
    <BrowserRouter>
    
    <header
     aria-label="Main navigation"
     className="w-full flex items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]"
> 
  
  <Link to="/" className="hover:opacity-80 transition duration-200">
    <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
  </Link>


  <div className="w-[2%]" />

           <h1 className="text-xl font-bold font-sans tracking-wide text-gray-900 select-none">
          <span className="text-red-600">J</span>ontro&nbsp;
          <span className="text-blue-600">C</span>hitra
        </h1> 
</header>

    
 
      
    </BrowserRouter>
  );
}

export default App;

