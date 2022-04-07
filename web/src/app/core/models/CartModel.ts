import {StatusOrderEnum} from '../../api/enum/StatusOrderEnum';
import {Deserializable} from "./deserializable";

export class CartModel implements Deserializable {
  id?: string;
  userId?: string;
  couponCode?: string;
  paymentMethod?: string;
  status?: StatusOrderEnum;
  isDeleted?: boolean;
  createAt?: Date;
  updateAt?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
