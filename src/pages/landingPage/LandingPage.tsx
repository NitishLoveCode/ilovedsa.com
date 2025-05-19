import { Fragment } from "react";
import Headers from "./components/Headers";
import HeroSection from "./components/HeroSection";
import HighLIghtAndRightSideCard from "./components/HighLIghtAndRightSideCard";
// import TagCloud from "./components/TagCloud";



function LandingPage() {
  return (
    <Fragment>
      <div className="w-screen h-screen border-6 border-color-primary overflow-hidden">

        {/* -------- Header ------ */}
        <Headers/>

        {/* -- hero section */}
        <HeroSection/>

        {/* // Highlite and right site card */}
        <HighLIghtAndRightSideCard/>

        {/* --------------- Tag cloud ----------- */}
        {/* <TagCloud/> */}
      </div>
    </Fragment>
  );
}

export default LandingPage;
