import {Deserializable} from "./deserializable";

export class ImageModel implements Deserializable{
  id?: string;
  roomId?: string;
  url?: string;
  isPreview?: boolean;
  isDeleted?: boolean;
  createAt?: Date;
  updateAt?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
