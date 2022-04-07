import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {RoomAdminRequestParams} from '../../utils/PagingRequest';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UrlAPI} from '../../shared/helper/constants';
import {PostRoomRequest} from '../models/postRoomRequest';
import {BaseResponse} from "../../api/baseResponse";
import {RoomModel} from "../models/roomModel";
import {GeneralApiResponse} from "../../api/GeneralApiResponse";

@Injectable({
  providedIn: 'root'
})
export class RoomService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  // getListRoomWeb(requestParams: RoomWebRequestParams): Observable<any> {
  //   const queryParameters = new HttpParams({encoder: this.encoder})
  //     .set('timeZone', requestParams.timeZone)
  //     .set('categoryHomestayId', requestParams.categoryHomestayId)
  //     .set('touristAreaId', requestParams.touristAreaId)
  //     .set('provinceId', requestParams.provinceId)
  //     .set('regionName', requestParams.regionName)
  //     .set('from', requestParams.from)
  //     .set('to', requestParams.to)
  //     .set('promotionPrice', requestParams.promotionPrice)
  //     .set('fromPrice', requestParams.fromPrice)
  //     .set('toPrice', requestParams.toPrice)
  //     .set('status', requestParams.status)
  //     .set('keyword', requestParams.keyword)
  //     .set('pageNo', requestParams.pageNo)
  //     .set('pageSize', requestParams.pageSize)
  //     .set('sortBy', requestParams.sortBy)
  //     .set('direction', requestParams.direction)
  //   return this.doGet(UrlAPI.getListRoomsWeb, undefined, queryParameters);
  // }

  getListRoomAdmin(requestParams: RoomAdminRequestParams): Observable<BaseResponse<RoomModel[]>> {
    const queryParameters = new HttpParams({encoder: this.encoder})
      .set('keyword', requestParams.keyword)
      .set('sortBy', requestParams.sortBy)
      .set('direction', requestParams.direction)
      .set('pageNo', requestParams.pageNo)
      .set('pageSize', requestParams.pageSize)
      .set('status', requestParams.status)
      .set('from', requestParams.from)
      .set('to', requestParams.to)
      .set('timeZone', requestParams.timeZone)
      .set('homestayId', requestParams.homestayId);
    return this.doGet(UrlAPI.getListHomestaysAdmin, undefined, queryParameters);
  }

  getRoomById(id: number): Observable<BaseResponse<RoomModel>> {
    const url = UrlAPI.getRoomById.replace('{id}', String(id));
    return this.doGet(url);
  }

  getRoomByHomestayId(homestayId: number): Observable<GeneralApiResponse<RoomModel[]>> {
    const url = UrlAPI.getRoomsByHomestayId.replace('{homestayId}', String(homestayId));
    return this.doGet(url);
  }

  createRoom(postRequest: PostRoomRequest): Observable<BaseResponse<RoomModel>> {
    const apiUrl = UrlAPI.getRooms;
    return this.doPost(apiUrl, postRequest, 'json');
  }

  updateRoom(id: number, postRequest: PostRoomRequest): Observable<BaseResponse<RoomModel>> {
    const apiUrl = UrlAPI.getRooms;
    return this.doPut(apiUrl, postRequest, 'json', id);
  }

  deleteRoom(id: number): Observable<BaseResponse<RoomModel>> {
    const apiUrl = UrlAPI.getRooms;
    return this.doDelete(apiUrl, id);
  }
}
