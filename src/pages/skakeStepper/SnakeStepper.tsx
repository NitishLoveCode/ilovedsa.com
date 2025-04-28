import { Fragment} from "react";
import Step from "./Step";

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
      <div className="flex flex-col py-6 gap-16 items-center w-fit overflow-hidden">
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
                activeNode = {3}
              />
            ))}
          </div>
        ))}
      </div>
    </Fragment>
  );
}
