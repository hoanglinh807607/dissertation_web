import {Deserializable} from "./deserializable";

export class FeatureModel implements Deserializable{
  id?: number;
  name?: string;
  iconUrl?: string;
  code?: string;
  path?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
