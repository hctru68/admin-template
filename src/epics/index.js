import { combineEpics } from 'redux-observable';
import { getAllRoleEpic, changeStatusRoleEpic, deleteRoleEpic } from '../epics/roleEpic';
import { getAllUserEpic, changeStatusUserEpic, deleteUserEpic } from '../epics/userEpic';
import { loginEpic } from '../epics/loginEpic';

const rootEpic = combineEpics(
    getAllRoleEpic, changeStatusRoleEpic, deleteRoleEpic, 
    getAllUserEpic, changeStatusUserEpic, deleteUserEpic, 
    loginEpic, 
);
export default rootEpic;