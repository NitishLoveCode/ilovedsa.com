import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IDsaStepsDsashboard } from "../../../modal/dashboard/DashboardModal";

const initialState = {
  dsaStepsSlice: [
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
};

const dsaStepsSlice = createSlice({
  initialState,
  name: "DsaStepsSlice",
  reducers: {
    addDsaStepsSlice(state, action: PayloadAction<IDsaStepsDsashboard>){
      state.dsaStepsSlice = action.payload.data.responseData;
      state.activityLog = action.payload.data.activityLog;

    }
  },
});

export const {addDsaStepsSlice} = dsaStepsSlice.actions;
export default dsaStepsSlice.reducer;
