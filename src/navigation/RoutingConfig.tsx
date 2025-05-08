import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/public/PublicLayout'
import SnakeStepper from '../pages/skakeStepper/SnakeStepper'
import CompilerContainer from '../features/compiler/CompilerContainer'
import Counter from '../pages/DummyPages/Counter'




function RoutingConfig() {



  return (
    <Routes>
        <Route path='/' element={<PublicLayout/>}>
          <Route key={1} path='/' element={<SnakeStepper/>}/>
          <Route key={1} path='/code-editor' element={<CompilerContainer/>}/>
          <Route key={1} path='/dummy' element={<Counter/>}/>
          <Route key={1} path='/3' element={<h1>This asdfadsfasdfasdfis one bro1</h1>}/>
          <Route key={1} path='/4' element={<h1>This issfdssss one bro1</h1>}/>
          <Route key={1} path='/5' element={<h1>Thiso1</h1>}/>
        </Route>
    </Routes>
  )
}

export default RoutingConfig