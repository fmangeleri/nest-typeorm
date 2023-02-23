import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';
@Injectable()
export class AppService {
  constructor(
    @Inject('Tasks') private tasks: any[],
    private configService: ConfigService,
  ) {}
  getHello(): string {
    // console.log(this.tasks);
    return `Hello World! ${this.configService.get('API_KEY')}`;
  }
}
