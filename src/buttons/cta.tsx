import { Link } from "react-router-dom";

interface CTAButtonProps {
  bgColor: string;
  text: string;
  textColor: string;
  navigate: string;
  width: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  bgColor,
  text,
  textColor,
  navigate,
  width,
}) => {
  return (
    <Link
      to={navigate}
      className={`flex flex-row mt-[24px] w-${width} justify-center items-center py-[8px] rounded-[5px] bg-custom-${bgColor}`}
    >
      <p
        className={`font-semibold text-[14px] text-custom-${textColor} ml-[8px]`}
      >
        {text}
      </p>
    </Link>
  );
};

export default CTAButton;
