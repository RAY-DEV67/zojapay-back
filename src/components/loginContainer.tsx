import Input from "./input";
import mail from "../assets/mail.png";
import password from "../assets/password.png";
import CTAButton from "../buttons/cta";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../helper/login";

function LoginContainer() {
  const [email, setemail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    loginUser({ email, userPassword, navigate, setloading: setloading });
  };

  return (
    <div className="flex flex-col w-[97vw] lg:w-[50vw] justify-center items-center h-[100vh] bg-custom-gray">
      <div className="bg-white shadow-2xl p-[24px] lg:p-[40px] border rounded-[10px] w-[90vw] lg:w-[70%]">
        <p className="font-bold text-[20px]">Log in to your account</p>
        <p className="text-[14px] mt-[4px]">
          Proceed to log in to your account
        </p>

        <Input
          value={email}
          setvalue={setemail}
          icon={mail}
          iconPosition="25px"
          placeholder="Email"
          type="text"
          width="98%"
        />
        <Input
          value={userPassword}
          setvalue={setuserPassword}
          icon={password}
          iconPosition="25px"
          placeholder="Password"
          type="text"
          width="98%"
        />

        <CTAButton
          text="Login"
          textColor={email && userPassword ? "#ffffff" : "#c3c7ce"}
          bgColor={email && userPassword ? "#ff8600" : "#eceded"}
          width="98%"
          loading={loading}
          onClick={handleLogin}
        />

        <p className="mt-[24px] font-semibold text-[12px] text-custom-darkGray">
          By clicking the button above, you agree to our{" "}
          <span className="text-custom-primary">Terms of Service</span> and{" "}
          <span className="text-custom-primary">Privacy Policy</span>
        </p>

        <p className="mt-[32px] font-bold text-[12px] text-custom-darkGray">
          Dont have an account?{" "}
          <Link to="/sign-up" className="text-custom-primary">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default LoginContainer;
