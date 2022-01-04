import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import DataContextProvider from "./context/context";

import Home from "./components/Home/Home.js";
import DandD from "./components/DandD";
import Tattoo from "./components/Tattoo";
import Painting from "./components/Painting";
import Navbar from "./components/Home/Nav";

function App() {

  const SCREEN_WIDTH = window.innerWidth

  return (
    <>
      <DataContextProvider>
        <Router>
          <div style={{overflowX:"hidden"}}>
        <Navbar/>
          <Routes>
            <Route path="/" exact={true} element={<Home/>} />
            <Route path="/dand" exact={true} element={<DandD />} />
            <Route path="/tattoo" exact={true} element={<Tattoo />} />
            <Route path="/painting" exact={true} element={<Painting />} />
          </Routes>
          </div>
        </Router>
      </DataContextProvider>
    </>
  );
}

export default App;
