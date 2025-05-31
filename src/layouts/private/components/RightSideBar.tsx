import { Box, Button, Typography } from "@mui/material";
import { Fragment, ReactNode, useState } from "react";
import { AppContextType, useAppContext } from "../../../utils/AppContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { primaryColor} from "../../../constants/style";
import CustomizedDialogs from "../../../components/CustomizedDialogs";




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
    const [switchSack, setSwitchSack] = useState(false);
    

  return (
    <Fragment>
      <CustomizedDialogs switchSack = {switchSack} setSwitchSack = {setSwitchSack}/>
      {loveMove && (
        <Box className="w-[75vw] h-screen overflow-y-auto">

          <Box className="pl-3 h-[69.5px] border-b-[0.5px] border-r-[0.5px] border-gray-500 border-0 w-full items-center justify-between flex pr-3">
            <Box className = "flex flex-col">
              <Box>
                <Typography variant="caption" component={"p"}>Dsa for services base</Typography>
              </Box>
              <Box>
                <Button
                  onClick={() => setSwitchSack(!switchSack)}
                  sx={{ 
                  height: 30, 
                  padding: '2px 10px', 
                  minWidth: 'auto',
                  color: 'gray',
                  borderColor: 'gray',
                   '&:hover': {
                    color: primaryColor,
                    borderColor: primaryColor,
                    backgroundColor: 'transparent'
                  }
                  }} variant="outlined">Switch</Button>
              </Box>
            </Box>
            
            <Box>
                <Box className = "flex items-center justify-center gap-5">
                    <ModeChanger setThemeMode={setThemeMode} themeMode={themeMode}/>
                    {/* <AvatarView /> */}
                </Box>
            </Box>
          </Box>


          {children}
        </Box>
      )}
    </Fragment>
  );
}

export default RightSideBar;
