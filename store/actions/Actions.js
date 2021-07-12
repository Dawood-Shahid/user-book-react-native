import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SHOW_USER_DETAILS,
  HIDE_USER_DETAILS,
  DELETE_USER,
  RECOVER_USER,
} from '../actionTypes/ActionType';

const getUsers = () => {
  // console.log('in get users function');
  return {
    type: FETCH_USERS,
  };
};

const getUsersSuccess = usersData => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: usersData,
  };
};

const getUsersFailure = usersData => {
  return {
    type: FETCH_USERS_FAILURE,
  };
};

const showDetails = data => {
  return {
    type: SHOW_USER_DETAILS,
    payload: data,
  };
};

const hideDetails = () => {
  return {
    type: HIDE_USER_DETAILS,
  };
};

const deleteUser = data => {
  return {
    type: DELETE_USER,
    payload: data,
  };
};

const recoverUser = data => {
  return {
    type: RECOVER_USER,
    payload: data,
  };
};

export {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  showDetails,
  hideDetails,
  deleteUser,
  recoverUser,
};
