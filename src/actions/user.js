import { createAction } from "redux-actions";
import { USER } from "../actionTypes/user";

export const getAllUsers = createAction(USER.USER_GETALL);
export const getAllUsersSuccess = createAction(USER.USER_GETALL_SUCCESS);
export const getAllUsersFailure = createAction(USER.USER_GETALL_FAILURE);

export const changeStatusUser = createAction(USER.USER_CHANGE_STATUS);
export const changeStatusUserSuccess = createAction(USER.USER_CHANGE_STATUS_SUCCESS);
export const changeStatusUserFailure = createAction(USER.USER_CHANGE_STATUS_FAILURE);

export const deleteUser = createAction(USER.USER_DELETE);
export const deleteUserSuccess = createAction(USER.USER_DELETE_SUCCESS);
export const deleteUserFailure = createAction(USER.USER_DELETE_FAILURE);