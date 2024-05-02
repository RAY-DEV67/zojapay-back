import axios from "axios";
import Input from "./input";
import name from "../assets/name.png";
import mail from "../assets/mail.png";
import password from "../assets/password.png";
import CTAButton from "../buttons/cta";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUpContainer() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const registerUser = () => {
    setloading(true);
    try {
      axios
        .post("https://fe-test.revvex.io/api/admin/register", {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: userPassword,
        })
        .then((result) => {
          console.log(result.data);
          navigate("/confirm-email");
          setloading(false);
        })
        .catch((err) => {
          console.log(err.response.data);
          setloading(false);
        });
    } catch (error) {
      setloading(false);
      console.error("Error registering user", error);
      // Handle error, e.g., display error message
    }
  };

  return (
    <div className="flex flex-col w-[97vw] lg:w-[50vw] justify-center items-center h-[100vh] bg-custom-gray">
      <div className="bg-white shadow-2xl p-[24px] lg:p-[40px] border rounded-[10px] w-[90vw] lg:w-[70%]">
        <p className="font-bold text-[20px]">Register your account</p>
        <p className="text-[14px] mt-[4px]">
          Proceed to create account and setup your organisation
        </p>
        <div className="flex flex-row justify-between relative">
          <Input
            value={firstName}
            setvalue={setfirstName}
            placeholder="First Name"
            type="text"
            icon={name}
            width="95%"
            iconPosition="35px"
          />
          <Input
            value={lastName}
            setvalue={setlastName}
            icon={name}
            placeholder="Last Name"
            type="text"
            width="95%"
            iconPosition="35px"
          />
        </div>

        <Input
          value={email}
          setvalue={setemail}
          icon={mail}
          iconPosition="20px"
          placeholder="Work email"
          type="text"
          width="98%"
        />
        <Input
          value={userPassword}
          setvalue={setuserPassword}
          icon={password}
          iconPosition="20px"
          placeholder="Password"
          type="text"
          width="98%"
        />

        <CTAButton
          text="Create account"
          textColor="#c3c7ce"
          bgColor="#eceded"
          width="98%"
          onClick={registerUser}
          loading={loading}
        />

        <p className="mt-[24px] font-semibold text-[12px] text-custom-darkGray">
          By clicking the button above, you agree to our{" "}
          <span className="text-custom-primary">Terms of Service</span> and{" "}
          <span className="text-custom-primary">Privacy Policy</span>
        </p>

        <p className="mt-[32px] font-bold text-[12px] text-custom-darkGray">
          Already have an account?{" "}
          <Link to="/login" className="text-custom-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpContainer;
