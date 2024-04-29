interface RevenueCardProps {
  amount: string;
  text: string;
  icon: string;
}

const RevenueCard: React.FC<RevenueCardProps> = ({ amount, text, icon }) => {
  return (
    <div className="flex flex-row items-center w-[38vw] p-[12px] rounded-[10px] lg:w-[19vw] justify-between border">
      <div>
        <p className="text-[20px] font-bold">{amount}</p>
        <p className="text-[14px] text-custom-darkGray font-semibold">{text}</p>
      </div>
      <img src={icon} />
    </div>
  );
};

export default RevenueCard;
