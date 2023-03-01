const defaultUsers = { users: [] };

export const ADD_USERS = 'ADD_USERS';
export const REMOVE_USERS = 'REMOVE_USERS';
export const FETCH_USERS = 'FETCH_USERS';

export const usersReducer = (state = defaultUsers, action) => {
  console.log({ mes: "usersReducer", state, action });
  switch (action.type) {
    case ADD_USERS:
      return { ...state, users: [...state.users, ...action.payload]};
    case REMOVE_USERS:
      return { ...state, users: state.users.filter(user => user.id !== action.payload) };
    default:
      return state;
  }
};

export const addUsersCreator = (payload) => ({type: ADD_USERS, payload});
export const removeUsersCreator = (payload) => ({type: REMOVE_USERS, payload});
export const fetchUsersCreator = () => ({type: FETCH_USERS});