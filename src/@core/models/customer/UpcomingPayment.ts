import { BaseEntityDto } from "../common/BaseEntityDto";

export class UpcomingPaymentDto extends BaseEntityDto {
  customerId: number;
  amount: number;
  targetDate: Date;
  details: string;
  emailReminderStatus: string;
  phoneReminderStatus: string;
  status: string;

  // UI
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhoneNumber: string;
}

export class UpcomingPaymentFilterDto {
  amount: number;
  minAmount: number;
  maxAmount: number;
  targetDate: Date;
  targetStartDate: Date;
  targetEndDate: Date;
  emailReminderStatus: string;
  phoneReminderStatus: string;
  status: string;
}
