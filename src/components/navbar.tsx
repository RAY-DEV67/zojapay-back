import logo from "../assets/zojapayLogo.png";
import NavbarDashboardIcon from "../icons/navbarDashboard";
import group from "../assets/users.png";
import SupportIcon from "../icons/support";
import SettlementsIcon from "../icons/settlements";
import SearchIcon from "../icons/search";
import GraphIcon from "../icons/graph";
import Bell from "../icons/bell";
import SettingsIcon from "../icons/settings";
import DownArrowIcon from "../icons/downArrow";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  location.pathname === "/dashboard";

  return (
    <>
      <div
        className={` ${
          location.pathname === "/"
            ? "hidden"
            : "lg:fixed bg-white flex-col shadow-md items-center justify-between lg:px-[1px] lg:py-[30px] h-[100vh] lg:w-[14.5vw]"
        }`}
      >
        <div className="flex flex-col items-start mx-[16px]">
          <img
            src={logo}
            alt="logo"
            className="mb-[24px] pl-[20px] w-[100px]"
          />

          <div
            className={`mt-[16px] flex flex-row cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px] shadow-lg rounded-[10px] bg-custom-primary px-[20px]`}
          >
            <NavbarDashboardIcon />
            <p className="ml-[8px] text-[12px] font-semibold text-white">
              Dashboard
            </p>
          </div>

          <div
            className={`flex flex-row pl-[20px] cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px]`}
          >
            <img src={group} alt="portfolio" />
            <p className="ml-[8px] text-[12px] font-semibold">KYC</p>
          </div>

          <div
            className={`flex flex-row pl-[20px] cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px]`}
          >
            <SupportIcon />
            <p className="ml-[8px] text-[12px] font-semibold">Support</p>
          </div>

          <div
            className={`flex flex-row pl-[20px] cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px]`}
          >
            <SettlementsIcon />
            <p className="mx-[8px] text-[12px] font-semibold">Settlements</p>
            <DownArrowIcon width="10px" />
          </div>

          <div
            className={`flex flex-row pl-[20px] cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px]`}
          >
            <SearchIcon />
            <p className="mx-[8px] text-[12px] font-semibold">Account Mgt</p>
            <DownArrowIcon width="10px" />
          </div>

          <div
            className={`flex flex-row pl-[20px] cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px]`}
          >
            <img src={group} alt="portfolio" />
            <p className="ml-[8px] text-[12px] font-semibold">Customers</p>
          </div>

          <div
            className={`flex flex-row pl-[20px] cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px]`}
          >
            <img src={group} alt="portfolio" />
            <p className="ml-[8px] text-[12px] font-semibold">Admin</p>
          </div>

          <div
            className={`flex flex-row pl-[20px] cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px]`}
          >
            <SettlementsIcon />
            <p className="mx-[8px] text-[12px] font-semibold">Payments</p>
            <DownArrowIcon width="10px" />
          </div>

          <div
            className={`flex flex-row pl-[20px] cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px]`}
          >
            <GraphIcon />
            <p className="ml-[8px] text-[12px] font-semibold">Reports</p>
          </div>

          <div
            className={`flex flex-row pl-[20px] cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px]`}
          >
            <Bell />
            <p className="ml-[8px] text-[12px] font-semibold">Info Center</p>
          </div>

          <div
            className={`flex flex-row pl-[20px] cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px]`}
          >
            <SettingsIcon />
            <p className="mx-[8px] text-[12px] font-semibold">
              System Settings
            </p>
            <DownArrowIcon width="10px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
