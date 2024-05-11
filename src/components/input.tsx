import HidePassword from "../buttons/hidePassword";
import ShowPassword from "../buttons/showPassword";

interface InputProps {
  placeholder: string;
  type: string;
  width: string;
  icon: string;
  iconPosition: string;
  value: string;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  width,
  icon,
  iconPosition,
  value,
  setvalue,
  onClick,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
  };

  return (
    <div className="relative">
      <input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        style={{ width: width }}
        className={`border text-[15px] cursor-pointer hover:bg-[#f6f6f6] pl-[50px] font-semibold border-custom-inactiveGray flex mt-[16px] rounded-[5px] py-[12px] px-[8px] ${
          value.trim() === ""
            ? "border-custom-inactiveGray"
            : "border-custom-primary border-2 bg-white"
        }`}
      />
      {placeholder === "Password" && (
        <div
          onClick={onClick}
          className="absolute cursor-pointer top-4 right-5 z-10"
        >
          {type === "password" ? <ShowPassword /> : <HidePassword />}
        </div>
      )}
      <img
        src={icon}
        style={{ top: iconPosition }}
        className="absolute left-4 transform -translate-y-1/2 text-gray-400"
      />
    </div>
  );
};

export default Input;
