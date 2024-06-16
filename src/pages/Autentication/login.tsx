import { useState } from "react";
import AuthContainer from "../../components/authContainer";
import { loginUser } from "../../services/login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import mail from "../../assets/mail.png";
import password from "../../assets/password.png";
import ShowPassword from "../../icons/showPassword";
import HidePassword from "../../icons/hidePassword";

function Login() {
  const [email, setemail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleLogin = () => {
    loginUser({
      email,
      userPassword,
      navigate,
      setloading: setloading,
      dispatch,
    });
  };

  return (
    <div className="flex flex-col items-center lg:flex-row-reverse">
      <AuthContainer
        ctaText="Login"
        heading="Log in to your account"
        subheading="Proceed to log in to your account"
        footerText="Dont have an account?"
        action="Register"
        navigate="/sign-up"
        onClick={handleLogin}
        loading={loading}
      >
        <Input
          value={email}
          setvalue={setemail}
          icon={mail}
          iconPosition="25px"
          placeholder="Email"
          type="text"
          width="98%"
        />
        <div className="relative">
          <Input
            value={userPassword}
            setvalue={setuserPassword}
            icon={password}
            iconPosition="25px"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            width="98%"
          />

          <div
            onClick={toggleShowPassword}
            className="absolute cursor-pointer top-4 right-5 z-10"
          >
            {!showPassword ? <ShowPassword /> : <HidePassword />}
          </div>
        </div>
      </AuthContainer>
    </div>
  );
}

export default Login;
