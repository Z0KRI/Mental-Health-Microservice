import type { IHeaders } from 'src/common/interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HTTPClass {
  constructor() {}

  public get<T>(
    url: string,
    params?: string,
    headers: IHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  ): Observable<T> {
    const urlWithParams = params ? `${url}?${params}` : url;
    return new Observable<T>((observer) => {
      fetch(urlWithParams, {
        method: 'GET',
        headers: this.getHeaderInit(headers),
      })
        .then((res) => this.handleResponse(res, observer))
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  public patch<T>(
    url: string,
    payload: any = {},
    headers: IHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  ): Observable<T> {
    return new Observable<T>((observer) => {
      fetch(url, {
        method: 'PATCH',
        headers: this.getHeaderInit(headers),
        body: JSON.stringify(payload),
      })
        .then((res) => this.handleResponse(res, observer))
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  public post<T>(
    url: string,
    payload: any = {},
    headers: IHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  ): Observable<T> {
    return new Observable<T>((observer) => {
      fetch(url, {
        method: 'POST',
        headers: this.getHeaderInit(headers),
        body: JSON.stringify(payload),
      })
        .then((res) => this.handleResponse(res, observer))
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  public delete<T>(
    url: string,
    headers: IHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  ): Observable<T> {
    return new Observable<T>((observer) => {
      fetch(url, {
        method: 'DELETE',
        headers: this.getHeaderInit(headers),
      })
        .then((res) => this.handleResponse(res, observer))
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  private getHeaderInit(headers: IHeaders): Record<string, string> {
    return { ...headers };
  }

  private async handleResponse(res: Response, observer: any): Promise<void> {
    const resp = await this.processResp(res);

    if (res.ok) {
      observer.next(resp);
    } else {
      observer.error(resp);
    }

    observer.complete();
  }

  private async processResp(res: Response) {
    const contentType = res.headers.get('Content-Type') || '';
    return contentType.includes('application/json')
      ? await res.json()
      : await res.blob();
  }
}
