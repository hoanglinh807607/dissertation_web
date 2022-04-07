import {Sort} from './sort';
import {Pageable} from './pageable';

export interface PageResponse<T> {
  totalPages?: number;
  totalElements?: number;
  sort?: Sort;
  first: boolean;
  last?: boolean;
  numberOfElements?: number;
  pageable?: Pageable;
  content?: Array<T>
  number?: number;
  empty?: boolean;
}
