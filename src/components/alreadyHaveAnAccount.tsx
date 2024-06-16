import { Link } from "react-router-dom";

interface AlreadyHaveAnAccountProps {
  text: string;
  action: string;
  navigate: string;
}

const AlreadyHaveAnAccount: React.FC<AlreadyHaveAnAccountProps> = ({
  text,
  action,
  navigate,
}) => {
  return (
    <p className="mt-[32px] font-bold text-[12px] text-custom-darkGray">
      {text}
      <Link
        to={navigate}
        className="text-custom-primary cursor-pointer hover:text-blue-500"
      >
        {action}
      </Link>
    </p>
  );
};

export default AlreadyHaveAnAccount;
