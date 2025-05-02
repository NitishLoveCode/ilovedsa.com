import { Fragment, useState } from "react";
import CodeEditor from "./component/CodeEditor";
import Output from "./component/Output";
import { Box} from "@mui/material";
import { CODE_SNIPPETS } from "../../constants/CodeEditor";
import { runCodeInBrowser } from "../../services/comilerServices/JavaScriptCompilerServices";
import Step from "../../pages/skakeStepper/Step";

function CompilerContainer() {
  const [code, setCode] = useState<string>(CODE_SNIPPETS["javascript"]);

  const runCode = () => {

    // Making blank.
    document.getElementById("output")!.innerText = "";

    setTimeout(() =>{
      runCodeInBrowser(code, (output) => {
        document.getElementById("output")!.innerText += output + "\n";
      });
    },100)

  };


  const row: number[] = [1,2,3,4,5,6,7,8,9,10]

  const costomStyle = {
    middleLine: "9",

  }

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
        <CodeEditor code={code} setCode={setCode} />
        <Output onClick={runCode} />
      </Box>
    </Fragment>
  );
}

export default CompilerContainer;
