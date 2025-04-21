import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/public/PublicLayout'




function RoutingConfig() {
  return (
    <Routes>
        <Route path='/' element={<PublicLayout/>}>
          <Route key={1} path='/' element={<h1>hello how are you</h1>}/>
          <Route key={1} path='/1' element={<h1>Thisfdasdf</h1>}/>
          <Route key={1} path='/2' element={<h1>This is fsafasfae bro1</h1>}/>
          <Route key={1} path='/3' element={<h1>This asdfadsfasdfasdfis one bro1</h1>}/>
          <Route key={1} path='/4' element={<h1>This issfdssss one bro1</h1>}/>
          <Route key={1} path='/5' element={<h1>Thiso1</h1>}/>
        </Route>
    </Routes>
  )
}

export default RoutingConfig