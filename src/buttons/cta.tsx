interface CTAButtonProps {
  bgColor: string;
  text: string;
  textColor: string;
  width: string;
  onClick?: () => void;
  loading: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  bgColor,
  text,
  textColor,
  width,
  onClick,
  loading,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-row cursor-pointer mt-[24px] w-${width} justify-center items-center py-[8px] rounded-[5px] bg-custom-${bgColor}`}
    >
      <p
        className={`font-semibold text-[14px] text-custom-${textColor} ml-[8px]`}
      >
        {loading ? "Loading.." : text}
      </p>
    </div>
  );
};

export default CTAButton;
