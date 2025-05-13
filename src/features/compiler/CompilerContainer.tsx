import { Fragment, useEffect, useState } from "react";
import CodeEditor from "./component/CodeEditor";
import Output from "./component/Output";
import { Box} from "@mui/material";
import { runCodeInBrowser } from "../../services/comilerServices/JavaScriptCompilerServices";
import Step from "../../pages/skakeStepper/Step";
import { useLocation } from "react-router-dom";
import { globelStepper, IglobelStepper} from "../../constants/GlobleStepper";
import {updateCurrentProblomsSolvingStatus} from "../../store/features/CurrentProblomsSolvingStatus.ts/currentProblomsSolvingStatus";
import {useAppDispatch} from "../../store/store";

function CompilerContainer() {
  const [code, setCode] = useState<string>("");
  const location   = useLocation();

  const [userLastProbloms, SetUserLastProbloms] = useState<number>(0);

  // Current Master step.
  const {activeNodePont} = location.state || {}; 


  const dispatch = useAppDispatch();
  

  const runCode = (testCase = "") => {
    // Making blank.
    document.getElementById("output")!.innerText = "";

    const Executedoutput = runCodeInBrowser(code + testCase);

    setTimeout(() =>{
      document.getElementById("output")!.innerText += Executedoutput + "\n";
    },100)

    return Executedoutput;

  };


  const row: number[] = [1,2,3,4,5,6,7,8,9,10]

  const costomStyle = {
    middleLine: "9",
  }



  // Finding Probloms set for step.
  const problomsFinder = () =>{
    const findSet = globelStepper.find((element: IglobelStepper) => element.step === activeNodePont)

    // HEARD CODE QUESTION NEED TO MAKE DYNAMIC
    const currentProbloms = findSet?.stepProbloms[userLastProbloms];
    dispatch(updateCurrentProblomsSolvingStatus(currentProbloms!));
    setCode(currentProbloms?.starterCode!);
  }
  

  useEffect(()=>{
    problomsFinder()
  },[])
  
  

  return (
    <Fragment>  
      <Box className="m-5 mt-10">
        <Box className="flex w-[70vw] justify-between">
          {row.map((step, stepIndex) => (
            <Step
              key = {`${stepIndex}-${stepIndex}`}
              element = {step}
              rowLength = {row.length}
              isLastElement = {stepIndex === row.length - 1}
              isVeryLastElement = {stepIndex}
              isFirstElement = {stepIndex === 0}
              isEvenRow = {0 % 2 === 0}
              isLastRow = {row.length -1 === stepIndex}
              activeNode = {0}
              costomStyle = {costomStyle}
            />
          ))}
        </Box>
      </Box>

      <Box className="flex m-2 justify-between">
        <CodeEditor code = {code} setCode = {setCode} />
        <Output onClick = {runCode} />
      </Box>
    </Fragment>
  );
}

export default CompilerContainer;