import DashboardCard from "../../components/dashboardCard";
import DashboardHeading from "../../components/dashboardHeading";
import MyChart from "../../components/chart";
function Dashboard() {
  const dummyData = [
    50, 395, 888, 200, 505, 348, 488, 200, 100, 300, 800, 1000,
  ];

  return (
    <div className="bg-[#f6f6f6] flex flex-col items-center lg:ml-[14.5vw] lg:items-start ">
      <DashboardHeading heading="Welcome, Bola" />
      <div className="pt-[50px] lg:pt-[80px] flex flex-col items-center lg:items-start lg:flex-row">
        <div className="lg:w-[23vw] bg-white h-[100vh] bg-opacity-[20%] ">
          <div className="flex lg:w-[23vw] gap-y-2 flex-col items-center justify-center lg:justify-between lg:h-[100px] py-[16px]">
            <DashboardCard
              number1={500}
              number2={3400}
              text3="Completed Requests"
              text2="Active Requests"
              text1="Total Cash Requests"
              hover="green-100"
            />
            <DashboardCard
              number1={3100}
              number2={120}
              text3="Reconciled Debit"
              text2="Reconciled Credit"
              text1="Total Reconcilation"
              hover="green-100"
            />
            <DashboardCard
              number1={30}
              number2={2000}
              text3="Resolved Tickets"
              text2="Pending Tickets"
              text1="Support Tickets"
              hover="green-100"
            />
            <DashboardCard
              number1={60}
              number2={380}
              text3="Sub Agents"
              text2="Super Agents"
              text1="Agents"
              hover="green-100"
            />
          </div>
        </div>

        <div className="lg:w-[62vw] bg-[#f5f5f5] px-[16px]">
          <div className="mt-[16px] flex flex-row">
            <div className="flex flex-col items-start">
              <p className="text-[14px] font-bold">Total Income</p>
              <p className="text-[40px] text-bold text-[#89cff0]">19,990,560</p>
              <p className="text-[12px] font-bold">Transaction Inflow</p>
            </div>

            <div className="flex flex-col items-start mx-[60px]">
              <p className="text-[14px] font-bold">Total Withdrawal</p>
              <p className="text-[40px] text-bold text-[#ffaf56]">19,990,560</p>
              <p className="text-[12px] font-bold">Transaction Outflow</p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[14px] font-bold">Revenue</p>
              <p className="text-[40px] text-bold text-[#2dbd9b]">19,990,560</p>
              <p className="text-[12px] font-bold">Transaction Profit</p>
            </div>
          </div>

          <div className="flex flex-row justify-between mt-[66px]">
            <div className="bg-white w-[18vw] py-[16px] px-[24px] rounded-[15px]">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="text-[16px] font-bold">All Users</p>
                  <p className="text-[40px] text-custom-primary font-bold">
                    9300
                  </p>
                </div>

                <div>
                  <p className="text-[12px] text-[#009968]">ACTIVE</p>
                  <p className="text-[12px]">7900</p>
                  <p className="text-[12px] text-[#ff0000]">INACTIVE</p>
                  <p className="text-[12px]">1400</p>
                </div>
              </div>

              <div className="flex flex-row justify-between mt-[16px]">
                <div className="flex flex-col items-center">
                  <p className="text-[10px] font-bold">IOS Downloads</p>
                  <p>4000</p>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-[10px] font-bold">Android Downloads</p>
                  <p>4000</p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between">
                <p className="text-[12px] text-[#009968]">CONVERSION RATE</p>
                <p className="text-[30px] font-bold text-custom-primary">77%</p>
              </div>
            </div>

            <div className="bg-white w-[40vw] p-[16px] rounded-[15px]">
              <p className="text-[20px] text-custom-darkGray font-bold">
                KYC Distribution
              </p>

              <div className="flex flex-row justify-between mt-[8px]">
                <div>
                  <p>Level 0</p>
                  <p className="text-[40px] font-bold text-custom-primary">
                    500
                  </p>
                </div>

                <div className="border-l-[1px] pl-[16px]">
                  <p>Level 1</p>
                  <p className="text-[40px] font-bold text-custom-primary">
                    7034
                  </p>
                </div>

                <div className="border-l-[1px] pl-[16px]">
                  <p>Level 2</p>
                  <p className="text-[40px] font-bold text-custom-primary">
                    2300
                  </p>
                </div>

                <div className="border-l-[1px] pl-[16px]">
                  <p>Level 3</p>
                  <p className="text-[40px] font-bold text-custom-primary">
                    150
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center mt-[16px]">
                <div className="flex flex-row">
                  <p className="text-custom-darkGray mr-[16px] font-semibold">
                    Pending Verification
                  </p>
                  <p className="text-custom-primary font-bold">705</p>
                </div>

                <div className="border-[1px] border-[#ffd60a] px-[18px] py-[10px] rounded-[10px] ml-[24px]">
                  <p className="text-[#ffd60a] font-bold">Resolve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-[-35vh] p-[16px] justify-between w-[100%]">
        <div className="bg-white p-[16px] w-[44vw] rounded-[20px] mt-[16px] flex flex-row">
          <div>
            <div>
              <p className="text-[20px] font-bold text-custom-darkGray">
                Transaction Volume Insight
              </p>
              <p className="text-[14px] mt-[16px]">
                Transaction Volume:{" "}
                <span className="text-custom-primary font-bold">
                  NGN 10,821,000
                </span>
              </p>
              <p className="text-[14px] mt-[8px]">
                Transaction Count:
                <span className="text-custom-primary font-bold"> 2,378</span>
              </p>
              <div className="flex flex-row mt-[16px]">
                <div className="mr-[16px]">
                  <div className="flex flex-row items-center mt-[16px]">
                    <div className="w-[10px] mr-[8px] h-[10px] bg-red-400 rounded-full"></div>
                    <p className="text-[10px] font-bold">
                      Cash requests/provision
                    </p>
                  </div>
                  <div className="flex flex-row items-center mt-[16px]">
                    <div className="w-[10px] mr-[8px] h-[10px] bg-red-400 rounded-full"></div>
                    <p className="text-[10px] font-bold">Transfer-Zojapay</p>
                  </div>
                  <div className="flex flex-row items-center mt-[16px]">
                    <div className="w-[10px] mr-[8px] h-[10px] bg-red-400 rounded-full"></div>
                    <p className="text-[10px] font-bold">
                      Airtime & Data Bills
                    </p>
                  </div>
                  <div className="flex flex-row items-center mt-[16px]">
                    <div className="w-[10px] mr-[8px] h-[10px] bg-red-400 rounded-full"></div>
                    <p className="text-[10px] font-bold">Electricity</p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row items-center mt-[16px]">
                    <div className="w-[10px] mr-[8px] h-[10px] bg-red-400 rounded-full"></div>
                    <p className="text-[10px] font-bold">
                      Transfer-other banks
                    </p>
                  </div>
                  <div className="flex flex-row items-center mt-[16px]">
                    <div className="w-[10px] mr-[8px] h-[10px] bg-red-400 rounded-full"></div>
                    <p className="text-[10px] font-bold">
                      Other bills (Cable, betting, e.t.c)
                    </p>
                  </div>
                  <div className="flex flex-row items-center mt-[16px]">
                    <div className="w-[10px] mr-[8px] h-[10px] bg-red-400 rounded-full"></div>
                    <p className="text-[10px] font-bold">Contactless Payment</p>
                  </div>
                </div>
              </div>

              <div className="w-[100px] mt-[32px] bg-custom-primary py-[4px] px-[16px] rounded-[10px]">
                <p className="text-[2.5vw] lg:text-[14px] text-white">
                  See More
                </p>
              </div>
            </div>
          </div>

          <div className="w-[250px] h-[250px] ml-[4px] mt-[32px] flex flex-col items-center justify-center">
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

        <div className="bg-white w-[37vw] p-[16px] rounded-[20px] mt-[16px]">
          <div className="flex flex-row justify-between border-b pb-[4px]">
            <div>
              <p className="text-[20px] font-bold text-custom-darkGray">
                Customer Growth Insight
              </p>
            </div>

            <div className="flex flex-row">
              <p className="text-custom-primary mr-[8px] font-bold">
                Filter Options
              </p>
              <p>Icon</p>
            </div>
          </div>

          <div className="flex flex-row justify-between mt-[8px]">
            <div>
              <p className="text-[12px] font-semibold">Total Customer</p>
              <p className="text-[30px] my-[-6px] font-bold text-custom-primary">
                5234
              </p>
              <p className="text-[14px]">3% growth in the past year</p>
            </div>

            <div>
              <p className="text-[12px] font-semibold">New Customers</p>
              <p className="text-[30px] my-[-6px] font-bold text-custom-primary">
                2164
              </p>
            </div>
          </div>

          <div className="w-[100%] mt-[px] lg:h-[200px] flex flex-col items-center">
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
      </div>

      {/* <div className="lg:w-[60vw]">
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
      </div> */}

      {/* <div className="lg:ml-[61vw] mt-[16px] overflow-y-scroll pb-[100px] w-[40vw] mr-[16px] lg:w-[22vw] hidden lg:flex flex-col fixed h-[100vh]">
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
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
