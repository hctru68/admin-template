import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { LOGIN } from '../actionTypes/login';
import { loginSuccess } from '../actions/login';
import config from '../config';

const header = { crossDomain: true, 'Content-Type': 'application/json'};
const API_LOGIN = config.apiService.host + config.apiService.version + '/Auth/Login';

// LOGIN
const loginEpic = action$ => action$.pipe(
    ofType(LOGIN.LOGIN),
    mergeMap((action) => {
        return ajax.post(API_LOGIN, action.payload, header).pipe(
            map(response => loginSuccess(response)),
            catchError(error => of({
                type: LOGIN.LOGIN_FAILURE,
                payload: { message: error.xhr.response, status: error.xhr.status },
            }))
        )
    })
);
export { loginEpic };