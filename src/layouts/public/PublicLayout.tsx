import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import RightSideBar from "./components/RightSideBar";
import { Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import { AppContextType, useAppContext } from "../../utils/AppContext";
import NightlightIcon from "@mui/icons-material/Nightlight";



const ModeChanger = ({themeMode, setThemeMode}: AppContextType) => {

  return (
    <Box className="absolute right-0 cursor-pointer">
      {themeMode === "light" ? (
        <Box onClick={() => setThemeMode("dark")}>
          <LightModeIcon />
        </Box>
      ) : (
        <Box onClick={() => setThemeMode("light")}>
          <NightlightIcon />
        </Box>
      )}
    </Box>
  );
};

function PublicLayout() {
  const { themeMode, setThemeMode } = useAppContext();

  const [moveLeft, setMoveLeft] = useState<boolean>(false);
  const [loveMove, setLoveMove] = useState<boolean>(false);

  useEffect(() => {
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


        {/* -----------Light and Dard mode ----------- */}
        <ModeChanger setThemeMode={setThemeMode} themeMode={themeMode}/>
      </Box>
    </Fragment>
  );
}

export default PublicLayout;
