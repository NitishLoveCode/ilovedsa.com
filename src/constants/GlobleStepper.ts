import { questionSetForStep1 } from "./Question";

export type IJS_DSA_QUESTIONS = typeof questionSetForStep1;

export type IglobelStepper = {
    step: number; 
    stepProbloms: IJS_DSA_QUESTIONS;
}

export const globelStepper: IglobelStepper[] = [
    { step: 1, stepProbloms: questionSetForStep1 }, // 1 step probloms
    { step: 2, stepProbloms: questionSetForStep1 }, // 2 step probloms
    { step: 3, stepProbloms: questionSetForStep1 }, // 3 step probloms
    { step: 4, stepProbloms: questionSetForStep1 }, // 4 step probloms
    { step: 5, stepProbloms: questionSetForStep1 }, // 5 step probloms
    { step: 6, stepProbloms: questionSetForStep1 }, // 6 step probloms
  ]

