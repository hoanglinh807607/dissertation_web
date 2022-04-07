import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CategoryUtilityRequestParams} from '../../utils/PagingRequest';
import {Observable} from 'rxjs';
import {UrlAPI} from '../../shared/helper/constants';
import {PostCategoryUtilityRequest} from "../models/PostCategoryUtilityRequest";
import {BaseResponse} from "../../api/baseResponse";
import {CategoryUtilityModel} from "../models/CategoryUtilityModel";

@Injectable({
  providedIn: 'root'
})
export class CategoryUtilityService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getCategoryUtilities(requestParams: CategoryUtilityRequestParams): Observable<BaseResponse<CategoryUtilityModel[]>> {
    const queryParameters = new HttpParams({encoder: this.encoder})
      .set('keyword', requestParams.keyword)
      .set('sortBy', requestParams.sortBy)
      .set('nameUtility', requestParams.nameUtility)
      .set('direction', requestParams.direction);
    return this.doGet(UrlAPI.getCategoryHomestays, undefined, queryParameters);
  }

  getCategoryUtilityById(id: number): Observable<any> {
    const url = UrlAPI.getCategoryUtilities;
    return this.doGet(url, id);
  }

  createCategoryUtility(postRequest: PostCategoryUtilityRequest): Observable<BaseResponse<CategoryUtilityModel>> {
    const apiUrl = UrlAPI.getCategoryUtilities;
    return this.doPost(apiUrl, postRequest, 'json');
  }

  updateCategoryUtility(id: number, postRequest: PostCategoryUtilityRequest): Observable<BaseResponse<CategoryUtilityModel>> {
    const apiUrl = UrlAPI.getCategoryUtilities;
    return this.doPut(apiUrl, postRequest, 'json', id);
  }

  deleteCategoryUtilityById(id: number): Observable<BaseResponse<CategoryUtilityModel>> {
    const apiUrl = UrlAPI.getCategoryUtilities;
    return this.doDelete(apiUrl, id);
  }
}
