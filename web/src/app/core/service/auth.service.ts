import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {PostLoginRequest} from '../../api/postLoginRequest';
import {Observable} from 'rxjs';
import {UrlAPI} from '../../shared/helper/constants';
import {PostUserRequest} from '../models/PostUserRequest.';
import {GeneralApiResponse} from "../../api/GeneralApiResponse";
import {UserModel} from "../models/userModel";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
  }

  login(loginRequest: PostLoginRequest): Observable<GeneralApiResponse<UserModel>> {
    const apiUrl = UrlAPI.login;
    return this.doPost(apiUrl, loginRequest,'json');
  }

  registerUser(signUpRequest: PostUserRequest): Observable<GeneralApiResponse<UserModel>> {
    const apiUrl = UrlAPI.signUp;
    return this.doPost(apiUrl, signUpRequest, 'json');
  }
}

