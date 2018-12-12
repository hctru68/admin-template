import { handleActions } from "redux-actions";
import { ROLE } from "../actionTypes/role";

const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};

const actions = {
  // GETALL
  [ROLE.ROLE_GETALL]: () => ({
    isLoading: true,
  }),
  [ROLE.ROLE_GETALL_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [ROLE.ROLE_GETALL_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),

  // CHANGE STATUS
  [ROLE.ROLE_CHANGE_STATUS]: () => ({
    isLoading: true,
  }),
  [ROLE.ROLE_CHANGE_STATUS_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [ROLE.ROLE_CHANGE_STATUS_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  }),


};

export default handleActions(actions, initialState);
