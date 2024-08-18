import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Resource from "./components/pages/Resource";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Banner from "./components/Banner";
import Experts from "./components/Experts";
import NewsLetter from "./components/NewsLetter";
import Plance from "./components/Plance";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Banner/>
        <Experts/>
        <NewsLetter/>
        <Plance/>
        <Footer/>
        <Routes>
            <Route path="company" element={<Company />} />
            <Route path="resource" element={<Resource />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
