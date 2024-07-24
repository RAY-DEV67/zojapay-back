import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/scrollToTop";
import Dashboard from "./pages/Protected/dashboard";
import Navbar from "./components/navbar";
import Login from "./pages/Autentication/login";
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
            <Route path="/" element={<Login />} />

            <Route element={<RequireAuth />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ScrollToTop>
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
