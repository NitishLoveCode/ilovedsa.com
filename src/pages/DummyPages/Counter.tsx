import { Box } from '@mui/material'
import {useAppSelector, useAppDispatch} from "../../store/store"
import {decrement, increment, incrementByAmount} from "../../store/features/counter/counterSlice";


function Counter() {
    const {counter} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    

  return (
    <Box>
        <Box>
            <h1>hello how are you?</h1>
        </Box>
        <Box>
            {counter.value}
        </Box>
        <Box>
            <button onClick={()=> dispatch(increment())}>increment</button><br />
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </Box>
    </Box>
  )
}

export default Counter