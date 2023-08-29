export class MembershipDto {
  id: number;
  isDeleted: boolean;
  name: string;

  planId: number;
  billingId?: number;
  customerId: number;
  status: string;   //Request, Active, NotActive, Locked
  startDate: Date;
  endDate: Date;
  extraEndDate: Date;
  autoActive: boolean;

  // UI
  planName: string;
  customerName: string;
  remainDays: number;
}
