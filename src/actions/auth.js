import { createAction } from "redux-actions";
import { AUTH } from "../actionTypes/auth";

export const loadAuth = createAction(AUTH.AUTH_LOGIN);
export const loadAuthSuccess = createAction(AUTH.AUTH_LOGIN_SUCCESS);
