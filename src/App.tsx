import { Fragment } from "react/jsx-runtime";
import { BrowserRouter } from "react-router-dom";
import RoutingConfig from "./navigation/RoutingConfig";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "../src/layouts/theme/Theme";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Fragment>
        <BrowserRouter>
          <RoutingConfig />
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
