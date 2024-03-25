interface InputProps {
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type }) => {
  return (
    <>
      <input
        className="border w-[100%] mt-[16px] p-[4px] rounded-[5px]"
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};

export default Input;
