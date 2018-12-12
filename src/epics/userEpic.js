import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { USER } from '../actionTypes/user';
import { getAllUsersSuccess } from '../actions/user';
import config from '../config';

// const proxyUrl = config.apiService.proxy;
const targetUrl = config.apiService.host + config.apiService.version + '/User/GetAll';
// const header = { crossDomain: true, headers: { 'Content-Type': 'application/json' }};
let API_USER = targetUrl;

const userEpic = action$ => action$.pipe(
    ofType(USER.USER_GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_USER).pipe(
            map(response => getAllUsersSuccess(response)),
            catchError(error => of({
                type: USER.USER_GETALL_FAILURE,
                payload: error.xhr.response,
            }))
        )
    })
);

export default userEpic;