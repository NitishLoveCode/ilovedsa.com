import { useNavigate } from "react-router-dom";
import tagline from "../../../assets/images/topTagline.png"


function HeroSection({open, setOpen}:{open: boolean, setOpen:(parama: boolean)=> void}) {
      const navigate = useNavigate()
    
  return (
    <div>
        <div className="relative">
            <div className="flex justify-center mt-20">
                <div className="bg-orange-100 primary-color p-2 w-max px-8 rounded-2xl font-normal">
                    <span>💡 India's Brain Fuel Brand</span>
                </div>
            </div>
            <div className="absolute right-28 -top-10">
                {/* <p className="primary-color">🚀 The Code. </p>
                <p className="primary-color">Cracked. ..</p> */}
                <img className="h-14" src={tagline} alt="Best Dsa website" />
            </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
            <h2 className="text-5xl">We Serve the <span className="primary-color font-bold">Smartest DSA</span> Bites.</h2>
            <p className="font-sans">Master DSA with fun, fast, and bite-sized challenges. Learn more and code like a pro.</p>
        </div>
        {/*  Button */}
        <div className="flex flex-row items-center justify-center mt-6 gap-12">
            <button onClick={()=> setOpen(!open)} className="bg-orange-100 primary-color p-2 px-4 rounded-4xl cursor-pointer">Start Solving</button>
            <button className="primary-color border-2 border-color-primary p-2 px-4 rounded-4xl cursor-pointer">Explore Topics</button>
        </div>
    </div>
  )
}

export default HeroSection