import { Box, Typography } from "@mui/material";
import winnerFlag from "../../assets/icons/winnerFlag.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { IDsaSteps } from "../../modal/dashboard/DashboardModal";

type IcostomStyle = {
  middleLine: string;
}

interface StepProps {
  stackId?: number;
  element: number;
  stepPosition?: number;
  isLastElement: boolean;
  isFirstElement: boolean;
  isEvenRow: boolean;
  isLastRow: boolean;
  rowLength: number ;
  isVeryLastElement: number;
  activeNode: number;
  costomStyle?: IcostomStyle;
  stepName?: IDsaSteps;
  onClick?: (step: number) => void;
}

function Step({ 
  stackId,
  element, 
  stepPosition,
  isLastElement, 
  isFirstElement, 
  isEvenRow, 
  isLastRow,
  rowLength,
  activeNode,
  isVeryLastElement,
  costomStyle,
  stepName,
  onClick
}: StepProps) {
  const navigation = useNavigate();
  const location = useLocation();

  /**
   * Onclick navigation sending has 2 component
   * stackId: is for wich is current stack that is selected by user.
   * activeNodePont: inside stackId in which step user choosed.
   */

  console.log('i am active node', {activeNode, element})


  const handleNodeClick = ({element}: {element: number}) =>{
    switch(location.pathname){
      case "/dashboard":
        navigation("/code-editor", {state:{activeNodePont: element}})
        break;
      default:
        break;
    }
  }

  return (
    <Box onClick={() => onClick && onClick(element)} className={`${isLastElement && "k"} relative`}>
      <Box className={`absolute h-[70px] w-[100px] -top-[80px] -left-2.5 rounded-md bg-transparent border ${activeNode >= element ? "border-green-500" : "border-purple-400"}`} >
        <Box className = "relative">
          <Box className = {`absolute w-[1px] h-[25px] ${activeNode >= element ? "bg-green-500" : "bg-purple-400"} top-[68px] right-[55px] overflow-hidden -z-10`}></Box>
        </Box>
        <Typography variant="caption" component={"p"} style={{lineHeight: "10px", padding: "3px", fontSize: "11px"}}><span className="font-mono">{stepName?.step_name ?? "Step name"}</span></Typography>
        {
          stepName?.ask_by && 
        <Typography variant="caption" component={"p"} style={{lineHeight: "10px", padding: "3px", fontSize: "11px"}}>By: <span className="italic">{stepName?.ask_by ?? "Step name"}</span></Typography>
        }
        {
          stepName?.ask_chance &&
        <Typography variant="caption" component={"p"} style={{lineHeight: "10px", padding: "3px", fontSize: "11px"}}>ImpRate: <span className="italic">{stepName?.ask_chance ?? "Step name"}</span></Typography>
        }
      </Box>
      {/* Circle */}
      <Box onClick={()=> handleNodeClick({element})} className={`${activeNode >= element ? "bg-green-500" : "bg-amber-500"} w-15 h-15 rounded-full flex items-center justify-center cursor-pointer`}>
        <h1 className="z-20 text-3xl text-white">{stepPosition ?? element}</h1>
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