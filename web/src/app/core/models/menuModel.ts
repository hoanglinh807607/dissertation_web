import {FeatureModel} from './featureModel';
import {Deserializable} from "./deserializable";

export class MenuModel implements Deserializable{
  id?: number;
  roleId?: number;
  featureId?: number;
  action?: string;
  featureModel?: FeatureModel;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
