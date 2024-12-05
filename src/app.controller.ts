import { MentalHealthPatters } from './common/const/mental-health.const';
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @MessagePattern(MentalHealthPatters.INDICATOR)
  getMentalHealth() {
    return this.appService.getViolentSuicides();
  }

  @MessagePattern(MentalHealthPatters.SUICIDES_REGISTERED)
  getSuicidesRegistered() {
    return this.appService.getSuicidesRegistered();
  }

  @MessagePattern(MentalHealthPatters.Entities_Violent_Deaths)
  getEntitiesViolentDeaths() {
    return this.appService.getEntitiesViolentDeaths();
  }
}
