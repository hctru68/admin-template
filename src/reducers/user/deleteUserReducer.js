import { handleActions } from "redux-actions";
import { USER } from "../../actionTypes/user";

const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};

const actions = {
  [USER.USER_DELETE]: () => ({
    isLoading: true,
  }),
  [USER.USER_DELETE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [USER.USER_DELETE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};

export default handleActions(actions, initialState);