import { Fragment } from 'react';
import logo from "../../assets/logo/wwwww.png";

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