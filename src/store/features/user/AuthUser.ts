import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IUser } from "../../../modal/userServices/UserModal";



const initialState: IUser = {
    id: 0,
    userName: "",
    email: ""
}


const authUser = createSlice({
    name: "user",
    initialState,
    reducers: {
        addLoginUser(state, action: PayloadAction<IUser>){
            state.id = action.payload.id,
            state.userName = action.payload.userName,
            state.email = action.payload.email
        },
        resetLogedInUser(state){
            state.id = 0,
            state.userName = "",
            state.email = ""
        }
    }
})

export const {addLoginUser, resetLogedInUser} = authUser.actions;
export default authUser.reducer;