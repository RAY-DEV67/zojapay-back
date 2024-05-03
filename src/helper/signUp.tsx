import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { API } from "../const/api";

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
    try {
      axios
        .post(`${API}register`, {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: userPassword,
        })
        .then((result) => {
          console.log(result.data.data.token);
          navigate("/confirm-email", {
            state: { email: email, token: result.data.data.token },
          });
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
  }
};
