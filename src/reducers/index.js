import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as toastrReducer} from 'react-redux-toastr'

import getAllRolesReducer from '../reducers/role/getAllRolesReducer';
import changeStatusRoleReducer from '../reducers/role/changeStatusRoleReducer';
import deleteRoleReducer from '../reducers/role/deleteRoleReducer';

import getAllUsersReducer from '../reducers/user/getAllUsersReducer';
import changeStatusUserReducer from '../reducers/user/changeStatusUserReducer';
import deleteUserReducer from '../reducers/user/deleteUserReducer';

import loginReducer from '../reducers/login/loginReducer';

export default combineReducers({
    router: routerReducer,
    toastr: toastrReducer,
    // ROLE
    getAllRolesReducer: getAllRolesReducer,
    changeStatusRoleReducer: changeStatusRoleReducer,
    deleteRoleReducer: deleteRoleReducer,
    // USER
    getAllUsersReducer: getAllUsersReducer,
    changeStatusUserReducer: changeStatusUserReducer,
    deleteUserReducer: deleteUserReducer,
    // LOGIN
    loginReducer: loginReducer,
});