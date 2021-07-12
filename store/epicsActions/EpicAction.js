import {FETCH_USERS} from '../actionTypes/ActionType';
import {getUsersFailure, getUsersSuccess} from '../actions/Actions';
import fetchUsers from '../services/Services';
import {select, combineEpics} from 'redux-most';
import {fromPromise, of} from 'most';

const fetchUsersEpic = action$ => {
  return action$.thru(select(FETCH_USERS)).flatMap(action => {
    return fromPromise(fetchUsers())
      .flatMap(res => {
        let usersData = res.data;
        let usersArr = usersData.results;
        usersArr = usersArr.map(user => {
          return {
            ...user,
            deleteFlag: false,
          };
        });
        return of(getUsersSuccess(usersArr));
      })
      .recoverWith(err => {
        return of(getUsersFailure(err));
      });
  });
};
export default combineEpics([fetchUsersEpic]);
