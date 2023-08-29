import { BaseEntityDto } from '../common/BaseEntityDto';
import { BaseFilter } from '../common/BaseFilter';

export class BillingDto extends BaseEntityDto {
  uniqueId: string;
  customerId: number;
  paymentTypeId: number;
  customerCardNumber: string;
  status: string;   //Receive, Send, Active, NotActive, Locked
  amount: number;
  discountId?: number;
  billingDate: Date;

  // UI
  customerFirstName: string;
  customerLastName: string;
  paymentTypeName: string;
}

export class BillingFilterDto extends BaseFilter {
  paymentTypeId: number;
  status: string;   //Receive, Send, Active, NotActive, Locked
  amount: number;
  minAmount: number;
  maxAmount: number;
  billingDate: Date;
  billingStartDate: Date;
  billingEndDate: Date;

  // UI
  paymentTypeName: string;
}

export class AutoBillingDto extends BaseEntityDto {
  uniqueId: string;
  customerId: number;
  paymentTypeId: number;
  customerCardNumber: string;
  status: string;   //Receive, Send, Active, NotActive, Locked
  amount: number;
  discountId?: number;
  // CreateAutoBillingWithMembership
  planId: number;
  planMonths: number;
  extraDays: number;
  oldMembershipId: number;
}

export class ManualBillingDto extends BaseEntityDto {
  customerId: number;
  planId: number;
  planName: string;
  planMonths: number;
  extraDays: number;
}
