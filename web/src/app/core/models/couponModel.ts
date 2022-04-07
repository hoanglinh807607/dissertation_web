export interface CouponModel {
  id?: string;
  code?: string;
  name?: string;
  image?: string;
  startDate?: Date;
  endDate?: Date;
  applyForAll?: boolean;
  categoryHomestayId?: Array<string>;
  discountPercent?: number;
  discountAmount?: number;
  description?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  createAt?: Date;
  updateAt?: string;
}
