interface CookiePopupProps {
  onClose: () => void;
}

const CookiePopup: React.FC<CookiePopupProps> = ({ onClose }) => {
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
      <div className=" bg-white rounded-[10px] flex flex-col items-center p-[16px]">
        <p className="text-center">
          By using this website, you agree to our cookie policy
        </p>
        <button onClick={onClose} className="mt-[16px] bg-custom-50 p-[8px] rounded-[5px]">
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
