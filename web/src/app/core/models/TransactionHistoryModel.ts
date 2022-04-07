import {Deserializable} from "./deserializable";

export class TransactionHistoryModel implements Deserializable {
  id?: string;
  transactionType?: string;
  fullName?: string;
  homestayObject?: HomestayInTransactionObject;
  emailAddress: string;
  currencyCode: string;
  toatalAmount: number;
  status: string;
  host: string;
  createAt?: Date;
  createBy?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

export interface HomestayInTransactionObject {
  homestayId: string;
  homestayName: string;
  priceBooking: string;
}
