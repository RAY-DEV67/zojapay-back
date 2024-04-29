import logo from "../assets/buddyLogo.png";
import { Link, useLocation } from "react-router-dom";
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

function Navbar() {
  const location = useLocation();

  return (
    <>
      <div
        className={`${
          location.pathname === "/Dashboard" ||
          location.pathname === "/Messages"
            ? "lg:flex hidden"
            : "hidden"
        } lg:fixed bg-white flex-col items-center justify-between lg:px-[10px] lg:py-[30px] h-[100vh] lg:w-[14.5vw]`}
      >
        <div className="flex flex-col items-center">
          <img src={logo} alt="logo" className="mb-[24px]" />
          <Link
            to="/Dashboard"
            className={`flex flex-row items-center py-[8px] ${
              location.pathname === "/Dashboard"
                ? "bg-white shadow-lg px-[32px] rounded-[10px] mb-[8px] text-custom-primary"
                : "text-custom-darkGray mb-[8px]"
            }`}
          >
            <img
              src={
                location.pathname === "/Dashboard" ? portfolio : portfolioDark
              }
              alt="portfolio"
              className="h-[15px] w-[15px]"
            />
            <p className="ml-[4px] text-[14px] font-semibold">My Portfolio</p>
          </Link>
          <div
            className={`flex flex-row items-center py-[8px] ${
              location.pathname === "/My-Group"
                ? "bg-white shadow-lg px-[32px] rounded-[10px] mb-[8px] text-custom-primary"
                : "text-custom-darkGray mb-[8px]"
            }`}
          >
            <img src={group} alt="portfolio" />
            <p className="ml-[4px] text-[14px] font-semibold">My Group</p>
          </div>
          <Link
            to="/Messages"
            className={`flex flex-row items-center py-[8px] ${
              location.pathname === "/Messages"
                ? "bg-white shadow-lg px-[32px] rounded-[10px] mb-[8px] text-custom-primary"
                : "text-custom-darkGray mb-[8px]"
            }`}
          >
            <img
              src={location.pathname === "/Messages" ? messagesLight : messages}
              alt="portfolio"
            />
            <p className="ml-[4px] text-[14px] font-semibold">Messages</p>
          </Link>
          <div
            className={`flex flex-row items-center py-[8px] ${
              location.pathname === "/Analytics"
                ? "bg-white shadow-lg px-[32px] rounded-[10px] mb-[8px] text-custom-primary"
                : "text-custom-darkGray mb-[8px]"
            }`}
          >
            <img src={analytics} alt="portfolio" />
            <p className="ml-[4px] text-[14px] font-semibold">Analytics</p>
          </div>
          <div
            className={`flex flex-row items-center py-[8px] ${
              location.pathname === "/Pack"
                ? "bg-white shadow-lg px-[32px] rounded-[10px] mb-[8px] text-custom-primary"
                : "text-custom-darkGray mb-[8px]"
            }`}
          >
            <img src={pack} alt="portfolio" />
            <p className="ml-[4px] text-[14px] font-semibold">Pack</p>
          </div>
          <div
            className={`flex flex-row items-center py-[8px] ${
              location.pathname === "/Settings"
                ? "bg-white shadow-lg px-[32px] rounded-[10px] mb-[16px] text-custom-primary"
                : "text-custom-darkGray mb-[8px]"
            }`}
          >
            <img src={settings} alt="portfolio" />
            <p className="ml-[4px] text-[14px] font-semibold">Settings</p>
          </div>
        </div>

        <div className="flex flex-col items-center rounded-[20px] relative bg-white shadow-lg w-[90%] py-[24px]">
          <img src={avatar} alt="avatar" className="absolute top-[-20px]" />
          <p className="text-[16px] font-bold mt-[24px]">Theresa Milly</p>
          <p className="text-[14px]">Influencer</p>
          <div className="flex flex-row items-center mt-[16px] py-[4px] px-[16px] justify-center bg-opacity-[16%] rounded-[5px] bg-custom-primary">
            <img src={logout} alt="logout" />
            <p className="ml-[4px] text-custom-primary text-[14px]">LogOut</p>
          </div>
        </div>
      </div>

      <div
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adjust the values as per your requirement
        }}
        className={`${
          location.pathname === "/Dashboard" ||
          location.pathname === "/Messages"
            ? "lg:hidden flex"
            : "hidden"
        }  mt-[4px] fixed justify-between flex-row w-[100vw] bg-white py-[10px] px-[16px] rounded-[50px]`}
      >
        <svg
          width="25px"
          viewBox="0 -2 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ff8600"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>hamburger 2</title> <desc>Created with Sketch Beta.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g
                id="Icon-Set-Filled"
                transform="translate(-310.000000, -1039.000000)"
                fill="#ff8600"
              >
                {" "}
                <path
                  d="M338,1049 L314,1049 C311.791,1049 310,1050.79 310,1053 C310,1055.21 311.791,1057 314,1057 L338,1057 C340.209,1057 342,1055.21 342,1053 C342,1050.79 340.209,1049 338,1049 L338,1049 Z M338,1059 L314,1059 C311.791,1059 310,1060.79 310,1063 C310,1065.21 311.791,1067 314,1067 L338,1067 C340.209,1067 342,1065.21 342,1063 C342,1060.79 340.209,1059 338,1059 L338,1059 Z M314,1047 L338,1047 C340.209,1047 342,1045.21 342,1043 C342,1040.79 340.209,1039 338,1039 L314,1039 C311.791,1039 310,1040.79 310,1043 C310,1045.21 311.791,1047 314,1047 L314,1047 Z"
                  id="hamburger-2"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <img src={logo} alt="logo" className="w-[85px] h-[25px]" />
      </div>
    </>
  );
}

export default Navbar;
