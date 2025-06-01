import StarIcon from '@mui/icons-material/Star';
import highliteImage from "../../../assets/images/personImage.png";
import getYouNameHere from "../../../assets/images/GetYourNamehere.png";
import vactor from "../../../assets/images/Vector 1.png";


function HighLIghtAndRightSideCard() {
  return (
    <div className="flex justify-between relative">
        <div className="h-44 w-72 border-color-primary border-2 rounded-tr-[80px] rounded-br-[80px] absolute -left-2">
            <div className="items-center justify-center flex flex-col p-2">
              <div className="">
                <span className="primary-color text-xl mt-2">Highlight</span>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="h-24 w-24 rounded-full bg-gray-200">
                  <img src={highliteImage} alt="Person image"/>
                </div>
                <div className="mt-2">
                  <p className="text-xl">Nitish Kumar</p>
                  <div>
                    {new Array(5).fill(0).map((_, index)=> <StarIcon key={index} className={index < 4 ? "primary-color" : "text-gray-300"}/>)}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[14px] font-sans">Tried it. Got the job. It's addictive!</p>
              </div>
            </div>
            <div>
              <div>
                <img className="h-14 ml-20 mt-4" src={vactor} alt="tegline" />
              </div>
              <div>
                <img className="h-10 ml-12" src={getYouNameHere} alt="tagline" />
              </div>
            </div>
        </div>
    
        <div className='absolute -right-28 -top-40'>
            <div className="w-90 ml-20 h-38 mt-18 -rotate-24 rounded-l-full overflow-hidden right-0 background-color-primary">
                <h1 className='text-6xl ml-18 mt-3 font-bold'>Master</h1>
                <p className='text-6xl ml-9 font-extrabold'>DSA</p>
            </div>
        </div>
    
    </div>
  )
}

export default HighLIghtAndRightSideCard