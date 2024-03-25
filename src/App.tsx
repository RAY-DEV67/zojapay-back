import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/scrollToTop";
import Navbar from "./components/navbar";
import LandingPage from "./pages/landingPage";
import CookiePopup from "./components/cookiePopUp";

const App: React.FC = () => {
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCookiePopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseCookiePopup = () => {
    setShowCookiePopup(false);
  };

  return (
    <div>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </ScrollToTop>
      </Router>
      {showCookiePopup && <CookiePopup onClose={handleCloseCookiePopup} />}
    </div>
  );
};

export default App;
