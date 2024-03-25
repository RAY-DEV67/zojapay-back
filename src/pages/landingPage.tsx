import Footer from "../components/footer";
import Download from "../components/download";
import FAQ from "../components/FAQ";
import Waitlist from "../components/waitlist";
import { useState } from "react";
import Hero from "../components/hero";
import Solutions from "../components/solutions";
import Features from "../components/features";

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
      <Hero onOpen={handleOpenWaitlist} />

      <Solutions onOpen={handleOpenWaitlist} />
      <Features onOpen={handleOpenWaitlist} />
      <FAQ />
      <Download />

      <Footer />

      {showWaitlist && <Waitlist onClose={handleCloseWaitlist} />}
    </div>
  );
}

export default LandingPage;
