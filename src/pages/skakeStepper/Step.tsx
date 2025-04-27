import winnerFlag from "../../assets/icons/winnerFlag.webp";

interface StepProps {
  element: number;
  isLastElement: boolean;
  isFirstElement: boolean;
  isEvenRow: boolean;
  isLastRow: boolean;
  rowLength: number ;
  isVeryLastElement: number;
  activeNode: number;
}

function Step({ 
  element, 
  isLastElement, 
  isFirstElement, 
  isEvenRow, 
  isLastRow,
  rowLength,
  activeNode,
  isVeryLastElement
}: StepProps) {

    console.log(rowLength, isVeryLastElement+2)
  return (
    <div className={`${isLastElement && "k"} relative`}>
      {/* Circle */}
      <div className={`${activeNode >= element ? "bg-green-500" : "bg-amber-500"} w-15 h-15 rounded-full flex items-center justify-center`}>
        <h1 className="z-20 text-3xl text-white">{element}</h1>
        {
          activeNode + 1 === element && <div className="absolute z-50 h-30 text-2xl top-0 animate-bounce">❤️</div>
        }
        {
          isLastRow && isLastElement && <img className="absolute -top-8 left-3" src={winnerFlag} alt="winner Flag" />
        }
      </div>

      {/* Horizontal Green Line */}
      {!isLastElement && rowLength != isVeryLastElement+1 && (
      <div className={`${activeNode >= element ? "bg-green-500" : "bg-amber-500"}  rounded-full md:w-[12vw] w-[9vw] h-5 absolute top-5 left-1`}></div>
      )}

      {/* Vertical Amber Line at Row Switch */}
      {(
        (!isEvenRow && isFirstElement) || 
        (isEvenRow && isLastElement && !isLastRow)
      ) && (
        <div className={`${activeNode >= element ? "bg-green-500" : "bg-amber-500"} w-5 h-28 absolute top-5 left-5`}></div>
      )}
    </div>
  );
}

export default Step;