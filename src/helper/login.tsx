import { API } from "../const/api";
import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

interface LoginUserProps {
  email: string;
  userPassword: string;
  navigate: NavigateFunction;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const loginUser = ({
  email,
  userPassword,
  navigate,
  setloading,
}: LoginUserProps) => {
  if (email && userPassword) {
    setloading(true);
    axios
      .post(`${API}login`, {
        email: email,
        password: userPassword,
      })
      .then((result) => {
        toast.success(result.data.message);
        navigate("/dashboard");
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        toast.error(err.response.data.message);
      });
  }
};
