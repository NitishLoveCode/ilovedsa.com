import ReactMarkdown from "react-markdown";
import { Fragment } from "react";
import { useAppContext } from "../../../utils/AppContext";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/store";

function LeftMenu({ loveMove }: { loveMove: boolean }) {
  const { themeMode } = useAppContext();
  const { currentProblomsSolvingStatus } = useAppSelector(state => state);

  return (
    <Fragment>
      {loveMove && (
        <Box
          className={`${
            themeMode === "dark" ? "border-r-[0.5px] border-gray-500" : ""
          } overflow-y-auto h-[90vh] p-3 space-y-2`}
        >
          <Typography variant="h5" component="h1">
            {currentProblomsSolvingStatus.title}
          </Typography>

          <Box className="prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown>
              {currentProblomsSolvingStatus.description}
            </ReactMarkdown>
          </Box>
        </Box>
      )}
    </Fragment>
  );
}

export default LeftMenu;
