import Footer from "../components/footer";
import Download from "../components/download";
import image1 from "../assets/image4.jpeg";
import image2 from "../assets/image3.jpeg";
import image3 from "../assets/image2.jpeg";
import image4 from "../assets/zoja.svg";
import contactless from "../assets/contactless.svg";
import digital from "../assets/digital.svg";
import protection from "../assets/protection.svg";
import SignUp from "../buttons/signUp";
import FAQ from "../components/FAQ";
import Waitlist from "../components/waitlist";
import { useState } from "react";

function LandingPage() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  const handleCloseWaitlist = () => {
    setShowWaitlist(false);
  };

  const handleOpenWaitlist = () => {
    setShowWaitlist(true);
  };

  return (
    <div className="flex flex-col items-center pt-[70px] md:pt-[100px]">
      <div className="p-[16px] md:mt-[24px] md:flex md:items-center md:justify-center lg:w-[1100px] md:w-[90%]">
        <div>
          <h1 className="text-[5vw] lg:text-[3.5vw] md:text-[4vw] text-left w-[90%] md:w-[80%] font-bold">
            Enjoy Convenient Payment Transactions as a business owner or
            customer.
          </h1>
          <p className="text-left w-[50%] mt-[16px]">
            With ZojaPay, experience ease with our innovative transaction
            methods using your mobile device.
          </p>
          <SignUp onOpen={handleOpenWaitlist} />
        </div>
        <div className="flex flex-col items-center">
          <img src={image4} className="w-[300px] lg:w-[900px] md:w-[500px]" />
        </div>
      </div>

      <div className="p-[16px] lg:w-[1100px] md:w-[90%] md:mt-[32px]">
        <h1 className="text-[5vw] lg:text-[2.5vw] md:text-[3vw] text-left w-[90%] lg:w-[80%] font-bold">
          One-stop solution for all payments
        </h1>
        <div className="lg:flex lg:justify-between lg:mt-[16px]">
          <div className="bg-custom-secondary p-[16px] rounded-[10px] mt-[16px] lg:w-[32%]">
            <img src={contactless} className="mb-[8px]" />
            <h2 className="font-bold text-[4vw] lg:text-[20px] md:text-[19px] w-[70%] text-custom-primary">
              Contactless Payments Made Easy
            </h2>
            <p className="mt-[8px]">
              Our platform supports QR code payments, allowing customers to
              simply scan and pay, and NFC (Tap to Pay) technology, make quick
              and secure payments by simply tapping their smartphones or
              contactless cards, providing a seamless payment experience.
            </p>
          </div>

          <div className="bg-custom-secondary p-[16px] rounded-[10px] mt-[16px] lg:w-[32%]">
            <img src={digital} className="mb-[8px]" />
            <h2 className="font-bold text-[4vw] lg:text-[20px] md:text-[19px] w-[70%] text-custom-primary">
              Digital Point of Sale (mPOS)
            </h2>
            <p className="mt-[8px]">
              Our mobile Point of Sale (mPOS) solution eliminates the need for
              expensive hardware and Businesses can accept card payments, track
              sales, manage inventory, and generate detailed reports, all in one
              user-friendly app.{" "}
            </p>
          </div>

          <div className="bg-custom-secondary p-[16px] rounded-[10px] lg:w-[32%] mt-[16px]">
            <img src={protection} className="mb-[8px]" />
            <h2 className="font-bold text-[4vw] lg:text-[20px] md:text-[19px] w-[70%] text-custom-primary">
              Enhanced Security and Fraud Protection
            </h2>
            <p className="mt-[8px]">
              At Zojapay, security is our top priority. We employ robust
              encryption and tokenization technologies to safeguard sensitive
              customer data, ensuring secure transactions every time.
            </p>
          </div>
        </div>
      </div>

      <div className="p-[16px] md:mt-[24px] md:flex md:items-center md:justify-center lg:w-[1100px] md:w-[90%]">
        <div>
          <h1 className="text-[5vw] lg:text-[2.5vw] md:text-[3vw] text-left w-[90%] md:w-[80%] font-bold">
            We are committed to your safety and earnings
          </h1>
          <p className="text-left w-[50%] md:w-[90%] mt-[16px]">
            Our highly secure platform enables you to focus solely on generating
            revenues.
          </p>
          <SignUp onOpen={handleOpenWaitlist} />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-between lg:w-[500px] items-center mt-[32px]">
            <div>
              <div className="flex flex-col items-center">
                <img src={image1} className="mb-[8px] lg:w-[70px]" />
                <p className="text-custom-primary text-center md:w-[200px] font-semibold lg:text-[18px]">
                  Turn your smartphone into a cash register
                </p>
              </div>

              <div className="flex flex-col items-center mt-[16px]">
                <img src={image2} className="mb-[8px] lg:w-[70px]" />
                <p className="text-custom-primary text-center md:w-[200px] lg:text-[18px] font-semibold">
                  Accept payment anywhere, anytime with ease
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img src={image3} className="mb-[8px] w-[150px] lg:w-[250px]" />
              <p className="text-custom-primary text-center md:w-[200px] lg:text-[18px] font-semibold">
                Simplify your every day business with our all-in-one app
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-[16px] lg:w-[1100px] md:w-[90%] md:mt-[32px]" id="features">
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
              3
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
          <SignUp onOpen={handleOpenWaitlist} />
        </div>
      </div>

      <FAQ />
      <Download />

      <Footer />

      {showWaitlist && <Waitlist onClose={handleCloseWaitlist} />}
    </div>
  );
}

export default LandingPage;
