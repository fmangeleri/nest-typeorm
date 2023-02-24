import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config/dist';
import config from './config';
import { Client } from 'pg';
@Injectable()
export class AppService {
  constructor(
    @Inject('Tasks') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject('PG') private clientPG: Client,
  ) {}
  getHello(): string {
    return `Hello World! ${this.configService.database.name}`;
  }
  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPG.query('SELECT * FROM tasks', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
