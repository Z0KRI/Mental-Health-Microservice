export interface IViolentSuicidesModel {
  series: series;
}

export interface series {
  indicador: string;
  freq: string;
  topic: string;
  unit: string;
  unit_mult: string;
  note: string;
  source: string;
  lastupdate: string;
  observations: observation;
}

export interface observation {
  time_period: string;
  cobre_geo: string;
}
