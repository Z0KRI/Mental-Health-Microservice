import { IViolentSuicidesModel } from '../models/violent-suicides.model';

export abstract class INEGIMentalHealthRepository {
  abstract getViolentSuicides(): Promise<IViolentSuicidesModel>;
}
