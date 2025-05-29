import { IRegisterResponse } from "../userServices/UserModal";

export type IDsaSteps = {
    id: number;
    step: number;
    step_name: string;
    ask_by: string;
    ask_chance: string;
}

export interface IActivityLogAttributes {
  dsa_steps: number;
  dsa_sub_steps: number;
}

export interface IDashboardStateInfo {
    dsaSteps: IDsaSteps[][][];
    activityLog: IActivityLogAttributes;
}


export interface IDsaStepsDsashboard extends Pick<IRegisterResponse, "error" | "message"> {
    data: {
        activityLog: IActivityLogAttributes;
        responseData: IDsaSteps[][][];
    }
}