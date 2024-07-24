import logo from "../assets/zojapayLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import analytics from "../assets/analytics.png";
import messages from "../assets/messages.png";
import messagesLight from "../assets/messagesLight.png";
import pack from "../assets/pack.png";
import portfolio from "../assets/portfolio.png";
import portfolioDark from "../assets/portfolioDark.png";
import settings from "../assets/settings.png";
import group from "../assets/users.png";
import avatar from "../assets/avatar (2).png";
import logout from "../assets/logout (2).png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setUserDetails } from "../redux/slice/userDetailsReducer";
import NavButton from "./navbutton";

export const Navbar = () => {
  const location = useLocation();
  const userDetails = useSelector((state: RootState) => state.user.userDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setUserDetails(null));
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="lg:fixed bg-white flex-col shadow-md items-center justify-between lg:px-[1px] lg:py-[30px] h-[100vh] lg:w-[14.5vw]">
        <div className="flex flex-col items-center mx-[16px]">
          <img src={logo} alt="logo" className="mb-[24px] w-[100px]" />

          <NavButton text="Dashboard" />
          <NavButton text="KYC" />
          <NavButton text="Support" />
          <NavButton text="Settlements" />
          <NavButton text="Account Mgt" />
          <NavButton text="Customers" />
          <NavButton text="Admin" />
          <NavButton text="Payments" />
          <NavButton text="Reports" />
          <NavButton text="Info Center" />
          <NavButton text="System Settings" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
