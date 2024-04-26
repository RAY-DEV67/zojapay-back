import Input from "./input";
import name from "../assets/name.png";
import mail from "../assets/mail.png";
import password from "../assets/password.png";
import CTAButton from "../buttons/cta";

function SignUpContainer() {
  return (
    <div className="flex flex-col w-[97vw] lg:w-[50vw] justify-center items-center h-[100vh] bg-custom-gray">
      <div className="bg-white shadow-2xl p-[32px] border rounded-[10px] w-[80vw] lg:w-[70%]">
        <p className="font-bold text-[20px]">Register your account</p>
        <p className="text-[14px] mt-[4px]">
          Proceed to create account and setup your organisation
        </p>
        <div className="flex flex-row justify-between relative">
          <Input
            placeholder="First Name"
            type="text"
            icon={name}
            width="[95%]"
            iconPosition="[35px]"
          />
          <Input
            icon={name}
            placeholder="Last Name"
            type="text"
            width="[95%]"
            iconPosition="[35px]"
          />
        </div>

        <Input
          icon={mail}
          iconPosition="1/2"
          placeholder="Work email"
          type="text"
          width="[98%]"
        />
        <Input
          icon={password}
          iconPosition="1/2"
          placeholder="Password"
          type="text"
          width="[98%]"
        />

        <CTAButton
          text="Create account"
          textColor="otherGray"
          bgColor="inactiveGray"
          navigate="/Confirm Email"
          width="98%"
        />

        <p className="mt-[24px] font-semibold text-[12px] text-custom-darkGray">
          By clicking the button above, you agree to our{" "}
          <span className="text-custom-primary">Terms of Service</span> and{" "}
          <span className="text-custom-primary">Privacy Policy</span>
        </p>

        <p className="mt-[64px] font-bold text-[12px] text-custom-darkGray">
          Already have an account?{" "}
          <span className="text-custom-primary">Login</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default SignUpContainer;
