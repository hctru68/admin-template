import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ROLE } from '../actionTypes/role';
import { getAllRolesSuccess, changeStatusRoleSuccess, deleteRoleSuccess } from '../actions/role';
import config from '../config';

// const header = { crossDomain: true, headers: { 'Content-Type': 'application/json' }};
const API_GETALL = config.apiService.host + config.apiService.version + '/Role/GetAll';
const API_CHANGE_STATUS = config.apiService.host + config.apiService.version + '/Role/ChangeStatus/';
const API_DELETE = config.apiService.host + config.apiService.version + '/Role/Remove/';

// GETALL
const getAllRoleEpic = action$ => action$.pipe(
    ofType(ROLE.ROLE_GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL).pipe(
            map(response => getAllRolesSuccess(response)),
            catchError(error => of({
                type: ROLE.ROLE_GETALL_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);

// CHANGE STATUS
const changeStatusRoleEpic = action$ => action$.pipe(
    ofType(ROLE.ROLE_CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.getJSON(API_CHANGE_STATUS + action.payload).pipe(
            map(response => changeStatusRoleSuccess(response)),
            catchError(error => of({
                type: ROLE.ROLE_CHANGE_STATUS_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);

// DELETE
const deleteRoleEpic = action$ => action$.pipe(
    ofType(ROLE.ROLE_DELETE),
    mergeMap((action) => {
        return ajax.delete(API_DELETE + action.payload).pipe(
            map(response => deleteRoleSuccess(response)),
            catchError(error => of({
                type: ROLE.ROLE_DELETE_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);

export { getAllRoleEpic, changeStatusRoleEpic, deleteRoleEpic };