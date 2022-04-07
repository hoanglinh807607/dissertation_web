import {HomestayModel} from './homestayModel';
import {Deserializable} from "./deserializable";

export class RoomModel implements Deserializable{
  id?: string;
  roomNumber?: string;
  roomUtilities?: RoomUtility;
  title?: string;
  images?: Array<string>;
  roomArea?: string;
  bedroomNumber?: number;
  bathRoomNumber?: number;
  bedNumber?: number;
  livingroomNumber?: number;
  maximumCapacity?: number;
  priceRoom?: PriceRoom;
  description?: string;
  minimumNightNumber?: number;
  maximumNightNumber?: number;
  status?: boolean;
  isDeleted?: boolean;
  createAt?: Date;
  createBy?: string;
  updateAt?: Date;
  updateBy?: string;
  deleteAt?: Date;
  deleteBy?: string;
  homestayModel?: HomestayModel;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

export interface RoomUtility {
  nameUtilityCategory: string;
  utilities: Utility[];
}

export interface Utility {
  id: string;
  name: string;
  urlIcon: string;
}

export interface PriceRoom {
  id: string;
  priceInWeek: number;
  priceWeekend: number;
  discountType: string;
  discount: number;
  discountAmount: number;
  priceDiscountOneMonth: number;
  discountAmountByMonth: number;
  isActive: boolean;
  discountByGroups: DiscountByGroup[];
}

export interface DiscountByGroup {
  peopleNumber: number;
  discount: number;
}
