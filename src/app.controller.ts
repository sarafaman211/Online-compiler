import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("execute")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("runCode")
  async runCode(@Body("code") code: string):Promise<any>{
    if (!code) {
      return { error: 'No code provided.' };
    }

    try {
      const output = await this.appService.runCode(code);
      return { output };
    } catch (error) {
      return { error: error.message };
    }
  }
}