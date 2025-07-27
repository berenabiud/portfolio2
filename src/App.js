import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactForm from "./components/ContactForm/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
