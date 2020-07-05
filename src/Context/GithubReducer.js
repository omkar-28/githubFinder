import {
  SEARCH_USERS,
  GET_USER,
  GET_USERS,
  CLEAR_USERS,
  SET_LOADING,
  CLEAR_TEXT,
} from "./Types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        Clear: true,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        Clear: true,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_TEXT:
      return {
        ...state,
        text: "",
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        Clear: false,
        text: "",
      };
    default:
      return;
  }
};
