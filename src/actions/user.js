import { createAction } from "redux-actions";
import { USER } from "../actionTypes/user";

export const getAllUsers = createAction(USER.USER_GETALL);
export const getAllUsersSuccess = createAction(USER.USER_GETALL_SUCCESS);
export const getAllUsersFailure = createAction(USER.USER_GETALL_FAILURE);