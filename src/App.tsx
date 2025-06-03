import { Fragment } from "react/jsx-runtime";
import { BrowserRouter } from "react-router-dom";
import RoutingConfig from "./navigation/RoutingConfig";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "../src/layouts/theme/theme";
import { useAppContext } from "./utils/AppContext";

function App() {
  const {themeMode} = useAppContext();

  console.log("Nitish kumar............")
  console.log("Nitish kumar............")
  console.log("Nitish kumar............")
  console.log("Nitish kumar............")
  console.log("Nitish kumar............")
  console.log("Nitish kumar............")

  const theme = getTheme(themeMode);

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
