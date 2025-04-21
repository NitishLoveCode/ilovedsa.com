import { Fragment } from "react/jsx-runtime"
import {BrowserRouter} from "react-router-dom"
import RoutingConfig from "./navigation/RoutingConfig"

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <RoutingConfig/>
      </BrowserRouter>
    </Fragment>
  )
}

export default App