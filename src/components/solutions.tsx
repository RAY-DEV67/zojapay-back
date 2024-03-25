import image1 from "../assets/image4.jpeg";
import image2 from "../assets/image3.jpeg";
import image3 from "../assets/image2.jpeg";
import contactless from "../assets/contactless.svg";
import digital from "../assets/digital.svg";
import protection from "../assets/protection.svg";
import SignUp from "../buttons/signUp";
import SolutionsCard from "./solutionsCard";

interface CookiePopupProps {
  onOpen: () => void;
}

const Solutions: React.FC<CookiePopupProps> = ({ onOpen }) => {
  return (
    <>
      <div className="p-[16px] lg:w-[1100px] md:w-[90%] md:mt-[32px]">
        <h1 className="text-[6.5vw] lg:text-[2.5vw] md:text-[3vw] text-left w-[90%] lg:w-[80%] font-bold">
          One-stop solution for all payments
        </h1>
        <div className="lg:flex lg:justify-between lg:mt-[16px]">
          <SolutionsCard
            image={contactless}
            heading="Contactless Payments Made Easy"
            text=" Our platform supports QR code payments, allowing customers to
              simply scan and pay, and NFC (Tap to Pay) technology, make quick
              and secure payments by simply tapping their smartphones or
              contactless cards, providing a seamless payment experience."
          />
          <SolutionsCard
            image={digital}
            heading=" Digital Point of Sale (mPOS)"
            text="Our mobile Point of Sale (mPOS) solution eliminates the need for
            expensive hardware and Businesses can accept card payments, track
            sales, manage inventory, and generate detailed reports, all in one
            user-friendly app."
          />
          <SolutionsCard
            image={protection}
            heading=" Enhanced Security and Fraud Protection"
            text="At Zojapay, security is our top priority. We employ robust
            encryption and tokenization technologies to safeguard sensitive
            customer data, ensuring secure transactions every time."
          />
        </div>
      </div>

      <div className="p-[16px] md:mt-[24px] md:flex md:items-center md:justify-center lg:w-[1100px] md:w-[90%]">
        <div>
          <h1 className="text-[5.5vw] lg:text-[2.5vw] md:text-[3vw] text-left w-[90%] md:w-[80%] font-bold">
            We are committed to your safety and earnings
          </h1>
          <p className="text-left w-[50%] md:w-[90%] mt-[16px]">
            Our highly secure platform enables you to focus solely on generating
            revenues.
          </p>
          <SignUp onOpen={onOpen} />
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
    </>
  );
};

export default Solutions;
