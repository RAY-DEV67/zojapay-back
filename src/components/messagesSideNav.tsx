import avatar1 from "../assets/potential1.png";
import avatar2 from "../assets/potential2.png";
import avatar3 from "../assets/potential3.png";
import MessagesCard from "./messagesCard";

function MessagesSideNav() {
  return (
    <div className="bg-[#f6f6f6] w-[20vw] rounded-[10px] h-[100%] p-[16px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <img src={avatar1} />
          <div className="ml-[8px]">
            <p className="font-bold text-custom-primary text-[16px]">
              David Peters
            </p>
            <p className="font-bold text-[12px]">Senior Developer</p>
          </div>
        </div>

        <svg
          width="25px"
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
              d="M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>

      <div className="relative mb-[24px]">
        <input
          placeholder="Search Here"
          type="Text"
          className="border text-[15px] pl-[10px] font-semibold border-custom-inactiveGray w-[98%] flex mt-[16px] rounded-[50px] p-[8px]"
        />
      </div>

      <div className="py-[24px] border-y">
        <MessagesCard
          active={true}
          name="Lisa Roy"
          text="Hi, are you available tomorrow"
          icon={avatar2}
        />
        <MessagesCard
          active={false}
          name="Jammie Taylor"
          text="we will do that tommorrow"
          icon={avatar3}
        />
        <MessagesCard
          active={false}
          name="Jason Roy"
          text="Thats Great"
          icon={avatar1}
        />
      </div>
    </div>
  );
}

export default MessagesSideNav;
