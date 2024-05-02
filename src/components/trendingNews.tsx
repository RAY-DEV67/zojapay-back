interface TrendingNewsProps {
  heading: string;
  text: string;
  icon: string;
}

const TrendingNewsCard: React.FC<TrendingNewsProps> = ({
  heading,
  text,
  icon,
}) => {
  return (
    <div className="flex flex-row items-center w-[60vw] p-[12px] rounded-[10px] lg:w-[19vw] justify-between border">
      <img src={icon} />
      <div className="lg:w-[70%]">
        <p className="text-[14px] lg:text-[13px] font-bold">{heading}</p>
        <p className="text-[12px] text-custom-darkGray font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default TrendingNewsCard;
