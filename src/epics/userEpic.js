import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { USER } from '../actionTypes/user';
import { getAllUsersSuccess, changeStatusUserSuccess, deleteUserSuccess } from '../actions/user';
import config from '../config';

// const header = { crossDomain: true, headers: { 'Content-Type': 'application/json' }};
const API_GETALL = config.apiService.host + config.apiService.version + '/User/GetAll';
const API_CHANGE_STATUS = config.apiService.host + config.apiService.version + '/User/ChangeStatus/';
const API_DELETE = config.apiService.host + config.apiService.version + '/User/Remove/';

// GETALL
const getAllUserEpic = action$ => action$.pipe(
    ofType(USER.USER_GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL).pipe(
            map(response => getAllUsersSuccess(response)),
            catchError(error => of({
                type: USER.USER_GETALL_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);

// CHANGE STATUS
const changeStatusUserEpic = action$ => action$.pipe(
    ofType(USER.USER_CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.getJSON(API_CHANGE_STATUS + action.payload).pipe(
            map(response => changeStatusUserSuccess(response)),
            catchError(error => of({
                type: USER.USER_CHANGE_STATUS_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);

// DELETE
const deleteUserEpic = action$ => action$.pipe(
    ofType(USER.USER_DELETE),
    mergeMap((action) => {
        return ajax.delete(API_DELETE + action.payload).pipe(
            map(response => deleteUserSuccess(response)),
            catchError(error => of({
                type: USER.USER_DELETE_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);

export { getAllUserEpic, changeStatusUserEpic, deleteUserEpic };