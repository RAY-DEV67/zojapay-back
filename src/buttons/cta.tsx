interface CTAButtonProps {
  bgColor: string;
  text: string;
  textColor: string;
  width: string;
  onClick?: () => void;
  loading: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  bgColor,
  text,
  textColor,
  width,
  onClick,
  loading,
}) => {
  return (
    <div
      onClick={onClick}
      style={{ width: width, backgroundColor: bgColor }}
      className="flex flex-row cursor-pointer mt-[24px] justify-center items-center py-[12px] rounded-[5px]"
    >
      <style>
        {`

.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
}
.lds-ellipsis div {
  position: absolute;
  top: 5.33333px;
  width: 5.33333px;
  height: 5.33333px;
  border-radius: 50%;
  background: white;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 20px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 30px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
`}
      </style>

      {loading ? (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <p
          style={{ color: textColor }}
          className="font-semibold text-[14px] ml-[8px]"
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default CTAButton;
