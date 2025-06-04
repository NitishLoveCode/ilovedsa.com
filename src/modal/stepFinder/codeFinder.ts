import { IRegisterResponse } from "../userServices/UserModal";


export interface stackNodeInfo{
  id: number;
  position: number;
  short_title: string;
}

export interface stackStepData extends Pick<IRegisterResponse, "error" | "message"> {
  data: stackNodeInfo[]
}