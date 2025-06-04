import { ICurrentProbloms } from "../../modal/compiler";
import { stackStepData } from "../../modal/stepFinder/codeFinder";
import { getRequest } from "../api";
import { CODE_EDITOR, PROBLOMS_BY_ID, TECH_STACK_NODE_INFO } from "../CONSTANTS.SERVICES";

export class StepDataFinder {
  /**
   * Retrieves detailed information about a specific step within a selected tech stack.
   *
   * For example, if you select "SQL" as the tech stack and request data for step 1,
   * this method returns all relevant details about that step, including:
   * - Total number of problems in that step.
   * - Each problem's ID and corresponding step number.
   *
   * Using the problem IDs, you can fetch complete details for each problem such as:
   * - Title
   * - Description
   * - Starter code
   * - And more
   *
   * @param stackId - The ID of the tech stack (e.g., SQL, DSA, Service-Based Companies).
   * @param stepid - The specific step number within the selected tech stack.
   * @returns A promise that resolves to step data including all associated problems.
   */
  public static readonly getAllStepInfoOfSelectedStackNode = async ({stackId, stepid}: {stackId: number;stepid: number;}): Promise<stackStepData> => {
    const response: stackStepData = await getRequest(CODE_EDITOR + TECH_STACK_NODE_INFO,{ stackId, stepid });
    return response;
  };


  public static readonly getProblomsByid =  async(problomsId: number):Promise<ICurrentProbloms> =>{
    const response: ICurrentProbloms = await getRequest(CODE_EDITOR + PROBLOMS_BY_ID, {problomsId});
    return response;
  }
}
