import { Fragment, useEffect, useState } from 'react';
import logo from "../../assets/logo/ilovedsalogo.png";

function FristLoading() {
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


  // absolute bottom-1 left-2

  return (
    <Fragment>
        <div>
          <div className={`bg-gradient-to-r from-amber-500 to-pink-500 h-screen flex justify-center
            transition-all duration-900 ${moveLeft ? "w-[20vw]" : "w-screen items-center"}`}>
              <div className='relative'>
                  <img className='h-14' src={logo} alt="ilovedsa.com" />
                  <div style={{fontSize: "42px"}} className={`absolute ${loveMove ? "-top-2" : "bottom-1 animate-spin -top-2"} left-2`}>❤️</div>
              </div>
          </div>
        </div>

    </Fragment>
  )
}

export default FristLoading
import { Fragment } from 'react';
import logo from "../../assets/logo/ilovedsalogo.png";

function FristLoading() {
  return (
    <Fragment>
        <div className='bg-gradient-to-r from-amber-500 to-pink-500 h-screen w-screen flex items-center justify-center'>
            <div className='relative'>
                <img className='h-14' src={logo} alt="ilovedsa.com" />
                <div style={{fontSize: "42px"}} className='absolute bottom-1 left-2 animate-spin'>❤️</div>
            </div>
        </div>

    </Fragment>
  )
}

export default FristLoading