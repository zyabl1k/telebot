import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from '../../config';

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: './backend/.env',
        load: [config],
        isGlobal: true
      })
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {}
