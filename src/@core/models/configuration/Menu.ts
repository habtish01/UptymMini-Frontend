export class MenuDto {
  id: number;
  path: string;
  title: string;
  iconType: string;
  icon: string;
  class: string;
  groupTitle: boolean;
  badge: string = "";
  badgeClass: string = "";
  parentMenuId: number;
  order: number;
  userRoleLevels: number[] = [];
  userRoles: string[] = [];
  userPlanLevels: number[] = [];
  userPlans: string[] = [];
}

export class MenuFilterDto {
  roleId: number;
}