import {MenuModel} from './menuModel';
import {Deserializable} from "./deserializable";

export class RoleModel implements Deserializable {
  roleId?: number;
  code?: string;
  name?: string;
  status?: boolean;
  isDeleted?: boolean;
  createAt?: string;
  updateAt?: string;
  deleteAt?: string;
  menuModels?: MenuModel;
  canDeleteOrDisable?: boolean;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
