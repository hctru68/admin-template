import { handleActions } from "redux-actions";
import { ROLE } from "../../actionTypes/role";

const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};

const actions = {
  [ROLE.ROLE_DELETE]: () => ({
    isLoading: true,
  }),
  [ROLE.ROLE_DELETE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [ROLE.ROLE_DELETE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};

export default handleActions(actions, initialState);