import {Deserializable} from "./deserializable";

export class UtilityModel implements Deserializable {
  id?: string;
  categoryUtilityId?: string;
  name?: string;
  urlIcon?: string;
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
