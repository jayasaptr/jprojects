/** @format */

import "./App.css";
import Home from "./pages/Home";
import DetailPortfolio from "./pages/DetailPortfolio";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import NotFound from "./pages/NotFound";
import Experiance from "./pages/Experiance";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/portfolio/:id' Component={DetailPortfolio} />
        <Route path='/experiance' Component={Experiance} />
        <Route path='*' Component={NotFound} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
