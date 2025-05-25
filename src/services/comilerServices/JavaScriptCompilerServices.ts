// JavaScript code runner.
export const runCodeInBrowser = (code: string): string => {
  const originalConsoleLog = console.log;
  const logs: string[] = [];

  console.log = (...args: any[]) => {
    logs.push(args.join(" "));
  };

  try {
    new Function(code)();
  } catch (err) {
    logs.push(`Error: ${err}`);
  } finally {
    console.log = originalConsoleLog; // Restore original
  }

  return logs.join("\n");
};
