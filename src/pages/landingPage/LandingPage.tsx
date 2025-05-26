import { Fragment, useState } from "react";
import Headers from "./components/Headers";
import HeroSection from "./components/HeroSection";
import HighLIghtAndRightSideCard from "./components/HighLIghtAndRightSideCard";
import TagCloud from "../movingBall/TagCloud";
import { Box } from "@mui/material";
import { AuthDialog } from "../auth/AuthDialog";



function LandingPage() {
    const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div className="w-screen h-screen  overflow-x-hidden">

        {/* -------- Header ------ */}
        <Headers/>

        {/* -- hero section */}
        <HeroSection open ={open} setOpen={setOpen}/>

        {/* // Highlite and right site card */}
        <HighLIghtAndRightSideCard/>

        {/* --------------- Tag cloud ----------- */}
        <Box className = "flex items-center justify-center mt-20">
          <TagCloud/>
        </Box>

        <AuthDialog open ={open} setOpen={setOpen}/>
      </div>
    </Fragment>
  );
}

export default LandingPage;
