import { Fragment } from "react";
import Step from "./Step";
import { Box } from "@mui/material";
import { useAppSelector } from "../../store/store";




export default function SnakeStepper() {
  const storedDsaSteps = useAppSelector((state) => state.techStackStepSlice)


  console.log("i am data",storedDsaSteps)


  return (
    <Fragment>
      <Box className="flex m-5">
        <Box className="flex flex-col py-30 gap-26 w-fit">
          {storedDsaSteps[0].techStackData.responseData?.map((row, rowIndex) => (
            <Box key={rowIndex} className="flex gap-[5vw]">
              {row.map((step, stepIndex) => (
                <Step
                  key={`${rowIndex}-${stepIndex}`}
                  stackId={storedDsaSteps[0].stackId}
                  element={step[0].step}
                  rowLength={row.length}
                  isLastElement={stepIndex === row.length - 1}
                  isVeryLastElement={stepIndex}
                  isFirstElement={stepIndex === 0}
                  isEvenRow={rowIndex % 2 === 0}
                  isLastRow={rowIndex === storedDsaSteps[0].techStackData.responseData.length - 1}
                  activeNode={storedDsaSteps[0].techStackData.activityLog.dsa_steps - 1}
                  stepName = {step[0]}
                />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Fragment>
  );
}
