import avatar1 from "../assets/potential1.png";
import avatar2 from "../assets/potential2.png";
import React, { useEffect, useState } from "react";

function Messenger() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      const newMessages = [...messages, inputValue];
      setMessages(newMessages);
      localStorage.setItem("messages", JSON.stringify(newMessages));
      setInputValue("");
    }
  };

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages") || "[]");
    setMessages(storedMessages);
  }, []);

  return (
    <div className="bg-[#f6f6f6] relative w-[59vw] rounded-[10px] h-[100%] px-[16px]">
      <div className="flex flex-row justify-between border-b py-[12px] items-center">
        <div className="flex flex-row items-center">
          <img src={avatar2} alt="avatar" />
          <div className="ml-[8px]">
            <p className="font-bold text-[16px]">Lisa Roy</p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col-reverse py-2 overflow-y-auto pb-[60px] items-end"
        style={{ height: "calc(100% - 96px)" }}
      >
        {messages
          .slice(0)
          .reverse()
          .map((message, index) => (
            <div key={index} className="mt-[16px] flex flex-row items-end">
              <p className="text-custom-primary text-[14px] px-[16px] max-w-[250px] rounded-[10px] mr-[4px] bg-[#f1f1f1] py-[4px] font-semibold">
                {message}
              </p>
              <img src={avatar1} className="w-[20px]" />
            </div>
          ))}
      </div>
      <div className="fixed mb-[24px] w-[56%] flex flex-row items-center justify-center p-[16px] rounded-[10px] shadow-lg bg-[#d9d9d9] bottom-5">
        <div className="relative w-[85%]">
          <input
            value={inputValue}
            onChange={handleChange}
            placeholder="Write Something..."
            type="text"
            className="border pl-[40px] w-[100%] font-semibold text-[12px] border-custom-inactiveGray flex rounded-[50px] p-[8px]"
          />
          <svg
            className="absolute top-1/4 left-3"
            width="20px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M49 40a24 24 0 0 1-34 0"></path>
              <line x1="20" y1="56" x2="44" y2="56"></line>
              <line x1="32" y1="48" x2="32" y2="56"></line>
              <path d="M40 32a8 8 0 0 1-16 0V16a8 8 0 0 1 16 0z"></path>
            </g>
          </svg>

          <div className="flex flex-row absolute justify-between w-[60px] right-5 top-1.5">
            <svg
              width="15px"
              viewBox="0 0 28 28"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>attachment-2</title>{" "}
                <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Icon-Set"
                    transform="translate(-258.000000, -154.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <path
                      d="M284.562,164.181 L270.325,178.26 C267.966,180.593 264.141,180.593 261.782,178.26 C259.423,175.928 259.423,172.146 261.782,169.813 L274.596,157.141 C276.168,155.586 278.718,155.586 280.291,157.141 C281.863,158.696 281.863,161.218 280.291,162.772 L267.477,175.444 C266.691,176.222 265.416,176.222 264.629,175.444 C263.843,174.667 263.843,173.406 264.629,172.628 L276.02,161.365 L274.596,159.957 L263.206,171.221 C261.633,172.775 261.633,175.297 263.206,176.853 C264.778,178.407 267.328,178.407 268.901,176.852 L281.714,164.181 C284.073,161.849 284.074,158.065 281.715,155.733 C279.355,153.4 275.531,153.4 273.172,155.733 L259.646,169.108 L259.696,169.157 C257.238,172.281 257.455,176.797 260.358,179.668 C263.262,182.539 267.828,182.754 270.987,180.323 L271.036,180.372 L285.986,165.589 L284.562,164.181"
                      id="attachment-2"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>

            <svg
              width="18px"
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
                  d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>

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
                  d="M9 14C9.18131 14.4723 9.47841 14.8915 9.864 15.219C11.0903 16.2483 12.8748 16.2613 14.116 15.25C14.5069 14.9283 14.8109 14.5136 15 14.044"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M9 11V10"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M15 11V10"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div
          onClick={handleSend}
          className="ml-2 h-[30px] cursor-pointer w-[30px] rounded-full bg-custom-primary text-white"
        >
          <svg
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
                d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z"
                fill="#ffffff"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Messenger;
