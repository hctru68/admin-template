import { handleActions } from "redux-actions";
import { USER } from "../../actionTypes/user";

const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};

const actions = {
  [USER.USER_CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [USER.USER_CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [USER.USER_CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};

export default handleActions(actions, initialState);