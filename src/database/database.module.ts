import { Module, Global } from '@nestjs/common';
import { Client } from 'pg';

const API_KEY = '23r3485u3459342';
const API_KEY_PROD = 'wdsncjfedb3294898234';

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'my_db',
  password: '123456',
  port: 5432,
});

client.connect();

@Global()
@Module({
  providers: [
    {
      provide: 'apiKey',
      useValue: process.env.NODE_ENV === 'production' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      useValue: client,
    },
  ],
  exports: ['apiKey', 'PG'],
})
export class DatabaseModule {}
