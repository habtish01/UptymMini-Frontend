//#region Application
export enum ApplicationRolesEnum {
  SuperAdmin = 1,
  Finance = 2,
  Admin = 3,
  MaintenanceManager = 4,
  Facility = 5,
  Engineer = 6,
  Encoders = 7,
  ProductionManager = 8,
  LeadEngineer = 10,
  SeniorEngineer = 11,
  Coordinator = 12,
}
export enum UserRoleLevelsEnum {
  MaintenanceManager = 4,
  Facility = 5,
  Engineer = 6,
  ProductionManager = 7,
}
export enum PlansEnum {
  Trial = 1,
  Basic = 2,
  Premium = 3,
  Business = 4,
  Analytics = 5,
}
export enum PermissionsEnum {
  EquipementManagement = 1,
  MaintenanceManagement = 2,
  Reports = 3,
  Analytics = 4,
  ManageHealthFacilities = 5,
  ViewJobs = 6,
  BuildProfile = 7,
  ApplyJobs = 8,
  ManageMetaData = 9,
}

export enum PaymentTypeEnum {
  ManualPayment = 1,
  PayPal = 2,
  Stripe = 3,
}
export enum UserStatusEnum {
  Active = 1,
  NotActive = 2,
  Locked = 3,
}
export enum UserTransactionTypesEnum {
  NameChanging = 1,
  IsActiveChanging = 2,
  EmailChanging = 3,
  PasswordChanging = 4,
  PhoneChanging = 5,
  AddressChanging = 6,
  AccountLock = 7,
  Login = 8,
  Logout = 9,
  ForgetPassword = 10,
  ResetPassword = 11,
}
export enum ActionOfAuditEnum {
  Create = 1,
  Update = 2,
  Activate = 3,
  Deactivate = 4,
  CreateFromDuplicate = 5,
}

export enum MembershipStatusEnum {
  Request = 1,
  Expired = 2,
  Active = 3,
  Disabled = 4,
}

export enum BillingStatusEnum {
  InProgress = 1,
  Active = 2, // Approved
  NotActive = 3,
  Locked = 4,
  Expired = 5,
}

export enum NormalStatusEnum {
  Active = 1,
  NotActive = 2,
  Locked = 3,
}

export enum ReminderStatusEnum {
  Sent = 1,
  NotSent = 2,
}

export enum PaypalPlanStatusEnum {
  Active = 1,
  Inactive = 2,
}

export enum CustomerTypesEnum {
  FreelanceEngineer = 1,
  Vendors = 2,
  Facilities = 3,
}

export enum ExpirationStatusEnum {
  Active = 1,
  Expired = 2,
  ExtraExpired = 3,
}

export enum MenuTypesEnum {
  Single = 1,
  Main = 2,
  Submenu = 3,
}

//#endregion

//#region Metadata
export enum ContinentEnum {
  Asia = 1,
  Africa = 2,
  NorthAmerica = 3,
  SouthAmerica = 4,
  Antarctica = 5,
  Europe = 6,
  Australia = 7,
}

export enum CountryPeriodEnum {
  Weekly = 1,
  Monthly = 2,
  Quarterly = 3,
  Annualy = 4,
}
export enum EquipmentStatus {
  Functional = 1,
  PartialyFunctional = 2,
  NonFunctiona = 3,
}
export enum EquipmentScheduleTypeEnum {
  Preventive = 1,
  Inspection = 2,
}
export enum ContractTypeEnum {
  Warranty = 1,
  Service = 2,
}
export enum ScheduleIntervalEnum {
  Daily = 1,
  Weekly = 2,
  Monthly = 3,
  Yearly = 4,
}

export enum FriendlyScheduleIntervalEnum {
  "Daily" = 1,
  "Every Week" = 2,
  "Every Two Weeks" = 3,
  "Every Month" = 4,
  "Every Two Months" = 5,
  "Every Three Months" = 6,
  "Every Six Months" = 7,
  "Every Year" = 8,
  "Custom" = 9,
  "Hourly" = 10,
}

export enum CustomscheduleIntervalEnum {
  "Day(s)" = 1,
  "Week(s)" = 2,
  "Month(s)" = 3,
  "Year(s)" = 4,
}
export enum DocumentationTypesEnum {
  Installation = 1,
  Troubleshoot = 2,
  UserManual = 3,
  OperationsManual = 4,
  TechnicalManual = 5,
  TechnicalBook = 6,
}
export enum AssignedtoEnum {
  "Site User" = 1,
  "Engineer" = 2,
}

export enum EngineerType {
  "internal" = 1,
  "external" = 2,
  "undercontract" = 3,
}
export enum MaintenanceTypeEnum {
  Curative = 1,
  Preventive = 2,
  Installation = 3,
  Upgrade = 4,
}
////#endregion

//////#region Maintenance
export enum PriorityEnum {
  Low = 1,
  Medium = 2,
  High = 3,
}
export enum AutoScheduleStatus {
  Active = 1,
  NotActive = 2,
  Failed = 3,
  Canceled = 4,
  Success = 5,
}
export enum MetricsEnum {
  "Numeric" = 1,
  "Yes/No" = 2,
  "Descriptive" = 3,
}
export enum WorkOrderTypeEnum {
  Curative = 1,
  Preventive = 2,
  ScheduledPreventive = 3,
  Installation = 4,
  Upgrade = 5,
  Inspection = 6,
}
export enum WorkOrderStatusTypeEnum {
  New = 1,
  Scheduled = 2,
  Maintained = 3,
  Accepted = 4,
  Refused = 5,
  Approved = 6,
  Confirmed = 7,
}

export enum WidgetTagEnum {
  //workorder
  NumberOfNewWorkOrder = 1,
  NumberOfWorkOrderAwaitingConfirmation = 2,
  NumberOfUnhandledInspection = 3,
  NumberOfOverdueWorkOrder = 4,
  NumberOfOpenWorkOrder = 5,
  NumberOfClosedWorkOrder = 15,
  //equipment
  NumberOfNotFunctionalEquipment = 6,

  //Instrument Total Summary
  AvgInstrumentUptime = 7,
  AvgInstrumentDowntime = 8,

  //
  Mtbf = 9,
  Mrttr = 10,

  //PMC
  Pmc = 11,

  EquipmentContratSummary = 12,
  FrequentlyMaintainedInstruments = 13,

  // IMC
  Imc = 14,
}
//////#endregion
