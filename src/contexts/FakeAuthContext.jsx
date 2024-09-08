import { Action } from "@remix-run/router";
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenicated: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenicated: true,
        error: null,
      };

    case "logout":
      return { ...state, user: null, isAuthenicated: false, error: null };

    case "rejected":
      return {
        ...state,
        user: null,
        isAuthenicated: false,
        error: "The email or password is wrong",
      };

    default:
      throw new Error("Unknow action type");
  }
};
const FAKE_USER = {
  name: "Mahmoud",
  email: "mahmoud@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
function AuthProvider({ children }) {
  const [{ user, isAuthenicated, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    } else {
      dispatch({ type: "rejected" });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenicated, login, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context == undefined)
    throw new Error("This context is used outside the AuthContext.Provider");

  return context;
}

export { AuthProvider, useAuth };
