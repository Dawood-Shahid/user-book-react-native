import {
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  SHOW_USER_DETAILS,
  HIDE_USER_DETAILS,
  DELETE_USER,
  RECOVER_USER,
} from '../actionTypes/ActionType';

const initialState = {
  loadingFlag: false,
  showDetailsFlag: false,
  usersData: [],
  deletedUsers: [],
  selectedUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      // console.log('FETCH_USERS');
      return {
        ...state,
        loadingFlag: true,
      };

    case FETCH_USERS_SUCCESS:
      // console.log('reducer');
      // console.log(action.payload);
      return {
        ...state,
        usersData: action.payload,
        loadingFlag: false,
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loadingFlag: false,
      };

    case SHOW_USER_DETAILS:
      return {
        ...state,
        showDetailsFlag: true,
        selectedUser: action.payload,
      };

    case HIDE_USER_DETAILS:
      return {
        ...state,
        showDetailsFlag: false,
        selectedUser: {},
      };

    case DELETE_USER:
      // let arr = state.usersData.filter(user =>
      //   user.login.uuid !== action.payload.login.uuid ? user : null,
      // );
      // console.log(arr);
      return {
        ...state,
        deletedUsers: [
          ...state.deletedUsers,
          {...action.payload, deleteFlag: true},
        ],
        selectedUser: {},
        showDetailsFlag: false,
        usersData: [
          ...state.usersData.filter(user =>
            user.login.uuid !== action.payload.login.uuid ? user : null,
          ),
        ],
      };

    case RECOVER_USER:
      return {
        ...state,
        deletedUsers: [
          ...state.deletedUsers.filter(user =>
            user.login.uuid !== action.payload.login.uuid ? user : null,
          ),
        ],
        selectedUser: {},
        showDetailsFlag: false,
        usersData: [...state.usersData, {...action.payload, deleteFlag: false}],
      };

    default:
      return {
        ...state,
      };
  }
};
