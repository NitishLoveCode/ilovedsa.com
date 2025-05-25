import { Fragment } from "react";
import Step from "./Step";
import { Box } from "@mui/material";

export default function SnakeStepper() {
  
  const data: number[][] = [
    [1, 2, 3, 4, 5, 6],
    [12, 11, 10, 9, 8, 7],
    [13, 14, 15, 16, 17, 18],
    [24, 23, 22, 21, 20, 19],
    [25, 26, 27, 28, 29, 30],
  ];

  return (
    <Fragment>
      <Box className="flex m-5">
        <Box className="flex flex-col py-30 gap-26 items-center w-fit">
          {data.map((row, rowIndex) => (
            <Box key={rowIndex} className="flex gap-[5vw]">
              {row.map((step, stepIndex) => (
                <Step
                  key={`${rowIndex}-${stepIndex}`}
                  element={step}
                  rowLength={row.length}
                  isLastElement={stepIndex === row.length - 1}
                  isVeryLastElement={stepIndex}
                  isFirstElement={stepIndex === 0}
                  isEvenRow={rowIndex % 2 === 0}
                  isLastRow={rowIndex === data.length - 1}
                  activeNode={2}
                />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Fragment>
  );
}
