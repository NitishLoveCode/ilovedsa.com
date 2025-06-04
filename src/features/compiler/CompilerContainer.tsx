import { Fragment, useEffect, useState } from "react";
import CodeEditor from "./component/CodeEditor";
import Output from "./component/Output";
import { Box} from "@mui/material";
import { runCodeInBrowser } from "../../services/comilerServices/JavaScriptCompilerServices";
import Step from "../../pages/skakeStepper/Step";
import { useLocation } from "react-router-dom";
import { globelStepper, IglobelStepper} from "../../constants/GlobleStepper";
import {updateCurrentProblomsSolvingStatus} from "../../store/features/CurrentProblomsSolvingStatus/currentProblomsSolvingStatus";
import {useAppDispatch, useAppSelector} from "../../store/store";
import { IProbloms } from "../../modal/compiler";
import { StepDataFinder } from "../../services/stepFinder.Services/stepData.services";
import { stackNodeInfo } from "../../modal/stepFinder/codeFinder";




function CompilerContainer() {
  const [code, setCode] = useState<string>("");
  const [setpData, setStepData] = useState<stackNodeInfo[]>()
  const [activeProblom, setActiveProbloms] = useState<number>(0)
  const location   = useLocation();
  const dispatch = useAppDispatch();


  // Finding user selected Tech-Stack id.
  const {stackId} = useAppSelector((state) => state.techStackStepSlice[0]);




  const findingAllStepsInfo = async() =>{
    // Calling APi for get step All step Question.
    const response = await StepDataFinder.getAllStepInfoOfSelectedStackNode({stackId, stepid: location.state.activeNodePont}); // techStack id and techStack StepId.
    setStepData(response.data)

    // Finding probloms for then frist time when API get fired.
    const probloms = await StepDataFinder.getProblomsByid(response.data[0].id); // Heating API to get Probloms for the frist time.
    setActiveProbloms(0);
    dispatch(updateCurrentProblomsSolvingStatus(probloms.data[0]));
    setCode(probloms.data[0].starter_code);
  }
  

  

  const runCode = () => {
    // Making blank.
    document.getElementById("output")!.innerText = "";
    const Executedoutput = runCodeInBrowser(code);
    setTimeout(() =>{
      document.getElementById("output")!.innerText += Executedoutput + "\n";
    },100)
    return Executedoutput;

  };


  const costomStyle = {
    middleLine: "9",
  }

  const switchQuestion = async(problomsId: number) =>{ // you will get here on node click
    console.log("Hello probloms man", problomsId)

    // find probloms via database.
    const probloms = await StepDataFinder.getProblomsByid(problomsId);
    setActiveProbloms(problomsId-1);
    dispatch(updateCurrentProblomsSolvingStatus(probloms.data[0]));
    setCode(probloms.data[0].starter_code);
  }
    
    
  useEffect(() =>{
    findingAllStepsInfo()
  },[])
  
  

  return (
    <Fragment>  
      <Box className="m-5 mt-20">
        <Box className="flex w-[70vw] justify-between">
          {setpData && setpData.map((step, stepIndex) => (
            <Step
              key = {`${stepIndex}-${stepIndex}`}
              element = {step.id}
              rowLength = {setpData.length}
              isLastElement = {stepIndex === setpData.length - 1}
              isVeryLastElement = {stepIndex}
              isFirstElement = {stepIndex === 0}
              isEvenRow = {0 % 2 === 0}
              isLastRow = {setpData.length -1 === stepIndex}
              activeNode = {activeProblom}
              costomStyle = {costomStyle}
              onClick={switchQuestion}
              stepName={{id: step.id, step: step.position, step_name: step.short_title}}
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