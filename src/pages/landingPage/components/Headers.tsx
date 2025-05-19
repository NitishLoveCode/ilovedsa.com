import logo from "../../../assets/logo/ilovedsalogo.png";


function Headers() {
  return (
    <div className="flex items-center p-2 justify-between">
        {/* left div */}
        <div className="background-color-primary relative">
            <img className='h-14' src={logo} alt="i love dsa" />
            <div style={{fontSize: "42px"}} className="absolute -top-2 left-2 animate-bounce  ">❤️</div>
        </div>
        {/* right div */}
        <div className="border-2 flex p-3 px-6 gap-8 rounded-2xl border-gray-600 w-auto">
            <span className="primary-color font-bold">Home</span>
            <span>Practice</span>
            <span>Contests</span>
            <span>About Us</span>
        </div>
    </div>
  )
}

export default Headers