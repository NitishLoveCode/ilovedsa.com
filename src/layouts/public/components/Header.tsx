import { Box } from "@mui/material";
import logo from "../../../assets/logo/ilovedsalogo.png";
import { useAppContext } from "../../../utils/AppContext";


function Header({moveLeft, loveMove}: {moveLeft:boolean, loveMove: boolean}) {

  const {themeMode} = useAppContext();

  return (
    <Box className={`${themeMode === "dark" ? "border-b-[0.5px] border-r-[0.5px] border-gray-500" : "bg-gradient-to-r from-amber-500 to-pink-500"} flex justify-center
      transition-all duration-900 ${moveLeft ? "w-[25vw] h-[10vh]" : "w-screen h-screen items-center"}`}>
        <Box className='relative'>
            <img className='h-14' src={logo} alt="ilovedsa.com" />
            <Box style={{fontSize: "42px"}} className={`absolute ${loveMove ? "-top-2" : "bottom-1 animate-spin -top-2"} left-2`}>❤️</Box>
        </Box>
    </Box>
  )
}

export default Header