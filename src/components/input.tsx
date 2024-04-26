interface InputProps {
  placeholder: string;
  type: string;
  width: string;
  icon: string;
  iconPosition: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  width,
  icon,
  iconPosition,
}) => {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        type={type}
        className={`border text-[15px] pl-[50px] font-semibold border-custom-inactiveGray w-${width} flex mt-[16px] rounded-[5px] p-[8px]`}
      />
      <img
        src={icon}
        className={`absolute top-${iconPosition} left-4 transform -translate-y-1/2 text-gray-400`}
      />
    </div>
  );
};

export default Input;
