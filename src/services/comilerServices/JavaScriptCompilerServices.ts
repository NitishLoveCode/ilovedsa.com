export const runCodeInBrowser = (code: string): string => {
  const originalConsoleLog = console.log;
  const logs: string[] = [];

  console.log = (...args: any[]) => {
    const formatted = args.map(arg => {
      if (typeof arg === 'object' && arg !== null) {
        try {
          return JSON.stringify(arg, null, 2); // prettify with 2-space indentation
        } catch {
          return String(arg);
        }
      } else {
        return String(arg);
      }
    });
    logs.push(formatted.join(" "));
  };

  try {
    new Function(code)();
  } catch (err) {
    logs.push(`Error: ${err}`);
  } finally {
    console.log = originalConsoleLog;
  }

  return logs.join("\n\n"); // Double line-break for better readability
};
