import {Sort} from './sort';

export interface Pageable {
  sort?: Sort;
  pageSize?: number;
  pageNumber?: number;
  paged?: boolean;
  unpaged?: boolean;
  offset?: number;
}
