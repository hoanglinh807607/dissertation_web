import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UtilityRequestParams} from '../../utils/PagingRequest';
import {UrlAPI} from '../../shared/helper/constants';
import {BaseService} from './base.service';
import {Observable} from 'rxjs';
import {BaseResponse} from "../../api/baseResponse";
import {UtilityModel} from "../models/UtilityModel";

@Injectable({
  providedIn: 'root'
})
export class UtilityService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getUtility(requestParams: UtilityRequestParams): Observable<BaseResponse<UtilityModel[]>> {
    const queryParameters = new HttpParams({encoder: this.encoder})
      .set('keyword', requestParams.keyword)
      .set('sortBy', requestParams.sortBy)
      .set('direction', requestParams.direction)
      .set('pageNo', requestParams.pageNo)
      .set('pageSize', requestParams.pageSize)
      .set('categoryUtilityId', requestParams.categoryUtilityId);
    return this.doGet(UrlAPI.getUtilities, undefined, queryParameters);
  }

  getUtilityById(id: number): Observable<BaseResponse<UtilityModel>> {
    const url = UrlAPI.getUtilities;
    return this.doGet(url, id);
  }

  createUtility(postRequest: UtilityModel): Observable<BaseResponse<UtilityModel>> {
    const apiUrl = UrlAPI.getUtilities;
    return this.doPost(apiUrl, postRequest, 'json');
  }

  updateUtility(id: number, postRequest: UtilityModel): Observable<BaseResponse<UtilityModel>> {
    const apiUrl = UrlAPI.getUtilities;
    return this.doPut(apiUrl, postRequest, 'json', id);
  }

  deleteUtility(id: number): Observable<BaseResponse<UtilityModel>> {
    const apiUrl = UrlAPI.getUtilities;
    return this.doDelete(apiUrl, id);
  }
}
