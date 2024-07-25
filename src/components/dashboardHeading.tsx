import React from "react";
import Bell from "../icons/bell";
import FilterIcon from "../icons/filter";
import DownArrowIcon from "../icons/downArrow";
import LaptopIcon from "../icons/laptop";
import avatar from "../assets/zojapayAvatar.png";

interface DashboardHeadingProps {
  heading: string;
}

const DashboardHeading: React.FC<DashboardHeadingProps> = ({ heading }) => {
  return (
    <div className="lg:flex bg-white p-[16px] justify-between items-center flex-row w-[85.5vw] hidden fixed">
      <div className="flex flex-row items-center">
        <p className="text-[20px] font-bold mr-[20px]">{heading}</p>
        <div className="border rounded-[10px] p-[8px] flex flex-row w-[200px] justify-between items-center">
          <FilterIcon />
          <p className="text-custom-darkGray font-bold text-[14px]">
            Advanced Filter
          </p>
          <DownArrowIcon width="15px"/>
        </div>
      </div>
      <div className="flex flex-row items-center pr-[30px]">
        <LaptopIcon />
        <div className="py-[12px] px-[12px] rounded-full bg-white">
          <Bell />
        </div>
        <div className="mx-[8px]">
          <div className="flex flex-row items-center">
            <p className="font-bold mr-[4px]">Wade Warren</p>
            <p className="font-bold">+</p>
          </div>
          <p className="text-[14px]">Admin</p>
        </div>
        <img alt="Avatar" src={avatar} />
      </div>
    </div>
  );
};

export default DashboardHeading;
