import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {UrlAPI} from '../../shared/helper/constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService {

  constructor(http: HttpClient) {
    super(http)
  }

  getOrders(userId: string, status: string) {
    const url = UrlAPI.getOrderByUserId.replace('{userId}', userId).replace('{status}', status);
    return this.doGet(url);
  }

  getOrderDetail(OrderId: string) {
    const apiUrl = UrlAPI.getOrderDetailByOrderId.replace('{orderId}', OrderId);
    return this.doPost(apiUrl, null, 'authorization');
  }
}
