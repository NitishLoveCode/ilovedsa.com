import { Fragment } from "react";
import { useAppContext } from "../../../utils/AppContext";
import { Box, Typography } from "@mui/material";
import {useAppSelector} from "../../../store/store";

function LeftMenu({loveMove}: {loveMove: boolean}) {
  const {themeMode} = useAppContext();
  const {currentProblomsSolvingStatus} = useAppSelector(state => state);
  

  // i will change left bar for specificly dsa question solve playground side bar currently i am using this one.

  return (
    <Fragment>
      {/* ---------- menue bar ----------*/}

      {loveMove && (
        <Box className={`${themeMode === "dark" ? "border-r-[0.5px] border-gray-500" : ""} overflow-y-auto h-[90vh] p-3`}>
          <Typography variant="h5" component= "h1">{currentProblomsSolvingStatus.title}</Typography>
          <Typography>{currentProblomsSolvingStatus.description}</Typography>
          {/* <Typography>Feature.</Typography>
          <Typography>1. You Have to Add Life On Each Attapt.</Typography>
          <Typography>2. Techer can teach, they can share screen, multi code share screen, and payment, group collab.</Typography> */}
        </Box>
      )}
    </Fragment>
  );
}

export default LeftMenu;
