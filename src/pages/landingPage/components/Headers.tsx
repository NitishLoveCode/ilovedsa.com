import logo from "../../../assets/logo/colorLogo.png";
import heartImage from "../../../assets/logo/heartImg.png";


function Headers({setOpen}:{setOpen:(parama: boolean)=> void}) {
  return (
    <div className="flex items-center p-2 justify-between">
        {/* left div */}
        <div className="relative">

          
            <img className='h-14' src={logo} alt="i love dsa" />
            <div style={{fontSize: "42px"}} className="absolute -top-2 left-2  ">
              <img className="h-10 ml-2 mt-3 animate-bounce" src={heartImage} alt="i love dsa.com" />
            </div>
        </div>
        {/* right div */}
        <div className="border-2 flex p-3 px-6 gap-8 rounded-2xl border-gray-600 w-auto">
            <span className="primary-color font-bold">Home</span>
            <span className="cursor-pointer">Practice</span>
            <span className="cursor-pointer" onClick={() => setOpen(true)}>Login</span>
            <span className="cursor-pointer" onClick={() => setOpen(true)}>SignUp</span>
        </div>
    </div>
  )
}

export default Headers