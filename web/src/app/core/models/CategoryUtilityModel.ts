import {UtilityModel} from './UtilityModel';
import {Deserializable} from "./deserializable";

export class CategoryUtilityModel implements Deserializable{
  id?: string;
  name?: string;
  isDeleted?: boolean;
  createAt?: Date;
  createBy?: string;
  updateAt?: Date;
  updateBy?: string;
  deletedAt?: Date;
  deleteBy?: string;
  utilityModels?: Array<UtilityModel>;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
