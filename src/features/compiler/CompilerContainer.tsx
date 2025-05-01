import { Fragment, useState } from "react";
import CodeEditor from "./component/CodeEditor";
import Output from "./component/Output";
import { Box } from "@mui/material";
import { CODE_SNIPPETS } from "../../constants/CodeEditor";
import { runCodeInBrowser } from "../../services/comilerServices/JavaScriptCompilerServices";

function CompilerContainer() {
  const [code, setCode] = useState<string>(CODE_SNIPPETS["javascript"]);

  const runCode = () =>{

    console.log("***************", code)


    runCodeInBrowser(
          code
         ,
          (output) => {
            document.getElementById("output")!.innerText += output + "\n";
          }
        );

  }

  return (
    <Fragment>
      <Box className="flex m-2 justify-between">
        <CodeEditor code={code} setCode={setCode}/>
        <Output onClick={runCode}/>
      </Box>
    </Fragment>
  );
}

export default CompilerContainer;
