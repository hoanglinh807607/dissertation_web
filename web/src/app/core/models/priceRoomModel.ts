export interface PriceRoomModel {
  id?: string;
  priceInWeek?: number;
  priceWeekend?: number;
  discountType?: string;
  discount?: number;
  promotionAmount?: number;
  priceDiscountOneMonth?: number;
  discountAmountByMonth?: number;
  isActive?: boolean;
  discountByGroups?: Array<DiscountByGroup>;
}

export interface DiscountByGroup {
  peopleNumber: number;
  discount: number;
}
