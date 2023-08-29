
import { BaseURL } from '../config';

export const MembershipsController = {
  GetAllMemberships: BaseURL + `/api/Memberships/GetAllMerberships`,
  GetMembershipDetails: BaseURL + `/api/Memberships/GetMembershipDetails`,
  CreateMembership: BaseURL + `/api/Memberships/CreateMembership`,
  UpdateMembership: BaseURL + `/api/Memberships/UpdateMembership`,
  RemoveMembership: BaseURL + `/api/Memberships/RemoveMembership`

}