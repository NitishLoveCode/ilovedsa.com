import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IAddTechStackStepSlice } from "../../../modal/dashboard/DashboardModal";

const initialState = [
  {
    stackId: 0,
    techStackData: {
      responseData: [
        [
          [
            {
              id: 0,
              step: 0,
              step_name: "",
              ask_by: "",
              ask_chance: "",
            },
          ]
        ],
      ],
      activityLog: {
        dsa_sub_steps: 0,
        dsa_steps: 0
      }
    }
  }
]

const techStackStepSlice = createSlice({
  initialState, 
  name: "DsaStepsSlice",
  reducers: {
    addTechStackStepSlice(state, action: PayloadAction<IAddTechStackStepSlice>){
      const {stackId, techStackData}  = action.payload;
      const {activityLog, responseData} = techStackData.data;
      // Removing if initialState is 0, considered as dymmy.
      if(state[0].stackId === 0){
        state.shift()
      }
      state.push({stackId: stackId, techStackData: {activityLog, responseData}})
    },
    
    takeSelectedStack0thPosition(state, action: PayloadAction<number>){
      const index = state.findIndex((element) => element.stackId === action.payload);
      if (index > -1) {
        const [selected] = state.splice(index, 1); // remove the selected item
        state.unshift(selected); // move it to the front
      }
    }
  },
});

export const {addTechStackStepSlice, takeSelectedStack0thPosition} = techStackStepSlice.actions;
export default techStackStepSlice.reducer;
