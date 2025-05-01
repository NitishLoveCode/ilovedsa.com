import { Box, Typography } from "@mui/material";
import React from "react";
import { BasicButton } from "../../../components/BasicButton";

function Output() {
  return (
    <Box className="w-[30vw] border border-gray-500 mt-16 h-[70vh] bg-[#1e1e1e] rounded-b-2xl overflow-hidden">
      <Box className= "p-1">
        <Typography color="white" variant="subtitle1">
          Output: 
        </Typography>
      </Box>
    </Box>
  );
}

export default Output;
