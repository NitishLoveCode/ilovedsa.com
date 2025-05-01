

// JavaScript code runner.
export const runCodeInBrowser = (code: string, outputCallback: (msg: string) => void) => {

    const originalConsoleLog = console.log;

    const logs: string[] = [];
  
    console.log = (...args: any[]) => {
      logs.push(args.join(" "));
      outputCallback(args.join(" "));
    };
  
    try {
      new Function(code)();
    } catch (err) {
      outputCallback(`Error: ${err}`);
    } finally {
      console.log = originalConsoleLog; // Restore original
    }
  };
  