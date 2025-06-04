import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProbloms, IProblomsType } from "../../../modal/compiler";



const initialState: IProblomsType = {
    description: "",
    position: Number.MAX_VALUE,
    starter_code: "",
    title: ""
}


const currentProblomsSolvingStatus = createSlice({
    name: "currentProblomsSolvingStatus",
    initialState,
    reducers:{
        updateCurrentProblomsSolvingStatus(state, action: PayloadAction<IProblomsType>){
            state.description = action.payload.description;
            state.position = action.payload.position;
            state.starter_code = action.payload.starter_code;
            state.title = action.payload.title;
        }
    }
})

export const {updateCurrentProblomsSolvingStatus} = currentProblomsSolvingStatus.actions;
export default currentProblomsSolvingStatus.reducer;