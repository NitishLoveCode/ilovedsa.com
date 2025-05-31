import ReactMarkdown from "react-markdown";
import { Fragment } from "react";
import { useAppContext } from "../../../utils/AppContext";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/store";
import { useLocation } from "react-router-dom";
import { CODE_EDITOR, DASHBOARD } from "../../../navigation/CONSTANTS";

function LeftMenu({ loveMove }: { loveMove: boolean }) {
  const location = useLocation();
  const { themeMode } = useAppContext();
  const { currentProblomsSolvingStatus } = useAppSelector(state => state);


  // Question info.
  const questionInfoCard = () => {
    return (
      <Box>
        <Typography style={{marginBottom: "20px"}} variant="h5" component="h1">
          {currentProblomsSolvingStatus.title}
        </Typography>

      <Box className=" prose prose-sm max-w-none dark:prose-invert">
        <ReactMarkdown>
          {currentProblomsSolvingStatus.description}
        </ReactMarkdown>
      </Box>
    </Box>
    )
  } 

  // Render items via location.
  const locationInfo = () =>{
    switch (location.pathname){
      case DASHBOARD:
        return "Hello i am Dashboard.";
      case CODE_EDITOR:
        return questionInfoCard();
    }
  }

  console.log("oooooooooo", location.pathname)



  return (
    <Fragment>
      {loveMove && (
        <Box
          className={`${
            themeMode === "dark" ? "border-r-[0.5px] border-gray-500" : ""
          } overflow-y-auto h-[90vh] p-3 space-y-2`}
        >
          {
            locationInfo()
          }
         
        </Box>
      )}
    </Fragment>
  );
}

export default LeftMenu;
