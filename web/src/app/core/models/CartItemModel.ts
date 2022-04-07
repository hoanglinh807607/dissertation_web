import {Deserializable} from "./deserializable";

export class CartItemModel implements Deserializable {
  id?: string;
  bookingCode?: string;
  homestayId?: string;
  version?: string;
  numberCustomer?: number;
  checkInDate?: Date;
  checkOutDate?: Date;
  numberNight?: number;
  originPrice?: number;
  discountPrice?: number;
  createAt?: Date;
  createBy?: string;
  updateAt?: Date;
  updateBy?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
