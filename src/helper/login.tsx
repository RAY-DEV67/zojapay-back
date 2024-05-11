import { API } from "../const/api";
import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { AppDispatch } from "../redux/store"; // Import AppDispatch type
import { setUserDetails } from "../redux/userDetailsReducer";

interface LoginUserProps {
  email: string;
  userPassword: string;
  navigate: NavigateFunction;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: AppDispatch; // Use AppDispatch type
}

export const loginUser = ({
  email,
  userPassword,
  navigate,
  setloading,
  dispatch,
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
        const userDetails = result.data.data.user;
        dispatch(setUserDetails(userDetails));

        // Save token in session storage
        const token = result.data.data.token;
        sessionStorage.setItem('token', token);

        navigate("/dashboard");
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        toast.error(err.response.data.message);
      });
  }
};
