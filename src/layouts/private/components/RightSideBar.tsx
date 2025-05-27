import { Box } from "@mui/material";
import { Fragment, ReactNode } from "react";
import AvatarView from "../../../components/AvatarView";
import { AppContextType, useAppContext } from "../../../utils/AppContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";




const ModeChanger = ({themeMode, setThemeMode}: AppContextType) => {

  return (
    <Box className="cursor-pointer bg-gray-600 flex items-center justify-center w-6 h-6 rounded-full">
      {themeMode === "light" ? (
        <Box onClick={() => setThemeMode("dark")}>
          <LightModeIcon style={{color:"white", fontSize: 16}}/>
        </Box>
      ) : (
        <Box onClick={() => setThemeMode("light")}>
          <NightlightIcon style={{color:"white", fontSize: 18}}/>
        </Box>
      )}
    </Box>
  );
};


function RightSideBar({loveMove,children}: {loveMove: boolean; children: ReactNode;}) {
    const { themeMode, setThemeMode } = useAppContext();

  return (
    <Fragment>
      {loveMove && (
        <Box className="w-[75vw] h-screen overflow-y-auto">


          <Box className="h-17 w-full justify-end flex pr-3">
            <Box className = "flex items-center justify-center gap-5">
                <ModeChanger setThemeMode={setThemeMode} themeMode={themeMode}/>
                {/* <AvatarView /> */}
            </Box>
          </Box>


          {children}
        </Box>
      )}
    </Fragment>
  );
}

export default RightSideBar;
