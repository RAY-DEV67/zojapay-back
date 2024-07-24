interface InputProps {
  placeholder: string;
  type: string;
  width: string;
  icon: string;
  iconPosition: string;
  value: string;
  heading: string;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  width,
  value,
  heading,
  setvalue,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
  };

  return (
    <div className="relative">
      <p className="mt-[16px] mb-[4px] text-[14px] text-custom-primary font-bold">
        {heading}
      </p>
      <input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        style={{ width: width }}
        className={`border text-[14px] cursor-pointer hover:bg-[#f6f6f6] pl-[12px] font-semibold border-custom-inactiveGray flex rounded-[15px] py-[12px] px-[8px] ${
          value.trim() === ""
            ? "border-custom-inactiveGray"
            : "border-custom-primary border-2 bg-white"
        }`}
      />
    </div>
  );
};

export default Input;
