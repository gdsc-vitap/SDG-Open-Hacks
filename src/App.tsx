import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Notice from "./components/Notice";
import ScrollToTop from "./components/ScrollToTop";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppBar />
      <Notice />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <hr />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
