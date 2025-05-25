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
import { IProbloms } from "../../modal/compiler";

function CompilerContainer() {
  const [code, setCode] = useState<string>("");
  const location   = useLocation();
  const [problomsSet, setProblomsSet] = useState<any>();
  const [stepTrack, setStepTrack] = useState<number>(0);
  // Current Master step.
  const {activeNodePont} = location.state || {}; 
  const dispatch = useAppDispatch();

  

  const runCode = () => {
    // Making blank.
    document.getElementById("output")!.innerText = "";
    const Executedoutput = runCodeInBrowser(code);
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
    setProblomsSet(findSet);
    // This will only configure only for the frist time.
    const currentProbloms = findSet?.stepProbloms[0]; // Probloms starting from no 1.
    dispatch(updateCurrentProblomsSolvingStatus(currentProbloms!));
    setCode(currentProbloms?.starterCode!);
  };

  const switchQuestion = (stepSwitch: number) =>{
    setStepTrack(stepSwitch-1);
    const currentProbloms:IProbloms = problomsSet?.stepProbloms[stepSwitch-1];
    dispatch(updateCurrentProblomsSolvingStatus(currentProbloms!));
    setCode(currentProbloms?.starterCode!);
  }
  

  useEffect(()=>{
    problomsFinder();
  },[]);
  
  

  return (
    <Fragment>  
      <Box className="m-5 mt-20">
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
              activeNode = {stepTrack}
              costomStyle = {costomStyle}
              onClick={switchQuestion}
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