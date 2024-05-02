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
      style={{ width: width, backgroundColor: bgColor }}
      className="flex flex-row cursor-pointer mt-[24px] justify-center items-center py-[12px] rounded-[5px]"
    >
      <p
        style={{ color: textColor }}
        className="font-semibold text-[14px] ml-[8px]"
      >
        {loading ? "Loading.." : text}
      </p>
    </div>
  );
};

export default CTAButton;
