import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParameterCodec, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {LocalStorageService} from './local-storage.service';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Constants} from "../../shared/helper/constants";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  static injector: Injector;
  protected _http: HttpClient;
  private _router: Router;
  protected localStorage: LocalStorageService;
  protected tokenKey: string | any = '';
  protected encoder: HttpParameterCodec;

  constructor(public http: HttpClient) {
    if (BaseService.injector) {
      this._http = http;
      this._router = BaseService.injector.get(Router);
      this.localStorage = BaseService.injector.get(LocalStorageService);
    }
  }

  // params add to url
  // queryParams được truyền dưới dạng ?
  protected doGet(apiUrl: string, params?: any, queryParams?: any): Observable<any> {
    let header: HttpHeaders;
    header = this.createHeader('');

    const url = (params === undefined || params === '') ? `${apiUrl}` : `${apiUrl}/${params}`;

    return this.http.get(Constants.gatewayUrl + url, {params: queryParams, headers: header}).pipe(
      map((response: any) => {
       return response;
      }),
      catchError((error: any) => {
        this.handleError(error);
        return throwError(error);
      }));
  }

  protected doDelete(apiUrl: string, params?: any): Observable<any> {
    let header: HttpHeaders;
    header = this.createHeader('');

    const url = (params === undefined) ? `${apiUrl}` : `${apiUrl}/${params}`;

    return this.http.delete(Constants.gatewayUrl + url, {headers: header}).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        this.handleError(error);
        return throwError(error);
      }));
  }

  protected doPost(apiUrl: string, data: any, type?: string, hideGlobalAlert?: boolean): Observable<any> {
    const bodyString = JSON.stringify(data);

    let header: HttpHeaders;
    header = this.createHeader(type);

    if (type === 'json') {
      data = bodyString;
    }

    return this.http.post(`${apiUrl}`, data, {headers: header}).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err) => {
        this.handleError(err, hideGlobalAlert);
        return throwError(err);
      })
    )
  }

  protected doPut(apiUrl: string, data: any, type?: string, params?: any, hideGlobalAlert?: boolean): Observable<any> {
    const bodyString = JSON.stringify(data);
    let header: HttpHeaders;
    header = this.createHeader(type);

    const url = (params === undefined) ? `${apiUrl}` : `${apiUrl}/${params}`;

    if (type === 'json') {
      data = bodyString;
    }

    return this.http.put(Constants.gatewayUrl + `${url}`, data, {headers: header}).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err) => {
        this.handleError(err, hideGlobalAlert);
        return throwError(err);
      })
    )
  }

  // private doResponse(response: any, hideGlobalAlert?: boolean) {
  //   if ( response !== undefined) {
  //     if (response.status)
  //   }
  // }

  private createHeader(type?: string) {
    let contentType = '';
    const token = localStorage.getItem('token');
    if (token !== null || token !== undefined) {
      this.tokenKey = token;
    } else {
      this.tokenKey = '';
    }

    const headerOption: any = {
      'token': `${this.tokenKey}`,
    };

    switch (type) {
      case '':
      case 'json':
        contentType = 'application/json';
        break;
      case 'text':
        contentType = 'text/plain';
        break;
      case 'authentication':
        contentType = 'application/x-www-form-urlencoded';
        break;
      case 'empty':
        contentType = '';
        break;
      case 'file':
        contentType = 'multipart/form-data';
        break;
      case 'undefined':
        contentType = 'undefined';
        break;
      default:
        contentType = 'application/json';
        break;
    }

    if (contentType.length > 0) {
      headerOption['Content-Type'] = contentType;
    }

    const headers = new HttpHeaders(headerOption);

    return headers;
  }

  protected handleError(errorResponse: any, hideGlobalAlert = false) {
    if (errorResponse.status == 404) {
      if (location.pathname != '/404' && location.pathname != '/app/404' && location.pathname != '/admin/404' && location.pathname != '/app/auth/login') {
        this._router.navigate(['/404']);
      }
    }
    if (errorResponse.status == 503) {
      if (location.pathname != '/503') {
        this.doLogout();
        this._router.navigate(['/503']);
      }
    }
    // if (!hideGlobalAlert) {
    //   if (errorResponse.status == 500) {
    //     this.a
    //   }
    // }
    if (errorResponse.status == 403 || errorResponse == 504) {
      this.doLogout();
    }
  }

  doLogout() {
    this.localStorage.doLogout();
  }

  isNull(value: any) {
    return value == null || value == undefined;
  }

}
