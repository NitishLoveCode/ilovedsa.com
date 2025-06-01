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


export interface iSwitchStackCard {
    handleSwitchStack: (stackId: number) => void
    cardName: string;
    numberOfSteps: number;
    numberOfAttempts: number;
    numberOfFinish: number;
    stackId: number;
}

export interface ITechStackDataType {
    id: number;
    StackName: string;
    numberOfSteps: number;
    numberOfAttempts: number;
    numberOfFinish: number;
    stack_id: number;
}

export interface ITechStackList extends Pick<IRegisterResponse, "message" | "error"> {
    data: ITechStackDataType[];
}