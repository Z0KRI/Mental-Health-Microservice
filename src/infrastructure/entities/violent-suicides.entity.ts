export interface IViolentSuicidesEntity {
  Header: Header;
  Series: Series[];
}

interface Header {
  Name: string;
  Email: string;
}

interface Series {
  INDICADOR: string;
  FREQ: string;
  TOPIC: string;
  UNIT: string;
  UNIT_MULT: string;
  NOTE: string;
  SOURCE: string;
  LASTUPDATE: string;
  STATUS: null;
  OBSERVATIONS: Observation[];
}

interface Observation {
  TIME_PERIOD: string;
  OBS_VALUE: string;
  OBS_EXCEPTION: null;
  OBS_STATUS: string;
  OBS_SOURCE: string;
  OBS_NOTE: string;
  COBER_GEO: string;
}
