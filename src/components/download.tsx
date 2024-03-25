import image1 from "../assets/image5.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

function Download() {
  return (
    <div className="bg-custom-primary p-[24px] lg:w-[1100px] md:w-[90%] md:flex-row md:justify-between rounded-[20px] md:mt-[32px] flex flex-col items-center w-[100%]">
      <div className="flex flex-col items-center">
        <p className="text-white font-bold lg:text-[2.5vw] md:text-[3vw]">
          Download Zojapay Now!
        </p>
        <div className="flex justify-between my-[24px] w-[250px] md:w-[90%]">
          <img src={google} className="w-[100px] lg:w-[150px]" />
          <img src={apple} className="w-[100px] lg:w-[150px]" />
        </div>
      </div>
      <img src={image1} className="w-[200px] lg:w-[300px] md:absolute right-[15%]" />
    </div>
  );
}

export default Download;
