import SignUp from "../buttons/signUp";

interface CookiePopupProps {
  onOpen: () => void;
}

const Features: React.FC<CookiePopupProps> = ({ onOpen }) => {
  return (
    <>
      <div
        className="p-[16px] lg:w-[1100px] md:w-[90%] md:mt-[32px]"
        id="features"
      >
        <h3 className="text-[6vw] lg:text-[2.5vw] md:text-[3vw] text-center w-[90%] font-bold">
          Key Features
        </h3>

        <div className="p-[16px] lg:flex lg:justify-between ">
          <div className="mt-[24px] lg:w-[22%]">
            <p className="bg-custom-primary w-[30px] h-[30px] flex flex-col items-center justify-center text-[14px] text-white rounded-[50px]">
              1
            </p>
            <p className="my-[8px] font-bold text-custom-primary">
              Contactless payments
            </p>
            <p>
              Make secure and convenient payments with our contactless payment
              options. Scan QR codes or simply tap your phone to pay,
              eliminating the need for physical cash or cards. Experience fast
              and seamless transactions with the power of QR code and NFC
              technology.
            </p>
          </div>

          <div className="mt-[24px] lg:w-[22%]">
            <p className="bg-custom-primary w-[30px] h-[30px] flex flex-col items-center justify-center text-[14px] text-white rounded-[50px]">
              2
            </p>
            <p className="my-[8px] font-bold text-custom-primary">
              Super Agent
            </p>
            <p>
              Become a Zojapay Super Agent and unlock a world of opportunities.
              Earn additional income by offering financial services to your
              community. Provide services such as cash deposits, withdrawals,
              and transfers, making a difference in people's lives.
            </p>
          </div>

          <div className="mt-[24px] lg:w-[22%]">
            <p className="bg-custom-primary w-[30px] h-[30px] flex flex-col items-center justify-center text-[14px] text-white rounded-[50px]">
              3
            </p>
            <p className="my-[8px] font-bold text-custom-primary">
              Fund Wallet
            </p>
            <p>
              Easily load funds into your Zojapay wallet and enjoy hassle-free
              transactions. Link your bank account or use other convenient
              methods to add money to your wallet. Access your funds instantly
              for payments, transfers, and other financial activities.
            </p>
          </div>

          <div className="mt-[24px] lg:w-[22%]">
            <p className="bg-custom-primary w-[30px] h-[30px] flex flex-col items-center justify-center text-[14px] text-white rounded-[50px]">
              4
            </p>
            <p className="my-[8px] font-bold text-custom-primary">
              Pay for Bills and Utilities
            </p>
            <p>
              Easily load funds into your Zojapay wallet and enjoy hassle-free
              transactions. Link your bank account or use other convenient
              methods to add money to your wallet. Access your funds instantly
              for payments, transfers, and other financial activities.
            </p>
          </div>
        </div>
        <div className="flex-col flex items-center">
          <SignUp onOpen={onOpen} />
        </div>
      </div>
    </>
  );
};

export default Features;
