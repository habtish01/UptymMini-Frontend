import { BaseFilter } from '../common/BaseFilter';
import { LocationDto } from "../common/Location";

export class CustomerDto {
  id: number;
  email: string;
  firstName: string = null;
  lastName: string = null;
  address: string = null;

  ip: string = null;
  callingCode: string = null;
  phoneNumber: string = null;
  specialties: string = null;
  experience: string = null;
  personalImagePath: string = null;
  workHistory: string = null;
  organization: string = null;
  createdBy?: number;
  createdOn?: string = new Date().toISOString();
  status: string = null;
  customerTypeId?: number;
  locationDto: LocationDto = null;
  nextPasswordExpiryDate: string = null;
  emailVerifiedDate?: string = null;
  password: string;
  phoneNumberConfirmed: boolean;
  reminderDays: number;

  planId: number;
  isTrial: boolean;
  planName: string;
}
export class CustomerFilterDto extends BaseFilter {
  name?: string = null;
  email?: string = null;
  phoneNumber: string = null;
  planId?: number = null;
  status: string = null;
  isTrial?: string = null;
}

export class CustomerMembershipDto {
  customerId: number;
  email: string = null;
  planId: number;
  isTrial: boolean;
  startDate: Date;
  endDate: Date;
}

export class CustomerDrpDto {
  name: string;
  id: number;
}
