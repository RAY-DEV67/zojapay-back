import { API } from "../const/api";
import axios from "axios";
import { NavigateFunction } from "react-router-dom";

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
        console.log(result.data);
        navigate("/dashboard");
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        console.log(err.response.data);
      });
  }
};
