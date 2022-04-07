import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BaseService} from './base.service';
import {RoleRequestParams} from '../../utils/PagingRequest';
import {Observable} from 'rxjs';
import {UrlAPI} from '../../shared/helper/constants';
import {BaseResponse} from '../../api/baseResponse';
import {UserModel} from '../models/userModel';
import {RoleModel} from "../models/roleModel";

@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getRoles(roleRequestParams: RoleRequestParams): Observable<BaseResponse<RoleModel[]>> {
    const queryParameters = new HttpParams({encoder: this.encoder})
      .set('keyword', roleRequestParams.keyword)
      .set('pageNo', roleRequestParams.pageNo)
      .set('pageSize', roleRequestParams.pageSize)
      .set('sortBy', roleRequestParams.sortBy)
      .set('direction', roleRequestParams.direction)
      .set('status', roleRequestParams.status);
    const apiUrl = UrlAPI.getRoles;
    return this.doGet(apiUrl,'', queryParameters);
  }

  getRoleById(idRole: number): Observable<BaseResponse<RoleModel>> {
    const apiUrl = UrlAPI.getRoles;
    return this.doGet(apiUrl, idRole);
  }

  getRoleTemplate(): Observable<BaseResponse<RoleModel>> {
    const apiUrl = UrlAPI.getTemplatesRoles;
    return this.doGet(apiUrl);
  }

  createRoles(): Observable<BaseResponse<RoleModel>> {
    const apiUrl = UrlAPI.getRoles;
    return this.doGet(apiUrl);
  }

  updateRoles(idRole: number, postRoleRequest: RoleModel): Observable<BaseResponse<RoleModel>> {
    const apiUrl = UrlAPI.getRoles;
    return this.doPut(apiUrl, postRoleRequest, 'json', idRole);
  }

  enableRoles(idRole: number): Observable<any> {
    const apiUrl = UrlAPI.editRoleEnable.replace('{id}', idRole+'');
    return this.doPut(apiUrl, '');
  }

  disableRoles(idRole: number): Observable<any> {
    const apiUrl = UrlAPI.editRoleDisable.replace('{id}',idRole+'');
    return this.doPut(apiUrl,'');
  }

  deleteRole(idRole: number): Observable<BaseResponse<UserModel>> {
    const apiUrl = UrlAPI.getUsers;
    return this.doDelete(apiUrl, idRole);
  }
}
