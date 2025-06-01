import { IDsaStepsDsashboard, ITechStackList } from "../../modal/dashboard/DashboardModal";
import { getRequest } from "../api"
import { DASHBOARD, DSA_STEPS, TECH_STACK_List } from "../CONSTANTS.SERVICES";




export class DashboardServices {

    /**
     * Get API for calling DSA step 
     */
    public static getDsaSteps = async(): Promise<IDsaStepsDsashboard> =>{
        const response: IDsaStepsDsashboard = await getRequest(DASHBOARD + DSA_STEPS);
        return response;
    }

    /**
     * Get API for Calling Tech-stack list for switch into Tech-stack
     */
    public static getTechStackList = async(): Promise<ITechStackList> =>{
        const response: ITechStackList = await getRequest(DASHBOARD + TECH_STACK_List)
        return response;
    }
}