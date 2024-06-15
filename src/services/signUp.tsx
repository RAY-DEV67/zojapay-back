import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { API } from "../const/api";
import { toast } from "react-toastify";

interface SignUpProps {
  email: string;
  userPassword: string;
  firstName: string;
  lastName: string;
  navigate: NavigateFunction;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignUp = ({
  email,
  userPassword,
  navigate,
  setloading,
  firstName,
  lastName,
}: SignUpProps) => {
  if (email && userPassword && firstName && lastName) {
    setloading(true);
    axios
      .post(`${API}register`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: userPassword,
      })
      .then((result) => {
        toast.success(result.data.message);
        navigate("/confirm-email", {
          state: { email: email, token: result.data.data.token },
        });
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        toast.error(err.response.data.message);
      });
  }
};
