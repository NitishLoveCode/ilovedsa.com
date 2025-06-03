import { IRegisterResponse, userDetailsForm } from "../../modal/userServices/UserModal";
import { postRequest } from "../api";
import { SIGNIN_AUTH, SIGNUP_AUTH } from "../CONSTANTS.SERVICES";




export class UserServices {

  public static signUpUser = async (signUpData: {username: string} & Pick<userDetailsForm, "email" | "password">): Promise<IRegisterResponse> => {
    const response: IRegisterResponse = await postRequest(SIGNUP_AUTH, signUpData)
    return response;
  };

  public static signInUser = async (signInData: Pick<userDetailsForm, "email" | "password">): Promise<IRegisterResponse> => {
    console.log("i am here.")
    const response: IRegisterResponse = await postRequest(SIGNIN_AUTH, signInData)
    console.log("is ti claling..  ")
    return response;
  };


}
