import { Fragment, useEffect, useState } from "react";
import CodeEditor from "./component/CodeEditor";
import Output from "./component/Output";
import { Box} from "@mui/material";
import { CODE_SNIPPETS } from "../../constants/CodeEditor";
import { runCodeInBrowser } from "../../services/comilerServices/JavaScriptCompilerServices";
import Step from "../../pages/skakeStepper/Step";
import { useLocation } from "react-router-dom";
import { globelStepper, IglobelStepper, IJS_DSA_QUESTIONS } from "../../constants/GlobleStepper";
import {updateCurrentProblomsSolvingStatus} from "../../store/features/CurrentProblomsSolvingStatus.ts/currentProblomsSolvingStatus";
import {useAppDispatch} from "../../store/store";
import { IProbloms } from "../../modal/compiler";

function CompilerContainer() {
  const [code, setCode] = useState<string>(CODE_SNIPPETS["javascript"]);
  const [problomsSet, setProblomsSet] = useState<string>("")
  const location   = useLocation();

  // Current Master step.
  const {solvingStep} = location.state || {}; 

  console.log("here is step",solvingStep)

  const dispatch = useAppDispatch();
  
  

  const runCode = (testCase = "") => {


    // Making blank.
    document.getElementById("output")!.innerText = "";
    console.log(code+testCase)

    setTimeout(() =>{
      runCodeInBrowser(code + testCase, (output) => {
        document.getElementById("output")!.innerText += output + "\n";
      });
    },100)

  };


  const row: number[] = [1,2,3,4,5,6,7,8,9,10]

  const costomStyle = {
    middleLine: "9",

  }



  // Finding Probloms set for step.
  const problomsFinder = () =>{
    const findSet = globelStepper.find((element: IglobelStepper) => element.step === solvingStep as number)

    // HEARD CODE QUESTION NEED TO MAKE DYNAMIC
    const currentProbloms = findSet?.stepProbloms[1];
    dispatch(updateCurrentProblomsSolvingStatus(currentProbloms!))
    setProblomsSet(currentProbloms?.starterCode!)
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
              key={`${stepIndex}-${stepIndex}`}
              element={step}
              rowLength={row.length}
              isLastElement={stepIndex === row.length - 1}
              isVeryLastElement={stepIndex}
              isFirstElement={stepIndex === 0}
              isEvenRow={0 % 2 === 0}
              isLastRow={row.length -1 === stepIndex}
              activeNode={0}
              costomStyle = {costomStyle}
            />
          ))}
        </Box>
      </Box>

      <Box className="flex m-2 justify-between">
        <CodeEditor code={problomsSet} setCode={setCode} />
        <Output onClick={runCode} />
      </Box>
    </Fragment>
  );
}

export default CompilerContainer;
