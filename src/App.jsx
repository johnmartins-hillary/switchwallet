import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
// import FAQ from "./pages/FAQ";
import PrivacyTerms from "./pages/PrivacyTerms";
import Developers from "./pages/Developers";
import GlobalBrands from "./pages/GlobalBrands";
import Startups from "./pages/Startups";
import Enterprise from "./pages/Enterprise";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import ComingSoon from "./pages/ComingSoon";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="faq" element={<FAQ />} /> */}
        <Route path="privacy-terms" element={<PrivacyTerms />} />
        <Route path="developers" element={<Developers />} />
        <Route path="global-brands" element={<GlobalBrands />} />
        <Route path="startups" element={<Startups />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="coming-soon" element={<ComingSoon />} />
        <Route path='*' element={<Navigate replace to="/coming-soon" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;