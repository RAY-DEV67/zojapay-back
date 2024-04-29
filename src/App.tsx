import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/scrollToTop";
import LandingPage from "./pages/landingPage";
import FeaturesTab from "./components/featuresTab";
import SignUp from "./pages/signUp";
import ConfirmEmail from "./pages/confirmEmail";
import EmailVerified from "./pages/emailVerified";
import OTPVerification from "./pages/otpVerification";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar";
import Login from "./pages/login";

const App: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Mulish",
        overflowX: "hidden",
      }}
    >
      <Router>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Sign Up" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Confirm Email" element={<ConfirmEmail />} />
            <Route path="/Email-Verified" element={<EmailVerified />} />
            <Route path="/Verify-otp" element={<OTPVerification />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ScrollToTop>
        <FeaturesTab />
      </Router>
    </div>
  );
};

export default App;
