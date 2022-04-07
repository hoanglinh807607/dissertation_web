import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BaseService} from './base.service';
import {Observable} from 'rxjs';
import {UrlAPI} from '../../shared/helper/constants';
import {PostHomestayRequest} from '../models/postHomestayRequest';
import {HomestayAdminRequestParams, HomestayWebRequestParams} from '../../utils/PagingRequest';
import {BaseResponse} from "../../api/baseResponse";
import {HomestayModel} from "../models/homestayModel";

@Injectable({
  providedIn: 'root'
})
export class HomestayService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getHomestayWeb(requestParams: HomestayWebRequestParams): Observable<BaseResponse<HomestayModel[]>> {
    const queryParameters = new HttpParams({encoder: this.encoder})
      .set('categoryHomestayName', requestParams.categoryHomestayName.toString())
      .set('utilityId', requestParams.utilityId.toString())
      .set('provinceId', requestParams.provinceId)
      .set('regionName', requestParams.regionName.toString())
      .set('fromPrice', requestParams.fromPrice)
      .set('toPrice', requestParams.toPrice)
      .set('status', requestParams.status)
      .set('from', requestParams.from)
      .set('to', requestParams.to)
      .set('timeZone', requestParams.timeZone)
      .set('keyword', requestParams.keyword)
      .set('pageNo', requestParams.pageNo)
      .set('pageSize', requestParams.pageSize)
      .set('sortBy', requestParams.sortBy)
      .set('direction', requestParams.direction)
    return this.doGet(UrlAPI.getListHomestaysWeb, undefined, queryParameters);
  }

  getHomestayAdmin(requestParams: HomestayAdminRequestParams): Observable<BaseResponse<HomestayModel[]>> {
    const queryParameters = new HttpParams({encoder: this.encoder})
      .set('keyword', requestParams.keyword)
      .set('sortBy', requestParams.sortBy)
      .set('direction', requestParams.direction)
      .set('pageNo', requestParams.pageNo)
      .set('pageSize', requestParams.pageSize)
      .set('status', requestParams.status)
      .set('categoryHomestayName', requestParams.categoryHomestayName)
      .set('from', requestParams.from)
      .set('to', requestParams.to)
    return this.doGet(UrlAPI.getListHomestaysAdmin, undefined, queryParameters);
  }

  getHomestayById(id: number): Observable<BaseResponse<HomestayModel>> {
    const url = UrlAPI.getHomestays;
    return this.doGet(url, id);
  }

  createHomestay(postRequest: PostHomestayRequest): Observable<BaseResponse<HomestayModel>> {
    const apiUrl = UrlAPI.getHomestays;
    return this.doPost(apiUrl, postRequest, 'json');
  }

  updateHomestay(id: number, postRequest: PostHomestayRequest): Observable<BaseResponse<HomestayModel>> {
    const apiUrl = UrlAPI.getHomestays;
    return this.doPut(apiUrl, postRequest, 'json', id);
  }

  deleteHomestay(id: number): Observable<BaseResponse<HomestayModel>> {
    const apiUrl = UrlAPI.getHomestays;
    return this.doDelete(apiUrl, id);
  }

}
