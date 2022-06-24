import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Careers from "./Components/Careers/Careers";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <Router>
      <HelmetProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/careers" element={<Careers />} />
        </Routes>
        <GlobalStyles />
      </HelmetProvider>
    </Router>
  );
}

export default App;
