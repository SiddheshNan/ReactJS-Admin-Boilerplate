import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { app_name } from "../AppInfo";

const setEmptyStorage = () => {
  const example_userInfo = {
    isLogeedIn: false,
    userName: "",
    userEmail: "",
    userAccessToken: "",
    userRefreshToken: "",
  };

  localStorage.setItem(
    app_name + "_userInfo",
    JSON.stringify(example_userInfo)
  );

  return example_userInfo;
};

// Initial state
const initialState = {
  userInfo: localStorage.getItem(app_name + "_userInfo")
    ? JSON.parse(localStorage.getItem(app_name + "_userInfo"))
    : setEmptyStorage(),
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function updateUser(user) {
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        userInfo: state.userInfo,
        updateUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
