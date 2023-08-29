import { BaseEntityDto } from "../common/BaseEntityDto";
import { BaseFilter } from "../common/BaseFilter";
import { RoleDto } from "../customer/RoleDto";
import {
  UserCountrySubscriptionDto,
  UserRegionSubscriptionDto,
  UserLaboratorySubscriptionDto,
} from "./UserSubscription";

export class UserDto extends BaseEntityDto {
  id?: number;
  customerID?: number;
  firstName: string = null;
  lastName: string = null;
  address: string = null;
  personalImagePath?: string;
  ip?: string = null;
  changePassword?: boolean;
  callingCode: string = null;
  status: string = null;
  electronicSignature: string = null;
  nextPasswordExpiryDate: string = null;
  emailVerifiedDate: string = null;
  phoneNumber: string = null;
  email: string = null;
  password: string = null;
  emailConfirmed: boolean = null;
  phoneNumberConfirmed: boolean = null;
  organization: string = null;
  customerTypeId: number = null;
  education: string = null;
  experience: string = null;
  specialties: string = null;
  position: string = null;
  healthFacilityId?: number = null;
  healthFacilityTypeId?: number = null;
  loggedInUserCount: number = null;
  userRoleLevels?: number[] = [];
  userRoles?: string[] = [];
  regionId: number = null;

  healthFacilityName: string = null;
  healthFacilityTypeName: string = null;

  // UI
  userRoleLevelName: string = null;
  reomveProfileImage: boolean = false;

  userWidgets?: number[] = [];
}

export class UserDetailsDto extends BaseEntityDto {
  id?: number;
  firstName: string = null;
  lastName: string = null;
  address: string = null;
  personalImagePath?: string;
  ip?: string = null;
  changePassword?: boolean;
  callingCode: string = null;
  status: string = null;
  electronicSignature: string = null;
  nextPasswordExpiryDate: string = null;
  emailVerifiedDate: string = null;
  phoneNumber: string = null;
  email: string = null;
  emailConfirmed: boolean = null;
  phoneNumberConfirmed: boolean = null;
  position: string = null;

  customerId?: number = null;
  userRoles?: string[] = [];
}

export class UserFilterDto extends BaseFilter {
  name?: string = null;
  email?: string = null;
  phoneNumber: string = null;
  roleId?: number = null;
  status: string = null;
  customerId?: number = null;
  customerTypeId?: number = null;
  healthFacilityId?: number = null;
}

export class UserDrpDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  personalImagePath: string;
  healthFacilityId?: number = null;
}
