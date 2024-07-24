import { useState } from "react";
import { loginUser } from "../../services/login";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input";
import mail from "../../assets/mail.png";
import backgroundImage from "../../assets/zojapaybg.png";
import password from "../../assets/password.png";
import ShowPassword from "../../icons/showPassword";
import HidePassword from "../../icons/hidePassword";
import CTAButton from "../../components/button";

function Login() {
  const [email, setemail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // Add this state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  // const handleLogin = () => {
  //   loginUser({
  //     email,
  //     userPassword,
  //     navigate,
  //     setloading: setloading,
  //     dispatch,
  //   });
  // };

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-[100vh]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="bg-white bg-opacity-[20%] border border-white rounded-[10px] p-[16px]">
        <div className="bg-white p-[32px] lg:p-[40px] border rounded-[10px] w-[90vw] lg:w-[450px]">
          <p className="text-center text-custom-primary font-bold lg:text-[30px] text-[20px]">
            Login
          </p>
          <Input
            heading="Email"
            value={email}
            setvalue={setemail}
            icon={mail}
            iconPosition="25px"
            placeholder="Enter Your AD Email"
            type="text"
            width="98%"
          />
          <div className="relative">
            <Input
              heading="Password"
              value={userPassword}
              setvalue={setuserPassword}
              icon={password}
              iconPosition="25px"
              placeholder="Enter Your AD Password"
              type={showPassword ? "text" : "password"}
              width="98%"
            />

            <div
              onClick={toggleShowPassword}
              className="absolute cursor-pointer top-10 right-5 z-10"
            >
              {!showPassword ? <ShowPassword /> : <HidePassword />}
            </div>
          </div>

          <div className="flex items-center mt-[16px]">
            <p className="mr-[8px] text-[14px] text-custom-darkGray font-bold">
              Remember Me
            </p>
            <label className="switch">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeToggle}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="flex flex-col items-center">
            <p className="mt-[24px] font-bold text-[12px] text-custom-darkGray">
              Forgot your password?
              <Link
                to="/sign-up"
                className="text-custom-primary cursor-pointer hover:text-blue-500"
              >
                {" "}
                Reset Here
              </Link>
            </p>

            <CTAButton
              text="Login"
              textColor="#ffffff"
              bgColor="#ff8600"
              width="98%"
              // onClick={handleLogin}
              onClick={() => {
                navigate("/dashboard");
              }}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
