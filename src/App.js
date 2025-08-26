import React from "react";
import { Routes, Route } from "react-router-dom";
import { Displaypage} from "./pages/Displaypage";
import { DisplayImage } from "./pages/Displayimage";
import Contact from "./pages/Contact";
import Map from "./pages/Map";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<DisplayImage />} />
          <Route path="/displaypage" element={<Displaypage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
