import {Deserializable} from "./deserializable";

export class ProvinceModel implements Deserializable {
  id?: string;
  name?: string;
  image?: string;
  isDeleted?: boolean;
  createAt?: Date;
  createBy?: string;
  updateAt?: Date;
  updateBy?: string;
  deleteAt?: Date;
  deleteBy?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
