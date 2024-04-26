import { useState } from "react";
import CTAButton from "../buttons/cta";

function OTPVerification() {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);

  //   const handleChange = (index: number, value: string) => {
  //     const newCode = [...code];
  //     newCode[index] = value;
  //     setCode(newCode);
  //   };

  return (
    <div className="flex flex-col items-center lg:flex-row-reverse">
      <div className="flex flex-col justify-center w-[97vw] lg:w-[50vw] items-center h-[100vh] bg-custom-gray">
        <div className="bg-white shadow-2xl p-[40px] lg:p-[64px] border rounded-[10px] w-[70vw] lg:w-[60%]">
          <p className="font-bold text-[25px]">Verify your Email</p>
          <p className="text-[14px] mt-[4px] font-semibold text-custom-darkGray">
            A four digit OTP code has been sent to your email{" "}
            <span className="text-custom-primary">Seyi@zojatech.com</span>
          </p>
          <div className="flex w-[90%] justify-between">
            {code.map((digit, index) => (
              <input
                type="number"
                className="border text-[15px] font-semibold border-custom-inactiveGray w-[50px] flex mt-[16px] rounded-[5px] p-[8px]"
              />
            ))}
          </div>
          <CTAButton
            text="Confirm Code"
            textColor="white"
            bgColor="primary"
            navigate="/Email-Verified"
            width="[50%]"
          />
          <p className="mt-[24px] font-bold text-[12px] text-custom-darkGray">
            Didnt get the mail?{" "}
            <span className="text-custom-primary">Resend</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;
