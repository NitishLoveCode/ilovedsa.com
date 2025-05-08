import { Box } from "@mui/material";
import { Fragment, ReactNode } from "react";

function RightSideBar({loveMove, children}: {loveMove: boolean, children: ReactNode}) {
  return (
    <Fragment>
      {loveMove && (
        <Box className="w-[75vw] h-screen overflow-y-auto">
          {children}
        </Box>
      )}
    </Fragment>
  );
}

export default RightSideBar;
