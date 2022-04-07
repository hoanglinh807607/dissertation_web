import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GoogleAPI} from '../../shared/helper/constants';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(public http: HttpClient) { }

  // getCountryCode(latitude: string, longitude: string) {
  //   return this.http.get()
  // }

  getAddress(latitude: string, longitude: string) {
    return this.http.get(GoogleAPI.googleGetCountryCode.replace('{long}', longitude).replace('{lat}', latitude)).pipe(
      map((data: any) => {
        const addresses = data && data.results && data.results.length > 0 && data.results[0].formatted_address
        return addresses;
      })
    );
  }
}
