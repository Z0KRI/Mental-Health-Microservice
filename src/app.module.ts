import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { INEGIMentalHealthModule } from './infrastructure/services';

@Module({
  imports: [INEGIMentalHealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
