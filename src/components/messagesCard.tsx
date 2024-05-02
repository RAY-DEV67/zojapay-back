interface MessagesCardProps {
  name: string;
  text: string;
  icon: string;
  active: boolean;
}

const MessagesCard: React.FC<MessagesCardProps> = ({
  name,
  text,
  icon,
  active,
}) => {
  return (
    <div
      className={`flex flex-row ${
        active && "bg-white p-[8px] shadow-lg rounded-[10px]"
      } justify-between items-center mb-[16px]`}
    >
      <div className="flex flex-row items-center">
        <img src={icon} />
        <div className="ml-[8px]">
          <p className="font-bold text-custom-primary text-[14px]">{name}</p>
          <p className="text-[12px]">{text}</p>
        </div>
      </div>
      <p className="text-[12px]">10:35pm</p>
    </div>
  );
};

export default MessagesCard;
