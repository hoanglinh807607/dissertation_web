import {Injectable} from '@angular/core';
import {PostUserRequest} from '../models/PostUserRequest.';
import {UrlAPI} from '../../shared/helper/constants';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BaseService} from './base.service';
import {UserRequestParams} from '../../utils/PagingRequest';
import {Observable} from 'rxjs';
import {BaseResponse} from "../../api/baseResponse";
import {UserModel} from "../models/userModel";
import {GeneralApiResponse} from "../../api/GeneralApiResponse";
import {CustomHttpParamEncoder} from "../../api/CustomHttpParamEncoder";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getUserById(id: number): Observable<any> {
    const apiUrl = UrlAPI.getUsers;
    return this.doGet(apiUrl, id);
  }

  public getUsers(userParams: UserRequestParams): Observable<BaseResponse<UserModel[]>> {
    const queryParameters = new HttpParams({encoder: this.encoder})
      .set('keyword', userParams.keyword)
      .set('pageNo', userParams.pageNo)
      .set('pageSize', userParams.pageSize)
      .set('isClock', userParams.isClock)
      .set('direction', userParams.direction)
      .set('sortBy', userParams.sortBy);
    const apiUrl = UrlAPI.getUsers;
    return this.doGet(apiUrl,'', queryParameters);
  }

  createUser(postUserRequest: PostUserRequest): Observable<BaseResponse<UserModel>> {
    const apiUrl = UrlAPI.getUsers;
    return this.doPost(apiUrl, postUserRequest, 'json');
  }

  updateUser(id: number, postUserRequest: PostUserRequest): Observable<BaseResponse<UserModel>> {
    const apiUrl = UrlAPI.getUsers;
    return this.doPut(apiUrl, postUserRequest, 'json', id);
  }

  deleteUser(id: number): Observable<BaseResponse<UserModel>> {
    const apiUrl = UrlAPI.getUsers;
    return this.doDelete(apiUrl, id);
  }

  resendMailResetPassword(id: number): Observable<any> {
    const apiUrl = UrlAPI.resendMailResetPassword;
    return this.doPut(apiUrl, '','', id);
  }

  updatePassword(email: string, currentPassword: string, newPassword: string): Observable<GeneralApiResponse<string>> {
    const apiUrl = UrlAPI.updatePassword;
    const param = new HttpParams({ encoder: new CustomHttpParamEncoder() })
      .set('email', email)
      .set('currentPassword', currentPassword)
      .set('newPassword', newPassword);
    return this.doPost(apiUrl, param);
  }

}
