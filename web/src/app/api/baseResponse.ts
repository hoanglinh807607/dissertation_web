import {ApiMessage} from './apiMessage';

export interface BaseResponse<T> {
  ok?: boolean;
  messages?: Array<ApiMessage>;
  data?: T;
  errorCode?: string;
}
