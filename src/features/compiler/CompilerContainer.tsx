import React, { Fragment } from "react";
import CodeEditor from "./component/CodeEditor";
import Output from "./component/Output";
import BasicSelect from "../../components/BasicSelect";
import { Box } from "@mui/material";

function CompilerContainer() {
  return (
    <Fragment>
      <Box className="flex m-2 justify-between">
        <CodeEditor />
        <Output />
      </Box>
    </Fragment>
  );
}

export default CompilerContainer;
