import { Fragment } from "react";
import Headers from "./components/Headers";
import HeroSection from "./components/HeroSection";


function LandingPage() {
  return (
    <Fragment>
      <div className="w-screen h-screen border-6 border-color-primary">

        {/* -------- Header ------ */}
        <Headers/>

        {/* -- hero section */}
        <HeroSection/>

        <div className="flex justify-between relative">
          <div className="h-44 w-72 border-color-primary border-2 rounded-tr-[80px] rounded-br-[80px] absolute -left-2">
              <div>
                <span>Highlight</span>
              </div>
          </div>

          <div className="absolute right-0">
            ell
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default LandingPage;
