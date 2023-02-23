import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config/dist';
import config from './config';
@Injectable()
export class AppService {
  constructor(
    @Inject('Tasks') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    return `Hello World! ${this.configService.database.name}`;
  }
}
