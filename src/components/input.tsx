interface InputProps {
  placeholder: string;
  type: string;
  width: string;
  icon: string;
  iconPosition: string;
  value: string;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  width,
  icon,
  iconPosition,
  value,
  setvalue,
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
        className={`border text-[15px] pl-[50px] font-semibold border-custom-inactiveGray flex mt-[16px] rounded-[5px] py-[12px] px-[8px] ${
          value.trim() === ""
            ? "border-custom-inactiveGray"
            : "border-custom-primary border-2 bg-white"
        }`}
      />
      <img
        src={icon}
        style={{ top: iconPosition }}
        className="absolute left-4 transform -translate-y-1/2 text-gray-400"
      />
    </div>
  );
};

export default Input;
