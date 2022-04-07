export interface GeneralApiResponse<T> {
  statusCode: string;
  status: number;
  result?: T;
  errors?: Object;
}
