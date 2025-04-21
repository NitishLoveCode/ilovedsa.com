import { Fragment, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import RightSideBar from './components/RightSideBar';

function PublicLayout() {
  const [moveLeft, setMoveLeft] = useState<boolean>(false);
  const [loveMove, setLoveMove] = useState<boolean>(false)

  useEffect(() =>{
     const timer = setTimeout(() => {
       setMoveLeft(true);
     }, 3000);
  
     const loveTimer = setTimeout(() => {
       setLoveMove(true);
     }, 4000);
  
     return(()=> {
       clearTimeout(timer);
       clearTimeout(loveTimer);
     });
  }, [])


  return (
    <Fragment>
      <div className='flex'>

        <div>
          <Header loveMove={loveMove} moveLeft = {moveLeft}/>
          <LeftMenu loveMove={loveMove}/>
        </div>

        <RightSideBar loveMove={loveMove}>
          <Outlet/>
        </RightSideBar>
        
      </div>
    </Fragment>
  )
}

export default PublicLayout