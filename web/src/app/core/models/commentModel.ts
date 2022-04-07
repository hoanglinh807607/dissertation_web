import {UserModel} from './userModel';
import {Deserializable} from "./deserializable";

export class CommentModel implements Deserializable{
  id?: string;
  userId?: string;
  homestayId?: string;
  content?: string;
  reviewScore?: number;
  isDeleted?: string;
  createAt?: Date;
  userModel?: UserModel;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
