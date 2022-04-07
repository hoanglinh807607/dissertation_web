import {CategoryHomestayModel} from './CategoryHomestayModel';
import {LocationSearching} from './locationSearching';
import {StatusHomestayEnum} from '../../api/enum/StatusHomestayEnum';
import {Deserializable} from "./deserializable";

export class HomestayModel implements Deserializable{
  id?: string;
  userId?: string;
  homeCategoryObject?: HomestayCategoryObject;
  regionName?: string;
  provinceName?: string;
  name?: string;
  address?: string;
  image?: string;
  description?: string;
  checkInTime?: string;
  checkOutTime?: string;
  accommodationRules?: string;
  coordinate?: LocationSearching;
  totalReviewScore?: number;
  status?: StatusHomestayEnum;
  listUserIdLove: string[];
  isDeleted?: boolean;
  createAt?: Date;
  createBy?: string;
  updateAt?: Date;
  updateBy?: string;
  deleteAt?: Date;
  deleteBy?: string;
  categoryHomestayModel?: CategoryHomestayModel;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

export interface HomestayCategoryObject {
  name: string;
  homestayForm: string;
}
