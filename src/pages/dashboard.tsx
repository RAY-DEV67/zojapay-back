import DashboardCard from "../components/dashboardCard";
import DashboardHeading from "../components/dashboardHeading";
import PotentialMembers from "../components/potentialMembers";
import RevenueCard from "../components/revenueCards";
import TrendingNewsCard from "../components/trendingNews";
import TrendingPosts from "../components/trendingPosts";
import dashboardCard1 from "../assets/dashboardCard1.png";
import dashboardCard2 from "../assets/dashboardCard2.png";
import dashboardCard3 from "../assets/dashboardCard3.png";
import MyChart from "../components/chart";
import potential1 from "../assets/potential1.png";
import potential2 from "../assets/potential2.png";
import potential3 from "../assets/potential3.png";
import potential4 from "../assets/potential4.png";
import potential5 from "../assets/potential5.png";
import stocks1 from "../assets/stocks1.png";
import stocks2 from "../assets/stocks2.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedIn from "../assets/linkedIn.png";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";

function Dashboard() {
  const dummyData = [
    50, 395, 888, 200, 505, 348, 488, 200, 100, 300, 800, 1000,
  ];

  return (
    <div className="bg-[#f6f6f6] flex flex-col items-center lg:ml-[14.5vw] lg:items-start ">
      <DashboardHeading heading="My Portfolio" />
      <div className="lg:w-[85vw] p-[16px] pt-[50px] lg:pt-[60px] flex flex-col items-center lg:items-start lg:flex-row">
        <div className="lg:w-[60vw]">
          <div className="flex gap-y-5 flex-col lg:fixed items-center justify-center lg:justify-between lg:h-[100px] lg:flex-row lg:w-[60vw]  bg-[#f6f6f6] py-[16px]">
            <DashboardCard
              number={51}
              text="Total Channels"
              icon={dashboardCard1}
            />
            <DashboardCard
              number={125}
              text="New Members"
              icon={dashboardCard2}
            />
            <DashboardCard
              number={789}
              text="All Impressions"
              icon={dashboardCard3}
            />
          </div>

          <div className="bg-white p-[16px] rounded-[20px] mt-[16px] lg:mt-[116px]">
            <div className="mb-[16px] flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <p className="text-[18px] font-bold">Overview</p>
              <div className="flex flex-row mt-[16px] lg:mt-[0px] lg:w-[400px] justify-between">
                <p className="text-[2.5vw] lg:text-[14px] bg-custom-primary text-white py-[4px] px-[16px] rounded-[50px]">
                  Robin Hood
                </p>
                <p className="text-[2.5vw] lg:text-[14px] bg-[#f6f6f6] py-[4px] px-[16px] rounded-[50px]">
                  Amretrade
                </p>
                <p className="text-[2.5vw] lg:text-[14px] bg-[#f6f6f6] py-[4px] px-[16px] rounded-[50px]">
                  Fidelity
                </p>
                <p className="text-[2.5vw] lg:text-[14px] bg-[#f6f6f6] py-[4px] px-[16px] rounded-[50px]">
                  Charles
                </p>
              </div>
            </div>

            <div className="w-[100%] mt-[32px] lg:h-[300px] flex flex-col items-center">
              <MyChart
                data={dummyData}
                labels={[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sept",
                  "Oct",
                  "Nov",
                  "Dec",
                ]}
                backgroundColor={[
                  "#ff8600",
                  "#ff8600",
                  "#ff8600",
                  "#ff8600",
                  "#ff8600",
                ]}
                borderColor={[
                  "#ff8600",
                  "#ff8600",
                  "#ff8600",
                  "#ff8600",
                  "#ff8600",
                ]}
              />
            </div>
          </div>

          <div className="bg-white p-[16px] mt-[16px] rounded-[20px]">
            <p className="text-[18px] font-bold">Trending Posts</p>
            <div className="flex flex-col lg:flex-row justify-between lg:mt-[24px]">
              <TrendingPosts
                heading="8 Upcoming Influencer Marketing Trends and Benefits"
                text="Marketing is evolving. Its changing from a one-way street to a two-way
              conversa...."
              />
              <TrendingPosts
                heading="How Influencer Marketing Affects Consumer Buying Behavior"
                text="As influencer marketing continues to grow, consumers have been turning
              to their..."
              />
            </div>
          </div>

          <div className="bg-white p-[16px] mt-[16px] rounded-[20px]">
            <p className="text-[20px] font-bold">Potential Members</p>
            <div className="flex flex-row justify-center flex-wrap gap-2 mt-[16px] lg:justify-between">
              <PotentialMembers
                image={potential1}
                name="Wanda Parker"
                handle="@ashking127"
                score="10.3%"
              />
              <PotentialMembers
                image={potential2}
                name="Terry Brown"
                handle="@ashking127"
                score="9.8%"
              />
              <PotentialMembers
                image={potential3}
                name="Lucas Holmes"
                handle="@ashking127"
                score="6.5%"
              />
              <PotentialMembers
                image={potential4}
                name="Janice Miler"
                handle="@ashking127"
                score="8.6%"
              />
              <PotentialMembers
                image={potential5}
                name="Terry Brown"
                handle="@ashking127"
                score="9.8%"
              />
            </div>
          </div>
        </div>

        <div className="lg:ml-[61vw] mt-[16px] overflow-y-scroll pb-[100px] w-[40vw] mr-[16px] lg:w-[22vw] hidden lg:flex flex-col fixed h-[100vh]">
          <div className="bg-white p-[16px] rounded-[20px] mt-[16px] mr-[8px] lg:mt-[0px]">
            <div className="flex flex-row justify-between items-center">
              <p className="text-[20px] font-bold">Watchlist</p>
              <p className="text-[14px] text-custom-primary font-bold">
                View all
              </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-y-3 mt-[16px] lg:justify-between lg:flex-col">
              <img src={stocks1} alt="stocks" />
              <img src={stocks2} alt="stocks" />
            </div>
          </div>

          <div className="bg-white mt-[16px] mr-[8px] p-[16px] rounded-[20px]">
            <p className="text-[20px] font-bold">Revenue</p>
            <div className="flex flex-row flex-wrap items-center gap-y-3 mt-[16px] justify-between lg:flex-col">
              <RevenueCard
                icon={facebook}
                amount="$4000"
                text="Recently Added Pages"
              />
              <RevenueCard
                icon={instagram}
                amount="$2100"
                text="Video Monitization"
              />
              <RevenueCard
                icon={linkedIn}
                amount="$1752"
                text="Community Buildup"
              />
            </div>
          </div>

          <div className="bg-white mt-[16px] mr-[8px] p-[16px] rounded-[20px]">
            <p className="text-[20px] font-bold">Trending News</p>
            <div className="flex flex-col items-center gap-y-3 mt-[16px] justify-between">
              <TrendingNewsCard
                heading="Russia & Ukraine War"
                text="Marketing is evolving. Its chang..."
                icon={news1}
              />
              <TrendingNewsCard
                heading="Elon Musk bought Twitter"
                text="Twitter is the most useful socil pl..."
                icon={news2}
              />
              <TrendingNewsCard
                heading="Fuel Crisis Everywhere"
                text="Due to covid situation in 2020 the... "
                icon={news3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
