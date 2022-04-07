import {LocationSearching} from './locationSearching';
import {HomestayCategoryObject} from "./homestayModel";

export interface PostHomestayRequest {
  userId: string;
  homeCategoryObject: HomestayCategoryObject;
  regionName: string;
  provinceName: string;
  name: string;
  address: string;
  image: string;
  description: string;
  checkInTime: string;
  checkOutTime: string;
  accommodationRules: string;
  coordinate: LocationSearching;
  totalReviewScore: number;
  listUserId: Array<string>;
  version: number;
  status: number;
  isDeleted: boolean;
}
