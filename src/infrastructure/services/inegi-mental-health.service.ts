import { Inject, Injectable } from '@nestjs/common';
import { HTTPClass } from '../common/classes';
import { firstValueFrom } from 'rxjs';
import { IViolentSuicidesResponse } from '../interfaces';

@Injectable()
export class INEGIService {
  private url: string =
    'https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/{indicator}/es/0700/true/BISE/2.0/{token}?type=json';
  constructor(
    @Inject(HTTPClass)
    private readonly http: HTTPClass,
  ) {}
  async violentSuicides(): Promise<IViolentSuicidesResponse> {
    const url = this.generateUrl('6200240526');
    return await firstValueFrom(this.http.get<IViolentSuicidesResponse>(url));
  }

  private generateUrl(indicator: string): string {
    return this.url
      .replace('{indicator}', indicator)
      .replace('{token}', '7d048445-a01b-ef31-7f7f-59660f219fe7');
  }
}
