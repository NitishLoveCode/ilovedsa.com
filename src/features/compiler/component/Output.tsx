import { Box, Typography } from "@mui/material";
import { BasicButton } from "../../../components/BasicButton";
import {useAppSelector} from "../../../store/store";
import { useEffect} from "react";

function Output({ onClick }: { onClick: (testCase: string) => void }) {
  const {currentProblomsSolvingStatus} = useAppSelector(state => state);


  const invokeAllTestCase = () =>{

    currentProblomsSolvingStatus.testCases.forEach((testCase) =>{
      const outputData = onClick(testCase.input);
    })
  }


  return (
    <Box className="mt-7.5">
      <Box className="mb-1 gap-2 items-center flex">
        <BasicButton
          onClick={() => invokeAllTestCase()}
          color="success"
          variant="outlined"
          text="Run code"
        />

        <Typography>Test Case: 0/5</Typography>
        
      </Box>
      <Box className="w-[30vw] h-[70vh] overflow-y-auto custom-scrollbar border border-gray-500 bg-[#1e1e1e] rounded-b-2xl">
        <Box className="p-1 overflow-hidden">
          <Typography className="text-white" variant="subtitle1">
            Output:
          </Typography>
          <Box id="output" className="text-gray-300 space-y-1" />
        </Box>
      </Box>
    </Box>
  );
}

export default Output;