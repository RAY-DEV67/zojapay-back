import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/scrollToTop";
import LandingPage from "./pages/home";
import FeaturesTab from "./components/featuresTab";
import SignUp from "./pages/Autentication/signUp";
import ConfirmEmail from "./pages/Autentication/confirmEmail";
import EmailVerified from "./pages/Autentication/emailVerified";
import OTPVerification from "./pages/Autentication/otpVerification";
import Dashboard from "./pages/Protected/dashboard";
import Navbar from "./components/navbar";
import Login from "./pages/Autentication/login";
import Messages from "./pages/Protected/messages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./components/requireAuth";

const App: React.FC = () => {
  return (
    <div>
      <style>
        {`
      ::-webkit-scrollbar {
        width: 6px;
        border-radius: 10px;
      }

       body{
        font-family: "Mulish"
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `}
      </style>
      <Router>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/email-verified" element={<EmailVerified />} />
            <Route path="/verify-otp" element={<OTPVerification />} />
            <Route element={<RequireAuth />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/messages" element={<Messages />} />
            </Route>
          </Routes>
        </ScrollToTop>
        <ToastContainer />
        <FeaturesTab />
      </Router>
    </div>
  );
};

export default App;
