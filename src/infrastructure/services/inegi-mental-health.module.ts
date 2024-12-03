import { Module } from '@nestjs/common';
import { INEGIService } from './inegi-mental-health.service';
import { HTTPClass } from '../common/classes';
import { INEGIMentalHealthImpRepository } from 'src/data/inegi-mental-health/repositories/inegi-mental-health.imp-repository';

@Module({
  providers: [INEGIService, HTTPClass, INEGIMentalHealthImpRepository],
  exports: [INEGIService, INEGIMentalHealthImpRepository],
})
export class INEGIMentalHealthModule {}
