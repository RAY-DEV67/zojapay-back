import Input from "./input";
import name from "../assets/name.png";
import mail from "../assets/mail.png";
import password from "../assets/password.png";
import CTAButton from "../buttons/cta";
import { Link } from "react-router-dom";

function LoginContainer() {
  return (
    <div className="flex flex-col w-[97vw] lg:w-[50vw] justify-center items-center h-[100vh] bg-custom-gray">
      <div className="bg-white shadow-2xl p-[40px] border rounded-[10px] w-[80vw] lg:w-[70%]">
        <p className="font-bold text-[20px]">Log in to your account</p>
        <p className="text-[14px] mt-[4px]">
          Proceed to log in to your account
        </p>

        <Input
          icon={mail}
          iconPosition="1/2"
          placeholder="Email"
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
          text="Login"
          textColor="otherGray"
          bgColor="inactiveGray"
          navigate="/Dashboard"
          width="98%"
          // onClick={}
        />

        <p className="mt-[24px] font-semibold text-[12px] text-custom-darkGray">
          By clicking the button above, you agree to our{" "}
          <span className="text-custom-primary">Terms of Service</span> and{" "}
          <span className="text-custom-primary">Privacy Policy</span>
        </p>

        <p className="mt-[64px] font-bold text-[12px] text-custom-darkGray">
          Dont have an account?{" "}
          <Link to="/Sign Up" className="text-custom-primary">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default LoginContainer;
