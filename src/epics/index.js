import { combineEpics } from 'redux-observable';
import { getAllRoleEpic, changeStatusRoleEpic, deleteRoleEpic } from '../epics/roleEpic';
import userEpic from '../epics/userEpic';

const rootEpic = combineEpics(
    getAllRoleEpic, changeStatusRoleEpic, deleteRoleEpic, 
    userEpic
);
export default rootEpic;