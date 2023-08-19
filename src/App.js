import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useRef } from "react";



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Websites from './components/Websites';
import Papers from './components/Papers';
import Channels from './components/Channels';
import Lexicon from './components/Lexicon';

import Footer from './components/Footer';

function App() {

return (
    <div className="App">
            <Routes>
            

            <Route path="/" element={
                    <>
                        <Navbar />
                        <Landing />
                        <Websites />
                        <Papers />
                        <Channels />
                        <Lexicon />
                        <Footer />


                    </>
                } />


        </Routes>


        
    </div>
);
}

export default App;
