import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import PrivacyTerms from "./pages/PrivacyTerms";
import Developers from "./pages/Developers";
import GlobalBrands from "./pages/GlobalBrands";
import Startups from "./pages/Startups";
import Enterprise from "./pages/Enterprise";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import ScrollToTop from "./components/ScrollTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="privacy-terms" element={<PrivacyTerms />} />
        <Route path="developers" element={<Developers />} />
        <Route path="global-brands" element={<GlobalBrands />} />
        <Route path="startups" element={<Startups />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="contact" element={<Contact />} />
        <Route path="coming-soon" element={<ComingSoon />} />
        <Route path='*' element={<Navigate replace to="/coming-soon" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;