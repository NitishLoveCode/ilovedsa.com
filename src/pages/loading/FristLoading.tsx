import { Fragment, useEffect, useState } from 'react';
import logo from "../../assets/logo/ilovedsalogo.png";

export default   function FristLoading() {
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

      <div className='flex'>

        {/* Right side bar */}

        <div className=''>

            <div className={`bg-gradient-to-r from-amber-500 to-pink-500 flex justify-center
              transition-all duration-900 ${moveLeft ? "w-[25vw] h-[10vh]" : "w-screen h-screen items-center"}`}>
                <div className='relative'>
                    <img className='h-14' src={logo} alt="ilovedsa.com" />
                    <div style={{fontSize: "42px"}} className={`absolute ${loveMove ? "-top-2" : "bottom-1 animate-spin -top-2"} left-2`}>❤️</div>
                </div>
            </div>

            {/* ---------- menue bar ----------*/}

            {
              loveMove && 
              <div className='bg-red-50 overflow-y-scroll h-[90vh]'>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
                <h3>Comming soon Lorem ipsum.</h3>
              </div>
            }

        </div>

        


        {/* // Right side bar */}

        <div className='w-[75vw] h-screen bg-gray-100'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est inventore minima harum excepturi ex culpa cupiditate, a quibusdam blanditiis ab iure quos commodi nihil, debitis perspiciatis et assumenda error.
        </div>

      </div>

    </Fragment>
  )
}
