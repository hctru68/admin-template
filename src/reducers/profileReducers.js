import { handleActions } from "redux-actions";
import { PROFILE } from "../actionTypes/profile";

const initialState = {
  details: {},
  trustedDevices: [],
  loaded: false,
  preparingAddEmail: false,
  progressingEmailUpdate: false,
  finishedEmailUpdate: false,
  error: false,
  messagE: "",
  communicationPreferences: {
    show: false,
    progressing: false,
    upsertSuccess: false
  }
};

const actions = {
  [PROFILE.PROFILE_LOAD]: () => ({
    loaded: false
  }),
  [PROFILE.PROFILE_LOAD_SUCCESS]: (state, { payload: details }) => ({
    ...state,
    loaded: true,
    details
  })
};

export default handleActions(actions, initialState);
