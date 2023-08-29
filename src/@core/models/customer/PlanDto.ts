export class PlanDto {
  id: number;
  name: string = null;
  status: string = null;
  price: number = null;
  description: string = null;
  paypalPlanId: string = null;
  planMonths: number = null;
  extraDays: number = null;
  planTypeId: number = null;
  permissions?: number[] = [];
  permissionNames?: string[] = [];
}

export class MembershipPlan {
  planId: number;
  planName: string;
  description: string;
  planPrice: number;
  planMonths: number;
  extraDays: number;
  paypalPlanId: string;
}