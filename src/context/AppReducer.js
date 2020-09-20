import { app_name } from "../AppInfo";

export default (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      localStorage.setItem(
        app_name + "_userInfo",
        JSON.stringify(action.payload)
      );
      return {
        userInfo: action.payload,
        ...state,
      };

    default:
      return state;
  }
};
