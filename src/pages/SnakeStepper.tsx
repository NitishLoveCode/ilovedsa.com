import { Fragment } from "react";
import Step from "./skakeStepper/Step";

export default function SnakeStepper() {
  const data: number[][] = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
  ];

  return (
    <Fragment>
      <div className="flex flex-col gap-16 items-center">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-[5vw]">
            {row.map((step, stepIndex) => (
              <Step
                key={`${rowIndex}-${stepIndex}`}
                element={step}
                rowLength = {row.length}
                isLastElement={stepIndex === row.length - 1}
                isVeryLastElement={stepIndex}
                isFirstElement={stepIndex === 0}
                isEvenRow={rowIndex % 2 === 0}
                isLastRow={rowIndex === data.length - 1}
              />
            ))}
          </div>
        ))}
      </div>
    </Fragment>
  );
}
