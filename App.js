import { Routes, Route } from "react-router-dom";
import React from "react";
import './app.css';
import Book from "./navcompo/Book";
import Contact from "./navcompo/contact";
import Package from "./package";
import Home from "./Home";
import Text from "./navcompo/abouttext";
import Footer from "./Footer";
import Nav from "./Nav";


const App = () =>{
    return(
        <div>
             <Nav/>
           <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="contact" element={<Contact/>}/>
           <Route path="book" element={<Book/>} />
            <Route path="about" element={<Text/>}/>
            <Route path="package" element={<Package/>}/>
            <Route path="footer" element={<Footer/>}/>
           </Routes> 
           <Footer/>
        </div>  
    )
}
export default App;