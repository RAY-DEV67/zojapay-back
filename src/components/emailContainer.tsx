import React from "react";
import CTAButton from "../buttons/cta";

interface EmailContainerProps {
  heading: string;
  text: string;
  cta: string;
  navigate: string;
  image: string;
  confirmEmail: boolean;
}

const EmailContainer: React.FC<EmailContainerProps> = ({
  cta,
  heading,
  text,
  navigate,
  confirmEmail,
  image,
}) => {
  return (
    <div className="flex flex-col justify-center w-[97vw] lg:w-[50vw] items-center h-[100vh] bg-custom-gray">
      <div className="bg-white shadow-2xl px-[32px] py-[64px] border rounded-[10px] w-[80vw] flex flex-col justify-center items-center lg:w-[70%]">
        <img src={image} alt="mail" className="mb-[16px]" />
        <p className="font-bold text-[25px] text-center">{heading}</p>
        <p className="text-[14px] mt-[4px] text-center w-[85%] font-semibold text-custom-darkGray">
          {text}
        </p>
        <div className="flex flex-col items-center w-[100%]">
          <CTAButton
            text={cta}
            textColor="white"
            bgColor="primary"
            navigate={navigate}
            width="[50%]"
          />
        </div>

        {confirmEmail && (
          <p className="mt-[32px] text-center font-bold text-[12px] text-custom-darkGray">
            Didnt get the mail?{" "}
            <span className="text-custom-primary">Resend</span>{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default EmailContainer;
