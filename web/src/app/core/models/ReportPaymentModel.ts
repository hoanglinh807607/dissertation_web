import {Deserializable} from "./deserializable";
import {CartItemModel} from "./CartItemModel";

export class ReportPaymentModel implements Deserializable {
  id?: string;
  code?: string;
  transactionId?: string;
  transactionType?: string;
  date: Date;
  totalPayment: number;
  cartItemList: CartItemModel[];
  amountCouponUser: string;
  total: string;
  discountTua: string;
  userId: string;
  orderStatus: string;
  createAt?: Date;
  createBy?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
