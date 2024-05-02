import { Link } from "react-router-dom";

function RegisterYourAccount() {
  return (
    <div className="flex flex-col w-[97vw] lg:w-[50vw] justify-center items-center h-[100vh] bg-custom-gray">
      <div className="bg-white shadow-2xl p-[32px] border rounded-[10px] w-[85vw] lg:w-[60%]">
        <p className="font-bold text-[20px]">Register your account</p>
        <Link
          to="/sign-up"
          className="flex flex-row border mt-[16px] w-[100%] justify-center items-center py-[8px] rounded-[5px]"
        >
          <svg
            width="15px"
            viewBox="0 -3.5 32 32"
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
              <title>mail</title> <desc>Created with Sketch Beta.</desc>{" "}
              <defs> </defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Icon-Set-Filled"
                  transform="translate(-414.000000, -261.000000)"
                  fill="#000000"
                >
                  <path
                    d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
                    id="mail"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <p className="font-semibold text-[14px] text-custom-darkGray ml-[8px]">
            Sign up with email
          </p>
        </Link>

        <div className="flex flex-row mt-[8px] w-[100%] justify-between items-center py-[4px] rounded-[5px]">
          <div className="w-[23vw] lg:w-[11vw] h-[1px] bg-custom-lightGray"></div>
          <p>or</p>
          <div className="w-[23vw] lg:w-[11vw] h-[1px] bg-custom-lightGray"></div>
        </div>

        <div className="flex flex-row border mt-[8px] w-[100%] justify-center items-center py-[8px] rounded-[5px]">
          <svg
            width="15px"
            viewBox="-0.5 0 48 48"
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
              <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  {" "}
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    {" "}
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <p className="font-semibold text-[14px] text-custom-darkGray ml-[8px]">
            Sign up with Google
          </p>
        </div>

        <p className="mt-[24px] font-semibold text-[12px] text-custom-darkGray">
          By clicking the button above, you agree to our{" "}
          <span className="text-custom-primary">Terms of Service</span> and{" "}
          <span className="text-custom-primary">Privacy Policy</span>
        </p>

        <p className="mt-[64px] font-bold text-[12px] text-custom-darkGray">
          Already have an account?{" "}
          <Link to="/login" className="text-custom-primary">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default RegisterYourAccount;
