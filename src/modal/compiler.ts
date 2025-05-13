type TestCase = {
  input: string;
  expectedOutput: string;
};
export interface IProbloms {
  id: number;
  title: string;
  description: string;
  starterCode: string;
  testCases: TestCase[];
}
