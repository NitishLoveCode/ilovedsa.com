import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import Headers from "./components/Headers";
import HeroSection from "./components/HeroSection";
import HighLIghtAndRightSideCard from "./components/HighLIghtAndRightSideCard";
import TagCloud from "../movingBall/TagCloud";
import { Box } from "@mui/material";
import { AuthDialog } from "../auth/AuthDialog";
import { useAppSelector } from "../../store/store";
import { Navigate, replace, useNavigate } from "react-router-dom";
import { DASHBOARD } from "../../navigation/CONSTANTS";



function LandingPage() {
  const [open, setOpen] = useState(false);
  const userData = useAppSelector((state) => state.authUser)
  const navigate = useNavigate();


  useEffect(() =>{
    if(userData?.id){
      navigate(DASHBOARD, { replace: true });
    }
  },[])

  return (
    <Fragment>
      <div className="w-screen h-screen  overflow-x-hidden">

        {/* -------- Header ------ */}
        <Headers open ={open} setOpen={setOpen}/>

        {/* -- hero section */}
        <HeroSection open ={open} setOpen={setOpen}/>

        {/* Right site card */}
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
