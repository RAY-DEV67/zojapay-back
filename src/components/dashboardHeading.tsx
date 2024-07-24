import React from "react";
import Bell from "../icons/bell";

interface DashboardHeadingProps {
  heading: string;
}

const DashboardHeading: React.FC<DashboardHeadingProps> = ({ heading }) => {
  return (
    <div className="lg:flex bg-white p-[16px] justify-between items-center flex-row w-[85.5vw] hidden fixed">
      <div className="flex flex-row items-center">
        <p className="text-[20px] font-bold mr-[20px]">{heading}</p>
        <div className="border rounded-[10px] p-[8px] flex flex-row w-[200px] justify-between">
          <p className="text-custom-darkGray font-bold text-[14px]">icon</p>
          <p className="text-custom-darkGray font-bold text-[14px]">
            Advanced Filter
          </p>
          <p className="text-custom-darkGray font-bold text-[14px]">icon</p>
        </div>
      </div>
      <div className="flex flex-row items-center pr-[30px]">
        <div className="py-[8px] px-[14px] mx-[8px] rounded-full bg-white">
          <p className="font-bold">+</p>
        </div>
        <Bell />
        <div className="mx-[8px]">
          <div className="flex flex-row items-center">
            <p className="font-bold mr-[4px]">Wade Warren</p>
            <p className="font-bold">+</p>
          </div>
          <p className="text-[14px]">Admin</p>
        </div>
        <div className="py-[8px] px-[14px] mx-[8px] rounded-full bg-blue-400">
          <p className="font-bold">+</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeading;
