import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProbloms } from "../../../modal/compiler";



const initialState: IProbloms = {
    id: 0,
    title: "",
    description: "",
    starterCode: ``
}


const currentProblomsSolvingStatus = createSlice({
    name: "currentProblomsSolvingStatus",
    initialState,
    reducers:{
        updateCurrentProblomsSolvingStatus(state, action: PayloadAction<IProbloms>){
            state.id = action.payload.id,
            state.description = action.payload.description,
            state.starterCode = action.payload.starterCode,
            state.title = action.payload.title
        }
    }
})

export const {updateCurrentProblomsSolvingStatus} = currentProblomsSolvingStatus.actions;
export default currentProblomsSolvingStatus.reducer;