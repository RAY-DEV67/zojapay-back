import axios from "axios";
import { API } from "../const/api";

interface ResendMailProps {
  token: string;
  email: string;
}

const ResendMail: React.FC<ResendMailProps> = ({ token, email }) => {
  const resendMail = async () => {
    try {
      const response = await axios.post(
        `${API}resend-otp`,
        { email: email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error("Error resending email", err);
    }
  };

  return (
    <p className="mt-[32px] text-center font-bold text-[12px] text-custom-darkGray">
      Didnt get the mail?{" "}
      <span className="text-custom-primary cursor-pointer" onClick={resendMail}>
        Resend
      </span>{" "}
    </p>
  );
};

export default ResendMail;
