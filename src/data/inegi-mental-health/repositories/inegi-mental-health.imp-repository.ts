import { IViolentSuicidesModel } from 'src/domain/inegi-mental-health/models/violent-suicides.model';
import { INEGIMentalHealthRepository } from 'src/domain/inegi-mental-health/repositories/inegi-mental-health.repository';
import { INEGIService } from 'src/infrastructure/services/inegi-mental-health.service';
import { ViolentSuicidesMapper } from '../mappers/violent-suicides.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class INEGIMentalHealthImpRepository extends INEGIMentalHealthRepository {
  constructor(private readonly service: INEGIService) {
    super();
  }

  override getViolentSuicides(): Promise<IViolentSuicidesModel> {
    return this.service
      .violentSuicides()
      .then((resp) => ViolentSuicidesMapper.toMap(resp));
  }
}
