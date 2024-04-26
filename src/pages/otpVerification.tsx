function OTPVerification() {
  return (
    <div className="flex flex-col justify-center w-[97vw] lg:w-[50vw] items-center h-[100vh] bg-custom-gray">
      <div className="bg-white shadow-2xl p-[32px] border rounded-[10px] w-[80vw] flex flex-col justify-center items-center lg:w-[70%]">
        <p className="font-bold text-[25px] text-center">heading</p>
        <p className="text-[14px] mt-[4px] text-center w-[85%] font-semibold text-custom-darkGray">
          text
        </p>
        {/* <div className="flex flex-col items-center w-[100%]">
          <CTAButton
            text={cta}
            textColor="white"
            bgColor="primary"
            navigate={navigate}
            width="[50%]"
          />
        </div> */}
      </div>
    </div>
  );
}

export default OTPVerification;
