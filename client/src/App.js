import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Restaurant from "./components/Restaurant";
import Home from "./components/Home";

function App() {
  return (
    // setting up routing
    <BrowserRouter>
      <div id="body">
        {/* nav bar appears on all pages*/}
        <Nav />
        <Routes>
          {/* home & restaurant pages routing - setting up paths & components to be displayed */}
          <Route path="/" element={<Home />} />
          <Route
            path="/restaurant/bluebird-barbeque"
            element={<Restaurant />}
          />
          <Route path="/restaurant/henry-st-deli" element={<Restaurant />} />
          <Route path="/restaurant/kismayo" element={<Restaurant />} />
          <Route path="/restaurant/pho-hong" element={<Restaurant />} />
          <Route path="/restaurant/poppy-cafe" element={<Restaurant />} />
          <Route path="/restaurant/saigon-kitchen" element={<Restaurant />} />
          <Route path="/restaurant/shinjuku-station" element={<Restaurant />} />
          <Route path="/restaurant/taco-gordo" element={<Restaurant />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
