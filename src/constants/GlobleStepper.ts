import { JS_DSA_QUESTIONS } from "./Question";

export type IJS_DSA_QUESTIONS = typeof JS_DSA_QUESTIONS;

export type IglobelStepper = {
    step: number; 
    stepProbloms: IJS_DSA_QUESTIONS;
}

export const globelStepper: IglobelStepper[][] = [
  [
    { step: 1, stepProbloms: JS_DSA_QUESTIONS },
    { step: 2, stepProbloms: JS_DSA_QUESTIONS },
    { step: 3, stepProbloms: JS_DSA_QUESTIONS },
    { step: 4, stepProbloms: JS_DSA_QUESTIONS },
    { step: 5, stepProbloms: JS_DSA_QUESTIONS },
    { step: 6, stepProbloms: JS_DSA_QUESTIONS },
  ],
  [
    { step: 12, stepProbloms: JS_DSA_QUESTIONS },
    { step: 11, stepProbloms: JS_DSA_QUESTIONS },
    { step: 10, stepProbloms: JS_DSA_QUESTIONS },
    { step: 9, stepProbloms: JS_DSA_QUESTIONS },
    { step: 8, stepProbloms: JS_DSA_QUESTIONS },
    { step: 7, stepProbloms: JS_DSA_QUESTIONS },
  ],
  [
    { step: 13, stepProbloms: JS_DSA_QUESTIONS },
    { step: 14, stepProbloms: JS_DSA_QUESTIONS },
    { step: 15, stepProbloms: JS_DSA_QUESTIONS },
    { step: 16, stepProbloms: JS_DSA_QUESTIONS },
    { step: 17, stepProbloms: JS_DSA_QUESTIONS },
    { step: 18, stepProbloms: JS_DSA_QUESTIONS },
  ],
  [
    { step: 24, stepProbloms: JS_DSA_QUESTIONS },
    { step: 23, stepProbloms: JS_DSA_QUESTIONS },
    { step: 22, stepProbloms: JS_DSA_QUESTIONS },
    { step: 21, stepProbloms: JS_DSA_QUESTIONS },
    { step: 20, stepProbloms: JS_DSA_QUESTIONS },
    { step: 19, stepProbloms: JS_DSA_QUESTIONS },
  ],
  [
    { step: 25, stepProbloms: JS_DSA_QUESTIONS },
    { step: 26, stepProbloms: JS_DSA_QUESTIONS },
    { step: 27, stepProbloms: JS_DSA_QUESTIONS },
    { step: 28, stepProbloms: JS_DSA_QUESTIONS },
    { step: 29, stepProbloms: JS_DSA_QUESTIONS },
    { step: 30, stepProbloms: JS_DSA_QUESTIONS },
  ],
];
