import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/public/PublicLayout'
import SnakeStepper from '../pages/skakeStepper/SnakeStepper'
import CompilerContainer from '../features/compiler/CompilerContainer'
import Counter from '../pages/DummyPages/Counter'
import LandingPage from '../pages/landingPage/LandingPage'
import TagCloud from '../pages/movingBall/TagCloud'




function RoutingConfig() {



  return (
    <Routes>

        <Route path='/' element={<LandingPage/>}/>        
        <Route element={<PublicLayout/>}>
          <Route key={1} path='/app' element={<SnakeStepper/>}/>
          <Route key={2} path='/code-editor' element={<CompilerContainer/>}/>
          <Route key={3} path='/dummy' element={<Counter/>}/>
          <Route key={4} path='/3' element={<h1>This asdfadsfasdfasdfis one bro1</h1>}/>
          <Route key={5} path='/4' element={<h1>This issfdssss one bro1</h1>}/>
          <Route key={6} path='/5' element={<h1>Thiso1</h1>}/>
        </Route>

    </Routes>
  )
}

export default RoutingConfig