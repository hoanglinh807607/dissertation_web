import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BaseService} from './base.service';
import {CategoryHomestayRequestParams} from '../../utils/PagingRequest';
import {Observable} from 'rxjs';
import {UrlAPI} from '../../shared/helper/constants';
import {PostCategoryHomestayRequest} from '../models/postCategoryHomestayRequest';
import {BaseResponse} from "../../api/baseResponse";
import {CategoryHomestayModel} from "../models/CategoryHomestayModel";

@Injectable({
  providedIn: 'root'
})
export class CategoryHomestaysService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getCategoryHomestays(requestParams: CategoryHomestayRequestParams): Observable<BaseResponse<CategoryHomestayModel[]>> {
    const queryParameters = new HttpParams({encoder: this.encoder})
      .set('keyword', requestParams.keyword)
      .set('sortBy', requestParams.sortBy)
      .set('direction', requestParams.direction);
    return this.doGet(UrlAPI.getCategoryHomestays, undefined, queryParameters);
  }

  getCategoryHomestayById(id: number): Observable<BaseResponse<CategoryHomestayModel>> {
    const url = UrlAPI.getCategoryHomestays;
    return this.doGet(url, id);
  }

  createCategoryHomestays(postRequest: PostCategoryHomestayRequest): Observable<BaseResponse<CategoryHomestayModel>> {
    const apiUrl = UrlAPI.getCategoryHomestays;
    return this.doPost(apiUrl, postRequest, 'json');
  }

  updateCategoryHomestays(id: number, postRequest: PostCategoryHomestayRequest): Observable<BaseResponse<CategoryHomestayModel>> {
    const apiUrl = UrlAPI.getCategoryHomestays;
    return this.doPut(apiUrl, postRequest, 'json', id);
  }

  deleteCategoryHomestays(id: number): Observable<BaseResponse<CategoryHomestayModel>> {
    const apiUrl = UrlAPI.getCategoryHomestays;
    return this.doDelete(apiUrl, id);
  }
}
