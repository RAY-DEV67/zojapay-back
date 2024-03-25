import Logo from "../assets/image1.jpeg";
function Footer() {
  return (
    <div className="mt-[64px] w-[100vw] bg-custom-secondary flex flex-col items-center">
      <div className="p-[16px] lg:w-[1100px] md:w-[90%] md:flex md:justify-between">
        <div className="md:w-[22%]">
          <img src={Logo} className="w-[70px] lg:w-[150px] md:w-[100px]" />
          <p className="mt-[16px] text-[3vw] lg:text-[16px] md:text-[14px]">
            Zojapay is a peer-2-peer financial inclusion application that
            simplifies and enables hassle-free contactless and digital payments
            through modern day payment methods
          </p>
        </div>

        <div className="my-[16px] md:w-[22%]">
          <h2 className="font-bold text-[3vw] lg:text-[16px] md:text-[14px]">
            Product Features
          </h2>
          <p className="my-[8px] text-[3vw] lg:text-[16px] md:text-[14px]">
            Contacless Payments
          </p>
          <p className="my-[8px] text-[3vw] lg:text-[16px] md:text-[14px]">
            Super Agent
          </p>
          <p className="my-[8px] text-[3vw] lg:text-[16px] md:text-[14px]">
            Fund Wallet
          </p>
          <p className="my-[8px] text-[3vw] lg:text-[16px] md:text-[14px]">
            Pay Bills and Utilities
          </p>
        </div>

        <div className="my-[16px] md:w-[22%]">
          <h2 className="font-bold text-[3vw] lg:text-[16px] md:text-[14px]">
            Company
          </h2>
          <p className="my-[8px] text-[3vw] lg:text-[16px] md:text-[14px]">
            Terms And Conditions
          </p>
          <p className="my-[8px] text-[3vw] lg:text-[16px] md:text-[14px]">
            Privacy Policy
          </p>
          <p className="my-[8px] text-[3vw] lg:text-[16px] md:text-[14px]">
            FAQ
          </p>
        </div>

        <div className="my-[16px] md:w-[22%]">
          <h2 className="font-bold text-[3vw] lg:text-[16px] md:text-[14px]">
            Support
          </h2>
          <p className="my-[8px] text-[3vw] w-[60%] md:w-[90%] lg:text-[16px] md:text-[14px]">
            9b Akin-Ogunmade Davies Cl, Gbagada 102216, Lagos
          </p>
          <p className="my-[8px] text-[3vw] lg:text-[16px] md:text-[14px]">
            Support@zojapay.com
          </p>
          <p className="my-[8px] text-[3vw] lg:text-[16px] md:text-[14px]">
            Contact Us +23490168337330
          </p>
          <div className="flex items-center">
            <p className="text-[3vw] mr-[8px] lg:text-[16px] md:text-[14px]">
              Follow us
            </p>
            <a href="" target="_blank">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                    fill="#162082"
                  ></path>{" "}
                </g>
              </svg>
            </a>

            <a href="" target="_blank">
              <svg
                className="mx-[8px]"
                fill="#162082"
                height="25px"
                width="25px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2 c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7 c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9 C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5 c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6 c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"></path>{" "}
                </g>
              </svg>
            </a>

            <a href="" target="_blank">
              <svg
                fill="#162082"
                height="25px"
                width="25px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"></path>{" "}
                    <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 "></polygon>{" "}
                    <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"></path>{" "}
                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8 c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157 c27.3,0,49.5,22.2,49.5,49.5V374.7z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
          </div>

          <p className="text-custom-primary text-[2.5vw] mt-[16px] md:text-[14px] lg:text-[16px]">
            2020 Zojapay All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
