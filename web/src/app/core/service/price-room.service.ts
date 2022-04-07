import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PriceRoomService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  // createPriceRoom(postRequest: PostPriceRoomRequest): Observable<any> {
  //   const apiUrl = UrlAPI.getPriceRooms;
  //   return this.doPost(apiUrl, postRequest, 'json');
  // }
  //
  // updatePriceRoom(id: number, postRequest: PostPriceRoomRequest): Observable<any> {
  //   const apiUrl = UrlAPI.getPriceRooms;
  //   return this.doPut(apiUrl, postRequest, 'json', id);
  // }
  //
  // deletePriceRoom(id: number): Observable<any> {
  //   const apiUrl = UrlAPI.getPriceRooms;
  //   return this.doDelete(apiUrl, id);
  // }
}
