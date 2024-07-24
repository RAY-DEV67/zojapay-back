import group from "../assets/users.png";

interface CTANavButtonProps {
  text: string;
}

const NavButton: React.FC<CTANavButtonProps> = ({ text }) => {
  return (
    <div
      className={`flex flex-row cursor-pointer text-custom-darkGray mb-[8px] items-center py-[8px] ${
        text === "Dashboard" &&
        "text-white shadow-lg rounded-[10px] bg-custom-primary px-[20px]"
      }`}
    >
      <img src={group} alt="portfolio" />
      <p className="ml-[4px] text-[14px] font-semibold">{text}</p>
    </div>
  );
};

export default NavButton;
