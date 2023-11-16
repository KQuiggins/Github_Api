import { createContext, useReducer } from "react";
import githubReducer from "./GitHubReducer";
import PropTypes from "prop-types";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    repos: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);


  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,


      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

GithubProvider.propTypes = {
  children: PropTypes.node,
};

// users: state.users,
// loading: state.loading,
// user: state.user,
// repos: state.repos
