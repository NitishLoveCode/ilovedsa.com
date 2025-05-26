import { AxiosResponse } from "axios";
import { IRegisterResponse } from "../../modal/userServices/UserModal";
import { postRequest } from "../api";
import { SIGHIN_AUTH, SIGNUP_AUTH } from "../CONSTANTS";




export class UserServices {

  public static signUpUser = async (signUpData: any): Promise<IRegisterResponse> => {
    const response: AxiosResponse<IRegisterResponse> = await postRequest(SIGNUP_AUTH, signUpData)
    return response.data;
  };

  public static signInUser = async (signInData: any): Promise<IRegisterResponse> => {
    const response: AxiosResponse<IRegisterResponse> = await postRequest(SIGHIN_AUTH, signInData)
    return response.data;
  };


}
