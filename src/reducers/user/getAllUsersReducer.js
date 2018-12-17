import { handleActions } from "redux-actions";
import { USER } from "../../actionTypes/user";

const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};

const actions = {
  [USER.USER_GETALL]: () => ({
    isLoading: true,
  }),
  [USER.USER_GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData:responseData,
  }),
  [USER.USER_GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};

export default handleActions(actions, initialState);