import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NASAImageGallery from "./components/NASAImageGallery";
import ObjectDetails from "./components/ObjectDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"; 
import About from "./components/About"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Agrega el Navbar al principio de tu aplicación */}
       

        {/* Configura tus rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<NASAImageGallery />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/object/:id" element={<ObjectDetails />} />
          {/* Agrega más rutas según tus necesidades */}
        </Routes>
      </div>
      <Footer /> {/* Agrega el componente del footer aquí */}
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

