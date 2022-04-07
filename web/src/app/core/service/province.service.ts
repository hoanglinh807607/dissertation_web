import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlAPI} from '../../shared/helper/constants';
import {BaseService} from './base.service';
import {PostProvinceRequest} from '../models/postProvinceRequest';
import {PagingInfo} from '../../utils/PagingRequest';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getProvinceById(id: number): Observable<any> {
    const apiUrl = UrlAPI.getProvinces;
    return this.doGet(apiUrl, id);
  }

  getProvinces(requestParams: PagingInfo): Observable<any> {
    const queryParameters = new HttpParams({encoder: this.encoder})
      .set('keyword', requestParams.keyword)
      .set('pageNo', requestParams.pageNo)
      .set('pageSize', requestParams.pageSize)
      .set('direction', requestParams.direction)
      .set('sortBy', requestParams.sortBy);
    const apiUrl = UrlAPI.getProvinces;
    return this.doGet(apiUrl,'', queryParameters);
  }

  createProvince(postRequest: PostProvinceRequest): Observable<any> {
    const apiUrl = UrlAPI.getProvinces;
    return this.doPost(apiUrl, postRequest, 'json');
  }

  updateProvince(id: number, postRequest: PostProvinceRequest): Observable<any> {
    const apiUrl = UrlAPI.getProvinces;
    return this.doPut(apiUrl, postRequest, 'json', id);
  }

  deleteProvince(id: number): Observable<any> {
    const apiUrl = UrlAPI.getProvinces;
    return this.doDelete(apiUrl, id);
  }
}
