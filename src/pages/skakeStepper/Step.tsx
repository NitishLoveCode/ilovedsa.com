import { Box, Typography } from "@mui/material";
import winnerFlag from "../../assets/icons/winnerFlag.webp";
import { useNavigate } from "react-router-dom";

type IcostomStyle = {
  middleLine: string;
}

interface StepProps {
  element: number;
  isLastElement: boolean;
  isFirstElement: boolean;
  isEvenRow: boolean;
  isLastRow: boolean;
  rowLength: number ;
  isVeryLastElement: number;
  activeNode: number;
  costomStyle?: IcostomStyle;
  onClick?: (step: number) => void;
}

function Step({ 
  element, 
  isLastElement, 
  isFirstElement, 
  isEvenRow, 
  isLastRow,
  rowLength,
  activeNode,
  isVeryLastElement,
  costomStyle,
  onClick
}: StepProps) {
  const navigation = useNavigate();

  return (
    <Box onClick={() => onClick && onClick(element)} className={`${isLastElement && "k"} relative`}>
      <Box className={`absolute h-[60px] w-[85px] -top-[70px] -left-2.5 rounded-md bg-transparent border ${activeNode >= element ? "border-green-500" : "border-purple-400"}`} >
        <Box className = "relative">
          <Box className = {`absolute w-[1px] h-[30px] ${activeNode >= element ? "bg-green-500" : "bg-purple-400"} top-[58.5px] right-[36px] overflow-hidden -z-10`}></Box>
        </Box>
        <Typography variant="caption" component={"p"} style={{lineHeight: "10px", padding: "3px", fontSize: "11px"}}>Binery search hell hdfas mango hella afda hada adfe ssafdr</Typography>
      </Box>
      {/* Circle */}
      <Box onClick={()=> navigation("/code-editor", {state:{activeNodePont: element}})} className={`${activeNode >= element ? "bg-green-500" : "bg-amber-500"} w-15 h-15 rounded-full flex items-center justify-center cursor-pointer`}>
        <h1 className="z-20 text-3xl text-white">{element}</h1>
        {
          activeNode + 1 === element && <Box className="absolute z-50 h-30 text-2xl top-0 animate-bounce">❤️</Box>
        }
        {
          isLastRow && isLastElement && <img className="absolute -top-8 left-3" src={winnerFlag} alt="winner Flag" />
        }
      </Box>

      {/* Horizontal Green Line */}
      {!isLastElement && rowLength != isVeryLastElement+1 && (
      <Box className={`${activeNode >= element ? "bg-green-500" : "bg-amber-500"}  rounded-full md:w-[${costomStyle?.middleLine ? costomStyle?.middleLine+"vw" : "10vw"}] w-[15vw] xl:w-[12vw] h-5 absolute top-5 left-1`}></Box>
      )}

      {/* Vertical Amber Line at Row Switch */}
      {(
        (!isEvenRow && isFirstElement) || 
        (isEvenRow && isLastElement && !isLastRow)
      ) && (
        <Box className={`${activeNode >= element ? "bg-green-500" : "bg-amber-500"} w-5 h-39 absolute top-5 left-5`}></Box>
      )}
    </Box>
  );
}

export default Step;