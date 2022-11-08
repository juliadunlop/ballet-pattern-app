import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Combinations from "./Combinations";
import SignIn from "./SignIn";
import Combinations2 from "./Combinations2";

function App() {
  return <Router>
    <Header />
    <Routes>
    <Route exact path='/' element={<Home />} />
        <Route path='/combinations' element={<Combinations />} />
        <Route path='/combinations2' element={<Combinations2 />} />
        <Route path='/signin' element={<SignIn />} />
    </Routes>
    <Footer />
    </Router>
}

export default App;