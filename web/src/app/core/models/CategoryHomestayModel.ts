import {Deserializable} from "./deserializable";

export class CategoryHomestayModel implements Deserializable{
  id?: string;
  name?: string;
  homestayForm?: string;
  isDeleted?: boolean;
  createAt?: Date;
  createBy?: string;
  updateAt?: Date;
  updateBy?: string;
  deletedAt?: Date;
  deleteBy?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
