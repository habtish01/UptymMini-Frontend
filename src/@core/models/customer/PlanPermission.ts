export class PlanPermissionDrp {
  planId: number;
  planName: string;
  planPrice: number;
  planPlanMonths: number;
  planExtraDays: number;
  planPaypalPlanId: string;
  planStatus: string;
  permissionId: number;
  permissionName: string;
  limitDays?: number;
  limitJobs?: number;
}

export class SubPermission {
  permissionId: number;
  permissionName: string;
  limitDays?: number;
  limitJobs?: number;
}

export class PlanPermission {
  planId: number;
  planName: string;
  planPrice: number;
  planMonths: number;
  extraDays: number;
  paypalPlanId: string;
  color?: string;
  icon?: string;
  subPermissions: SubPermission[];
}