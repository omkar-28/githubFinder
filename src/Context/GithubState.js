import React, { useReducer } from "react";
import { fetchedUser, fetchUserDetails } from "../api";
import GithubContext from "./githubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_USERS,
  CLEAR_USERS,
  SET_LOADING,
  CLEAR_TEXT,
} from "./Types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    text: "",
    Clear: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search User
  const inputHandler = async (text) => {
    setLoading();

    const fetchUsers = await fetchedUser(text);

    dispatch({
      type: SEARCH_USERS,
      payload: fetchUsers,
    });
    setText();
  };

  //Get User
  const getUser = async (login) => {
    setLoading();

    const fetchedDetail = await fetchUserDetails(login);
    dispatch({
      type: GET_USER,
      payload: fetchedDetail,
    });
  };

  //Get Users list
  const getUserList = async () => {
    setLoading();
    const fetchUsers = await fetchedUser();

    dispatch({
      type: GET_USERS,
      payload: fetchUsers,
    });
  };

  //Clear search Users
  const clearSearch = () =>
    dispatch({ type: CLEAR_USERS, payload: state.users });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //Set text
  const setText = () => dispatch({ type: CLEAR_TEXT });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        Clear: state.Clear,
        text: state.text,
        getUserList,
        inputHandler,
        getUser,
        clearSearch,
        setText,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
