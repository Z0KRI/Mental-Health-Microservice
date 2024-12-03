import { IViolentSuicidesModel } from 'src/domain/inegi-mental-health/models/violent-suicides.model';
import { IViolentSuicidesEntity } from 'src/infrastructure/entities';

export class ViolentSuicidesMapper {
  static toMap(entity: IViolentSuicidesEntity): IViolentSuicidesModel {
    const Series = entity.Series[0];

    return {
      series: {
        freq: Series.FREQ,
        indicador: Series.INDICADOR,
        lastupdate: Series.LASTUPDATE,
        note: Series.NOTE,
        observations: {
          cobre_geo: Series.OBSERVATIONS[0].COBER_GEO,
          time_period: Series.OBSERVATIONS[0].TIME_PERIOD,
        },
        source: Series.SOURCE,
        topic: Series.TOPIC,
        unit: Series.UNIT,
        unit_mult: Series.UNIT_MULT,
      },
    };
  }
}
