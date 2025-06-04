type TestCase = {
  input: string;
  expectedOutput: string;
};
export interface IProbloms {
  id: number;
  title: string;
  description: string;
  starterCode: string;
}

export interface IProblomsType {
  description: string;
  position: number;
  starter_code: string;
  title: string
}

export interface ICurrentProbloms {
  data: IProblomsType[],
  error: boolean;
  message: string;
}