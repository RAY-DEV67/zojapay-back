import RightArrow from "../icons/rightArrow";

interface DashboardCardProps {
  number1: number;
  number2: number;
  text1: string;
  text2: string;
  text3: string;
  hover: string;
  icon: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  number1,
  number2,
  text1,
  text2,
  text3,
  hover,
  icon,
}) => {
  return (
    <div
      className={`hover:bg-${hover} w-[100%] p-[24px] lg:p-[12px] rounded-[10px] shadow-md lg:w-[20vw] justify-between bg-white mt-[8px]`}
    >
      <div className="flex flex-row items-center">
        <img src={icon} />
        <p className="text-[14px] ml-[8px] text-custom-darkGray font-bold">
          {text1}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-center">
          <p className="text-[12px] text-custom-darkGray font-bold">{text2}</p>
          <p className="text-[14px] font-bold text-custom-primary">{number1}</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[12px] text-custom-darkGray font-bold">{text3}</p>
          <p className="text-[14px] font-bold text-custom-primary">{number2}</p>
        </div>
        <RightArrow />
      </div>
    </div>
  );
};

export default DashboardCard;
