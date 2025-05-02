import { Fragment } from "react";
import { useAppContext } from "../../../utils/AppContext";
import { Box, Typography } from "@mui/material";

function LeftMenu({loveMove}: {loveMove: boolean}) {
  const {themeMode} = useAppContext();
  return (
    <Fragment>
      {/* ---------- menue bar ----------*/}

      {loveMove && (
        <Box className={`${themeMode === "dark" ? "border-r-[0.5px] border-gray-500" : ""} overflow-y-auto h-[90vh]`}>
          <Typography>Feature.</Typography>
          <Typography>1. You Have to Add Life On Each Attapt.</Typography>
        </Box>
      )}
    </Fragment>
  );
}

export default LeftMenu;
