import SignUp from "../buttons/signUp";
import image4 from "../assets/zoja.svg";

interface CookiePopupProps {
  onOpen: () => void;
}

const Hero: React.FC<CookiePopupProps> = ({ onOpen }) => {
  return (
    <>
      <div className="p-[16px] md:mt-[24px] md:flex md:items-center md:justify-center lg:w-[1100px] md:w-[90%]">
        <div>
          <h1 className="text-[6.5vw] lg:text-[3.5vw] md:text-[4vw] text-left w-[90%] md:w-[80%] font-bold">
            Enjoy Convenient Payment Transactions as a business owner or
            customer.
          </h1>
          <p className="text-left w-[50%] mt-[16px]">
            With ZojaPay, experience ease with our innovative transaction
            methods using your mobile device.
          </p>
          <SignUp onOpen={onOpen} />
        </div>
        <div className="flex flex-col items-center">
          <img src={image4} className="w-[300px] lg:w-[900px] md:w-[500px]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
