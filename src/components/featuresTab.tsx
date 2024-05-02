import Features from "./features";
import logo from "../assets/buddyLogo.png";
import { useLocation } from "react-router-dom";

function FeaturesTab() {
  const location = useLocation();

  return (
    <div
      className={`flex-col ${
        location.pathname === "/dashboard" || location.pathname === "/messages"
          ? "hidden"
          : "lg:flex hidden"
      } relative lg:fixed left-0 top-0 w-[97vw] p-[32px] lg:py-[90px] lg:px-[100px] h-[100vh] lg:w-[50vw]`}
    >
      <img src={logo} alt="logo" className="w-[100px] mb-[32px]" />
      <Features Text="Track real-time overview of company's financial performance" />
      <Features Text="Track created projects budget against actual revenue and expenses" />
      <Features Text="Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation" />
      <p className="mt-[64px] font-bold text-[12px] text-custom-darkGray">
        2022 Revvex. All rights reserved
      </p>
    </div>
  );
}

export default FeaturesTab;
