import { useState } from "react";
import AuthContainer from "../../components/authContainer";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import { SignUp } from "../../services/signUp";
import name from "../../assets/name.png";
import mail from "../../assets/mail.png";
import password from "../../assets/password.png";
import ShowPassword from "../../icons/showPassword";
import HidePassword from "../../icons/hidePassword";

function SignUpContainer() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleSignUp = () => {
    console.log("ok")
    SignUp({
      firstName,
      lastName,
      email,
      userPassword,
      navigate,
      setloading: setloading,
    });
  };

  return (
    <div className="flex flex-col items-center lg:flex-row-reverse">
      <AuthContainer
        ctaText="Sign Up"
        heading="Register your account"
        subheading="Proceed to create account and setup your organisation"
        navigate="/login"
        footerText="Already have an account?"
        action="Login"
        onClick={handleSignUp}
        loading={loading}
      >
        <div className="flex flex-row justify-between relative">
          <Input
            value={firstName}
            setvalue={setfirstName}
            placeholder="First Name"
            type="text"
            icon={name}
            width="95%"
            iconPosition="40px"
          />
          <Input
            value={lastName}
            setvalue={setlastName}
            icon={name}
            placeholder="Last Name"
            type="text"
            width="95%"
            iconPosition="40px"
          />
        </div>

        <Input
          value={email}
          setvalue={setemail}
          icon={mail}
          iconPosition="25px"
          placeholder="Work email"
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

export default SignUpContainer;
