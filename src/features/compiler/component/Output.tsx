import { Box, Typography } from "@mui/material";
import { BasicButton } from "../../../components/BasicButton";
import {useAppSelector} from "../../../store/store";

function Output({ onClick }: { onClick: (testCase: string) => void }) {
  const {currentProblomsSolvingStatus} = useAppSelector(state => state);

  const invokeAllTestCase = () =>{
    currentProblomsSolvingStatus.testCases.forEach((testCase) =>{
      // invoking function.
      try{
        onClick(testCase)
      }catch(error){
        console.log("Error is", error)
      }
    })
  }

  return (
    <Box className="mt-7.5">
      <Box className="mb-1">
        <BasicButton
          onClick={() => invokeAllTestCase()}
          color="success"
          variant="outlined"
          text="Run code"
        />
      </Box>
      <Box className="w-[30vw] h-[70vh] overflow-y-auto custom-scrollbar border border-gray-500 bg-[#1e1e1e] rounded-b-2xl">
        <Box className="p-1 overflow-hidden">
          <Typography color="white" variant="subtitle1">
            Output:
          </Typography>
          <Box id="output" className="text-white space-y-1" />
        </Box>
      </Box>
    </Box>
  );
}

export default Output;
