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
import Messages from "./pages/messages";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </ScrollToTop>
        <ToastContainer />
        <FeaturesTab />
      </Router>
    </div>
  );
};

export default App;
