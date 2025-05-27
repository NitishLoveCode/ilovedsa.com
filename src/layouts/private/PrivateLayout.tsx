import { Fragment, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LeftMenu from "./components/LeftMenu";
import RightSideBar from "./components/RightSideBar";
import { Box } from "@mui/material";
import Header from "./components/Header";
import { useAppSelector } from "../../store/store";
import { HOME } from "../../navigation/CONSTANTS";




function PrivateLayout() {
  const [moveLeft, setMoveLeft] = useState<boolean>(false);
  const [loveMove, setLoveMove] = useState<boolean>(false);

  const navigate = useNavigate();
  const userData = useAppSelector(state => state.authUser)

  useEffect(() => {

    if(!userData?.id){
      navigate(HOME, { replace: true });
    }

    const timer = setTimeout(() => {
      setMoveLeft(true);
    }, 3000);

    const loveTimer = setTimeout(() => {
      setLoveMove(true);
    }, 3800);

    return () => {
      clearTimeout(timer);
      clearTimeout(loveTimer);
    };
  }, []);

  return (
    <Fragment>
      <Box className="flex relative">
        <Box className="w-[25vw]">
          <Header loveMove={loveMove} moveLeft={moveLeft} />
          <LeftMenu loveMove={loveMove} />
        </Box>

        <RightSideBar loveMove={loveMove}>
          <Outlet />
        </RightSideBar>

      </Box>
    </Fragment>
  );
}

export default PrivateLayout;
