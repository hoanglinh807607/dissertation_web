import {GenderEnum} from './userModel';

export interface PostUserRequest {
  fullName?: string;
  password?: string;
  emailAddress?: string;
  phoneNumber?: string;
  address?: string;
  gender?: GenderEnum;
  birthDate?: string;
  isLocked?: boolean;
  profilePicture?: string;
  isDeleted?: string;
  roleIds?: Array<number>;
}
