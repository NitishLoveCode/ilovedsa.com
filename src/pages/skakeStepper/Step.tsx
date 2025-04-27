import { Fragment } from "react";

interface StepProps {
  element: number;
  isLastElement: boolean;
  isFirstElement: boolean;
  isEvenRow: boolean;
  isLastRow: boolean;
  rowLength: number ;
  isVeryLastElement: number
}

function Step({ 
  element, 
  isLastElement, 
  isFirstElement, 
  isEvenRow, 
  isLastRow,
  rowLength,
  isVeryLastElement
}: StepProps) {

    console.log(rowLength, isVeryLastElement+2)
  return (
    <div className="relative">
      {/* Circle */}
      <div className="bg-amber-500 w-15 h-15 rounded-full flex items-center justify-center">
        <h1 className="z-20 text-3xl text-white">{element}</h1>
      </div>

      {/* Horizontal Green Line */}
      {!isLastElement && rowLength != isVeryLastElement+2 && (
        <div className="bg-amber-500 md:w-[13vw] w-[10vw] h-5 absolute top-5 left-1"></div>
      )}

      {/* Last Amber Line for Row */}
      {isLastElement && (
        <div className="bg-amber-500 w-[20vw] h-5 absolute top-5 right-2"></div>
      )}

      {/* Vertical Amber Line at Row Switch */}
      {(
        (!isEvenRow && isFirstElement) || 
        (isEvenRow && isLastElement && !isLastRow)
      ) && (
        <div className="bg-amber-500 w-5 h-28 absolute top-5 left-5"></div>
      )}
    </div>
  );
}

export default Step;