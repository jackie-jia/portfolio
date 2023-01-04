import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
    
}

export default App;
