import { BaseURL } from '../config';

export const RolesController = {
  GetAllRoles: BaseURL + `/api/Roles/GetAllRoles`,
  GetAllRolesAsDrp: BaseURL + `/api/Roles/GetAllRolesAsDrp`,
  CreateRole: BaseURL + `/api/Roles/CreateRole`,
  UpdateRole: BaseURL + `/api/Roles/UpdateRole`,
  DeleteRole: BaseURL + `/api/Roles/DeleteRole`,
}