import {RoomUtility} from "./roomModel";

export interface PostRoomRequest {
  id: string;
  roomNumber: number;
  roomUtilities: RoomUtility;
  title: string;
  images: Array<string>;
  roomArea: string;
  bedroomNumber: number;
  bathRoomNumber: number;
  bedNumber: number;
  livingroomNumber: number;
  maximumCapacity: number;
  priceRoom: number;
  description: string;
  minimumNightNumber: number;
  maximumNightNumber: number;
  status: boolean;
  isDeleted: boolean;
  createAt: Date;
  createBy: string;
  updateAt: Date;
  updateBy: string;
  deleteAt: Date;
  deleteBy: string;
}
