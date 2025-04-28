import { Fragment, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import RightSideBar from './components/RightSideBar';
import { Box } from '@mui/material';

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
      <Box className='flex'>

        <Box>
          <Header loveMove={loveMove} moveLeft = {moveLeft}/>
          <LeftMenu loveMove={loveMove}/>
        </Box>

        <RightSideBar loveMove={loveMove}>
          <Outlet/>
        </RightSideBar>
        
      </Box>
    </Fragment>
  )
}

export default PublicLayout