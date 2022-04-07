import {PostMenuRequest} from './postMenuRequest';

export interface PostRoleRequest {
  roleName?: string;
  roleCode?: string;
  status?: boolean;
  permissions?: Array<PostMenuRequest>;
}

export namespace PostRoleRequest {
  export type RoleTemplateEnum = 'Super Admin' | 'Admin' | 'User' | 'Unknown';
  export const RoleTemplateEnum = {
    SuperAdmin: 'Super Admin' as RoleTemplateEnum,
    Admin: 'Admin' as RoleTemplateEnum,
    User: 'User' as RoleTemplateEnum,
    Unknown: 'Unknown' as RoleTemplateEnum,
  }
}
