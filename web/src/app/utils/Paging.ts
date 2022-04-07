export class Sort {
  public sorted: boolean;
  public unsorted: boolean;
  public orders: Order[];
}

export class Paging {
  public totalPages?: number;
  public totalElements?: number;
  last?: boolean;
  public size?: number;
  public number?: number;
  first?: boolean;
  public numberOfElements?: number;
  public sort?: Sort;
  public pageable: {
    offset?: number;
    pageNumber?: number;
    pageSize?: number;
    paged?: boolean;
    unpaged?: boolean;
  };

  public content?: any[];

  public constructor() {
  }
}

export class Order {
  constructor(public property: string, public direction: OrderDirection) {
  }
}

export enum OrderDirection {
  ASC = "ASC", DESC = "DESC", NONE = ""
}
