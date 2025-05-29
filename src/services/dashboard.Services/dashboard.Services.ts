import { IDsaStepsDsashboard } from "../../modal/dashboard/DashboardModal";
import { getRequest } from "../api"
import { DASHBOARD, DSA_STEPS } from "../CONSTANTS.SERVICES";




export class DashboardServices {

    public static getDsaSteps = async(): Promise<IDsaStepsDsashboard> =>{
        const response: IDsaStepsDsashboard = await getRequest(DASHBOARD + DSA_STEPS);
        return response;
    }
}