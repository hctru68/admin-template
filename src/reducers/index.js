import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import getAllRolesReducer from '../reducers/role/getAllRolesReducer';
import changeStatusRoleReducer from '../reducers/role/changeStatusRoleReducer';
import deleteRoleReducer from '../reducers/role/deleteRoleReducer';
import userReducer from '../reducers/userReducer';

export default combineReducers({
    router: routerReducer,
    toastr: toastrReducer,
    getAllRolesReducer: getAllRolesReducer,
    changeStatusRoleReducer: changeStatusRoleReducer,
    deleteRoleReducer: deleteRoleReducer,
    users: userReducer,
});
