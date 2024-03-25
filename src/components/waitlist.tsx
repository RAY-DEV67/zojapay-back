import Input from "./input";

interface CookiePopupProps {
  onClose: () => void;
}

const Waitlist: React.FC<CookiePopupProps> = ({ onClose }) => {
  return (
    <div
      style={{
        position: "absolute",
        background: "rgba(0,0,0,0.7)",
        height: "100vh",
        width: "100vw",
        zIndex: 1,
        top: "0%",
        left: 0,
      }}
      className="flex flex-col items-center justify-center"
    >
      <div className=" bg-white rounded-[10px] w-[85vw] lg:w-[40vw] p-[16px]">
        <div className="flex justify-between w-[100%]">
          <p className="text-center font-bold">Join Waitlist</p>
          <p className="cursor-pointer" onClick={onClose}>
            X
          </p>
        </div>
        <p className="text-[14px] mt-[16px]">
          This allows us to sign you as a ZojaPay agent to provide cash
          fulfilment services when the product goes live.
        </p>
        <Input placeholder="Name" type="text" />
        <Input placeholder="Phone Number" type="text" />
        <Input placeholder="Email Address" type="email" />
        <a href="http://onelink.to/26kkc7" target="_blank">
          <button
            onClick={onClose}
            className="mt-[16px] bg-custom-primary rounded-[5px] text-white p-[8px]"
          >
            Get the app
          </button>
        </a>
      </div>
    </div>
  );
};

export default Waitlist;
