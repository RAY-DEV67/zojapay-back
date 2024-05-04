interface DashboardCardProps {
  number: number;
  text: string;
  icon: string;
  hover: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  number,
  text,
  icon,
  hover,
}) => {
  return (
    <div
      className={`flex hover:bg-${hover} flex-row items-center w-[100%] p-[24px] lg:p-[12px] rounded-[10px] shadow-md lg:w-[19vw] justify-between bg-white`}
    >
      <div>
        <p className="text-[20px] font-bold">{number}</p>
        <p className="text-[14px] text-custom-darkGray font-semibold">{text}</p>
      </div>
      <img src={icon} alt="icon" />
    </div>
  );
};

export default DashboardCard;
