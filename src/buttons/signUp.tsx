interface CookiePopupProps {
  onOpen: () => void;
}

const SignUp: React.FC<CookiePopupProps> = ({ onOpen }) => {
  return (
    <button
      onClick={onOpen}
      className="bg-custom-primary flex items-center mt-[24px] text-white p-[12px] rounded-[10px]"
    >
      Sign up using Email/Phone
      <svg
      className="ml-[8px]"
        width="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M6 12H18M18 12L13 7M18 12L13 17"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
};

export default SignUp;
