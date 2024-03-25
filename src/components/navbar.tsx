import { useState } from "react";
import Logo from "../assets/image1.jpeg";
import Waitlist from "./waitlist";

function Navbar() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleCloseWaitlist = () => {
    setShowWaitlist(false);
  };

  const handleCloseNavbar = () => {
    setShowNavbar(false);
  };

  const handleOpenWaitlist = () => {
    setShowWaitlist(true);
  };

  return (
    <div className="w-[100vw] fixed border-b-[1px] bg-white p-[8px] md:flex md:flex-col md:items-center">
      <div className="lg:w-[1100px] md:w-[95%]">
        <div className="flex flex-row justify-between items-center">
          <img src={Logo} className="w-[70px] md:w-[150px]" />
          <div className="hidden md:flex md:justify-between w-[150px]">
            <a className="text-[18px]" href="#features">
              Features
            </a>
            <a className="text-[18px]" href="#faq">
              FAQ
            </a>
          </div>
          <button
            onClick={handleOpenWaitlist}
            className="border-custom-primary text-[18px] border p-[8px] rounded-[5px] hidden md:block"
          >
            Sign Up
          </button>

          {!showNavbar && (
            <svg
              onClick={() => {
                setShowNavbar(true);
              }}
              className="md:hidden"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="hamburgerIconTitle"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              color="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title id="hamburgerIconTitle">Menu</title>{" "}
                <path d="M6 7L18 7M6 12L18 12M6 17L18 17"></path>{" "}
              </g>
            </svg>
          )}
          {showNavbar && (
            <p className="md:hidden mr-[16px]" onClick={handleCloseNavbar}>
              X
            </p>
          )}
        </div>
      </div>
      {showNavbar && (
        <div className="flex flex-col items-center justify-center">
          <a
            href="#features"
            onClick={handleCloseNavbar}
            className="text-[18px]"
          >
            Features
          </a>
          <a
            href="#faq"
            onClick={handleCloseNavbar}
            className="text-[18px] my-[12px]"
          >
            Faqs
          </a>
          <button
            onClick={handleOpenWaitlist}
            className="border-custom-primary text-[18px] border p-[8px] rounded-[5px]"
          >
            Sign Up
          </button>
        </div>
      )}
      {showWaitlist && <Waitlist onClose={handleCloseWaitlist} />}
    </div>
  );
}

export default Navbar;
