import { createAction } from "redux-actions";
import { PROFILE} from "../actionTypes/profile";

export const loadProfile = createAction(PROFILE.PROFILE_LOAD);
export const loadProfileSuccess = createAction(PROFILE.PROFILE_LOAD_SUCCESS);
