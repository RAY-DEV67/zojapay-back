import DashboardHeading from "../../components/dashboardHeading";
import MessagesSideNav from "../../components/messagesSideNav";
import Messenger from "../../components/messenger";

function Messages() {
  return (
    <div className="bg-[#f6f6f6] flex flex-col h-[100vh] items-center lg:ml-[14.5vw] lg:items-start ">
      <DashboardHeading heading="Messages" />

      <div className="w-[90vw] bg-white h-[83vh] lg:w-[82.5vw] p-[16px] mx-[16px] lg:mt-[90px] rounded-[20px] flex flex-col justify-between items-center lg:items-start lg:flex-row">
        <MessagesSideNav />
        <Messenger />
      </div>
    </div>
  );
}

export default Messages;
