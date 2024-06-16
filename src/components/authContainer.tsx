import CTAButton from "./button";
import { Link } from "react-router-dom";

interface AuthProps {
  heading: string;
  subheading: string;
  footerText: string;
  action: string;
  navigate: string;
  ctaText: string;
  loading: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const AuthContainer: React.FC<AuthProps> = ({
  heading,
  subheading,
  footerText,
  onClick,
  action,
  navigate,
  loading,
  children,
  ctaText,
}) => {
  return (
    <div className="flex flex-col w-[97vw] lg:w-[50vw] justify-center items-center h-[100vh] bg-custom-gray">
      <div className="bg-white shadow-2xl p-[24px] lg:p-[40px] border rounded-[10px] w-[90vw] lg:w-[70%]">
        <p className="font-bold text-[20px]">{heading}</p>
        <p className="text-[14px] mt-[4px]">{subheading}</p>

        {children}

        <CTAButton
          text={ctaText}
          textColor="#ffffff"
          bgColor="#ff8600"
          width="98%"
          loading={loading}
          onClick={onClick}
        />

        <p className="mt-[24px] font-semibold text-[12px] text-custom-darkGray">
          By clicking the button above, you agree to our{" "}
          <span className="text-custom-primary">Terms of Service</span> and{" "}
          <span className="text-custom-primary">Privacy Policy</span>
        </p>

        <p className="mt-[32px] font-bold text-[12px] text-custom-darkGray">
          {footerText}
          <Link
            to={navigate}
            className="text-custom-primary cursor-pointer hover:text-blue-500"
          >
            {action}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthContainer;
