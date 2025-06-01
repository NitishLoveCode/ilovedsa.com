import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITechStackDataType } from "../../../modal/dashboard/DashboardModal";




const initialState = [
    {
        id: Number.MIN_VALUE,
        StackName: "",
        numberOfSteps: Number.MIN_VALUE,
        numberOfAttempts: Number.MIN_VALUE,
        numberOfFinish: Number.MIN_VALUE,
        stack_id: 0
    }
]

const stackSwitchSlice = createSlice({
    initialState,
    name: "stackSwitch",
    reducers: {
        addDataIntoStackSwitch(state, action: PayloadAction<ITechStackDataType[]>){
            state.length = 0
            state.push(...action.payload);
        }
    }
})

export const {addDataIntoStackSwitch} = stackSwitchSlice.actions;
export default stackSwitchSlice.reducer;