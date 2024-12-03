import { INEGIMentalHealthImpRepository } from './data/inegi-mental-health/repositories/inegi-mental-health.imp-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly repository: INEGIMentalHealthImpRepository) {}

  async getViolentSuicides(): Promise<any> {
    const data = await this.repository.getViolentSuicides();
    return data;
  }
}
