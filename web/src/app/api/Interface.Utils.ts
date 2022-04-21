export enum MODE {
  EDIT = 'EDIT',
  NEW = 'NEW',
  VIEW = 'VIEW'
}
export interface IOption {
  value: string | boolean | number;
  label: string;
}
export interface IShowHideColumnOption {
  optionControl: ICheckbox;
  label: string;
}
interface ICheckbox {
  [k: string]: boolean;
}
export interface IObject {
  [k: string]: any;
}
