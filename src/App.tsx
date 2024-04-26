import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/scrollToTop";
import LandingPage from "./pages/landingPage";
import FeaturesTab from "./components/featuresTab";
import SignUp from "./pages/signUp";
import ConfirmEmail from "./pages/confirmEmail";
import EmailVerified from "./pages/emailVerified";

const App: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Mulish",
      }}
    >
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Sign Up" element={<SignUp />} />
            <Route path="/Confirm Email" element={<ConfirmEmail />} />
            <Route path="/Email Verified" element={<EmailVerified />} />
          </Routes>
        </ScrollToTop>
        <FeaturesTab />
      </Router>
    </div>
  );
};

export default App;
