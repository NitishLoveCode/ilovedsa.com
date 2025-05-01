import axios from 'axios';
import { LANGUAGE_VERSIONS } from '../../constants/CodeEditor';

const api = axios.create({
  baseURL: 'https://emkc.org/api/v2/piston',
});

export const executeCode = async (language: string, sourceCode: string): Promise<any> => {
  const version = LANGUAGE_VERSIONS[language as keyof typeof LANGUAGE_VERSIONS];

  const payload = {
    language,
    version,
    files: [
      {
        content: sourceCode,
      },
    ],
  };

  try {
    const response = await api.post('/execute', payload);
    return response.data;
  } catch (error) {
    console.error('Execution failed:', error);
    throw error;
  }
};
