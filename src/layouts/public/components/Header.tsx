import logo from "../../../assets/logo/ilovedsalogo.png";


function Header({moveLeft, loveMove}: {moveLeft:boolean, loveMove: boolean}) {

  return (
    <div className={`bg-gradient-to-r from-amber-500 to-pink-500 flex justify-center
      transition-all duration-900 ${moveLeft ? "w-[25vw] h-[10vh]" : "w-screen h-screen items-center"}`}>
        <div className='relative'>
            <img className='h-14' src={logo} alt="ilovedsa.com" />
            <div style={{fontSize: "42px"}} className={`absolute ${loveMove ? "-top-2" : "bottom-1 animate-spin -top-2"} left-2`}>❤️</div>
        </div>
    </div>
  )
}

export default Header