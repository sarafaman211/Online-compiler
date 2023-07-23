import { Injectable } from '@nestjs/common';
import * as vm from 'vm';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async runCode(code: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const sandbox = { console: { log: resolve } };
    
    const context = vm.createContext(sandbox);
    const options = {
      timeout: 1000, // Set a timeout for code execution (e.g., 5 seconds)
    };
    
    try {
      vm.runInContext(code, context, options);
      } catch (error) {
        reject(error.toString());
      }
    });
  }
}