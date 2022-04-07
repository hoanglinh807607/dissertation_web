import {RoleModel} from './roleModel';
import {Deserializable} from "./deserializable";

export class UserModel implements Deserializable {
  id?: number;
  fullName?: string;
  password?: string;
  emailAddress?: string;
  phoneNumber?: string;
  address?: string;
  gender?: GenderEnum;
  birthDate?: string;
  profilePicture?: string;
  introduceYourself?: string;
  isLocked?: boolean;
  isDeleted?: boolean;
  createAt?: string;
  createBy?: string;
  updateAt?: string;
  updateBy?: string;
  roles?: Array<RoleModel>;
  resendResetPassword?: boolean;
  token: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
export type GenderEnum = 'Male' | 'Female' | 'Unknown';
