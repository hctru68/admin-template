import { createAction } from "redux-actions";
import { ROLE } from "../actionTypes/role";

export const getAllRoles = createAction(ROLE.ROLE_GETALL);
export const getAllRolesSuccess = createAction(ROLE.ROLE_GETALL_SUCCESS);
export const getAllRolesFailure = createAction(ROLE.ROLE_GETALL_FAILURE);

export const changeStatusRole = createAction(ROLE.ROLE_CHANGE_STATUS);
export const changeStatusRoleSuccess = createAction(ROLE.ROLE_CHANGE_STATUS_SUCCESS);
export const changeStatusRoleFailure = createAction(ROLE.ROLE_CHANGE_STATUS_FAILURE);

export const deleteRole = createAction(ROLE.ROLE_DELETE);
export const deleteRoleSuccess = createAction(ROLE.ROLE_DELETE_SUCCESS);
export const deleteRoleFailure = createAction(ROLE.ROLE_DELETE_FAILURE);