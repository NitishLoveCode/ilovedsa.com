import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/public/PublicLayout";
import SnakeStepper from "../pages/skakeStepper/SnakeStepper";
import CompilerContainer from "../features/compiler/CompilerContainer";
import LandingPage from "../pages/landingPage/LandingPage";
import PrivateLayout from "../layouts/private/PrivateLayout";
import { APP, CODE_EDITOR, COMPILER, DASHBOARD, HOME } from "./CONSTANTS";

function RoutingConfig() {
  return (
    <Routes>
      <Route path={HOME} element={<LandingPage />} />

      {/* ---------All public Routes--------------    */}
      <Route element={<PublicLayout />}>
        <Route key={1} path={APP} element={<SnakeStepper />} />
      </Route>

      {/* ------------------All Private Routes ---------------- */}
      <Route element={<PrivateLayout />}>
        <Route key={1} path={DASHBOARD} element={<SnakeStepper />} />
        <Route key={2} path={CODE_EDITOR} element={<CompilerContainer />} />
        <Route key={2} path={COMPILER} element={<CompilerContainer />} />
      </Route>
    </Routes>
  );
}

export default RoutingConfig;
