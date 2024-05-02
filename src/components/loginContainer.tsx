import Input from "./input";
import mail from "../assets/mail.png";
import password from "../assets/password.png";
import CTAButton from "../buttons/cta";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginContainer() {
  const [email, setemail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const loginUser = () => {
    setloading(true);
    try {
      axios
        .post("https://fe-test.revvex.io/api/admin/login", {
          email: email,
          password: userPassword,
        })
        .then((result) => {
          console.log(result.data);
          navigate("/dashboard");
          setloading(false);
        })
        .catch((err) => {
          setloading(false);
          console.log(err.response.data);
        });
    } catch (error) {
      setloading(false);
      console.error("Error registering user", error);
      // Handle error, e.g., display error message
    }
  };

  return (
    <div className="flex flex-col w-[97vw] lg:w-[50vw] justify-center items-center h-[100vh] bg-custom-gray">
      <div className="bg-white shadow-2xl p-[40px] border rounded-[10px] w-[80vw] lg:w-[70%]">
        <p className="font-bold text-[20px]">Log in to your account</p>
        <p className="text-[14px] mt-[4px]">
          Proceed to log in to your account
        </p>

        <Input
          value={email}
          setvalue={setemail}
          icon={mail}
          iconPosition="1/2"
          placeholder="Email"
          type="text"
          width="[98%]"
        />
        <Input
          value={userPassword}
          setvalue={setuserPassword}
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
          width="98%"
          loading={loading}
          onClick={loginUser}
        />

        <p className="mt-[24px] font-semibold text-[12px] text-custom-darkGray">
          By clicking the button above, you agree to our{" "}
          <span className="text-custom-primary">Terms of Service</span> and{" "}
          <span className="text-custom-primary">Privacy Policy</span>
        </p>

        <p className="mt-[64px] font-bold text-[12px] text-custom-darkGray">
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
