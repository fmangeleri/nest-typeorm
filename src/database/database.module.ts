import { Module, Global } from '@nestjs/common';

const API_KEY = '23r3485u3459342';
const API_KEY_PROD = 'wdsncjfedb3294898234';

@Global()
@Module({
  providers: [
    {
      provide: 'apiKey',
      useValue: process.env.NODE_ENV === 'production' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['apiKey'],
})
export class DatabaseModule {}
