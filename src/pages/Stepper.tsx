import { Fragment } from 'react'

function Stepper() {
  return (
    <Fragment>
        <div className='relative'>


            <div className='flex gap-40'>
                <div className='w-15 flex justify-center items-center h-15 rounded-full bg-amber-600'>
                    <h2 className='text-3xl text-white'>1</h2>
                </div>

                <div className='absolute top-6 left-13'>
                    <div className='w-44 h-3 bg-amber-600'></div>
                </div>

                <div className='w-15 flex justify-center items-center h-15 rounded-full bg-amber-600'>
                    <h2 className='text-3xl text-white'>2</h2>
                </div>
            </div>


        </div>
    </Fragment>
  )
}

export default Stepper