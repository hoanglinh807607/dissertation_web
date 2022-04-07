import {OrderDirection} from './Paging';
import {StatusHomestayEnum} from '../api/enum/StatusHomestayEnum';
import * as moment from 'moment';
import {Constants} from '../shared/helper/constants';

export class PagingInfo {
  keyword: string;
  pageNo: number;
  pageSize: number;
  sortBy: string;
  direction: OrderDirection;

  constructor(pageSize?: number, pageNo?: number) {
    this.keyword = '';
    this.sortBy = '';
    this.direction = OrderDirection.NONE;
    if (pageSize !== undefined) {
      this.pageSize = pageSize;
    } else {
      this.pageSize = 10;
    }
    if (pageNo !== undefined) {
      this.pageNo = pageNo;
    } else {
      this.pageNo = 0;
    }
  }
}

export class UserRequestParams extends PagingInfo {
  isClock: boolean;
  constructor(pageSize?: number, pageNo?: number) {
    super(pageSize, pageNo);
    this.sortBy = "user_id";
  }
}

export class RoleRequestParams extends PagingInfo {
  status: boolean;

  constructor(pageSize?: number, pageNo?: number) {
    super(pageSize, pageNo);
    this.sortBy = "id";
    this.status = true;
    this.direction = OrderDirection.DESC;
  }
}

export class CategoryHomestayRequestParams {
  keyword: string;
  sortBy: string;
  direction: OrderDirection;

  constructor() {
    this.keyword = '';
    this.sortBy = '';
    this.direction = OrderDirection.NONE;
  }
}

export class CategoryUtilityRequestParams {
  nameUtility: string;
  keyword: string;
  sortBy: string;
  direction: string;

  constructor() {
    this.nameUtility = '';
    this.keyword = '';
    this.sortBy = '';
    this.direction = OrderDirection.NONE;
  }
}

export class HomestayAdminRequestParams extends PagingInfo {
  status: StatusHomestayEnum;
  categoryHomestayName: string;
  from: string;
  to: string;

  constructor(pageSize?: number, pageNo?: number) {
    super(pageSize, pageNo);
    this.status = StatusHomestayEnum.UNKNOWN;
    this.categoryHomestayName = '';
    this.from = moment().subtract(30, 'days').from(Constants.DATE_FORMAT_FILTER);
    this.to = moment().format(Constants.DATE_FORMAT_FILTER);
    this.sortBy = "createAt";
    this.direction = OrderDirection.DESC;
  }
}

export class HomestayWebRequestParams extends PagingInfo {
  categoryHomestayName: Array<string>;
  utilityId: Array<string>;
  provinceId: string;
  regionName: Array<string>;
  fromPrice: number;
  toPrice: number;
  status: string;
  from: string;
  to: string;
  timeZone: string;

  constructor(pageSize?: number, pageNo?: number) {
    super(pageSize, pageNo);
    this.status = StatusHomestayEnum.UNKNOWN.toString();
    this.categoryHomestayName = [];
    this.utilityId = [];
    this.regionName = [];
    this.provinceId = '';
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.from = moment().subtract(30, 'days').from(Constants.DATE_FORMAT_FILTER);
    this.to = moment().format(Constants.DATE_FORMAT_FILTER);
  }
}

export class RoomAdminRequestParams extends PagingInfo {
  timeZone: string;
  status: StatusHomestayEnum | string;
  homestayId: string;
  from: string;
  to: string;
  constructor(pageSize?: number, pageNo?: number) {
    super(pageSize, pageNo);
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.status = StatusHomestayEnum.UNKNOWN;
    this.homestayId = '';
    this.from = moment().subtract(30, 'days').from(Constants.DATE_FORMAT_FILTER);
    this.to = moment().format(Constants.DATE_FORMAT_FILTER);
    this.sortBy = "createAt";
    this.direction = OrderDirection.DESC;
  }
}

export class RoomWebRequestParams extends PagingInfo {
  timeZone?: string;
  categoryHomestayId?: Array<string>;
  provinceId?: string;
  regionName?: Array<string>;
  promotionPrice?: boolean;
  fromPrice?: number;
  toPrice?: number;
  status?: StatusHomestayEnum | string;
  from?: string;
  to?: string;
  constructor(pageSize?: number, pageNo?: number) {
    super(pageSize, pageNo);
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.status = StatusHomestayEnum.UNKNOWN;
    this.categoryHomestayId = [];
    this.regionName = [];
    this.provinceId = '';
    this.promotionPrice = undefined;
    this.fromPrice = undefined;
    this.toPrice = undefined;
    this.from = moment().subtract(30, 'days').from(Constants.DATE_FORMAT_FILTER);
    this.to = moment().format(Constants.DATE_FORMAT_FILTER);
    this.sortBy = "createAt";
    this.direction = OrderDirection.DESC;
  }
}

export class UtilityRequestParams extends PagingInfo {
  categoryUtilityId: string;

  constructor(pageSize?: number, pageNo?: number) {
    super(pageSize, pageNo);
    this.categoryUtilityId = '';
  }
}
