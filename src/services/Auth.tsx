import React, { FC, useContext, useEffect, useReducer } from "react";

export interface IAuthContextState {
  isSignedIn: boolean;
}

export interface IAuthContext extends IAuthContextState {}

const AuthedUserContext = React.createContext<IAuthContextState>({
  isSignedIn: false
});

enum AuthActionType {
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_ERROR = "AUTH_ERROR",
  UNAUTH_SUCCESS = "UNAUTH_SUCCESS"
}

interface IAuthSucceed {
  type: AuthActionType.AUTH_SUCCESS;
}

interface IAuthFailure {
  type: AuthActionType.AUTH_ERROR | AuthActionType.UNAUTH_SUCCESS;
}

interface ILoginParams {
  username: string;
  password: string;
}

type AuthActions = IAuthFailure | IAuthSucceed;

export const AuthProvider: FC = ({ children }): JSX.Element => {
  const initialState: IAuthContextState = {
    isSignedIn: false
  };

  const reducer = (
    state: IAuthContextState,
    action: AuthActions
  ): IAuthContextState => {
    switch (action.type) {
      case AuthActionType.AUTH_SUCCESS:
        return { isSignedIn: false };
      case AuthActionType.AUTH_ERROR:
      case AuthActionType.UNAUTH_SUCCESS:
        return { isSignedIn: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //   useEffect((): void => {
  //     dispatch({ type: AuthActionType.AUTH_SUCCESS });
  //   }, []);

  const login = async ({
    username,
    password
  }: ILoginParams): Promise<string> => {
    try {
      //TODO: query username/password in DB and verify match
      //const { username } = session.getAccessToken().decodePayload();

      dispatch({ type: AuthActionType.AUTH_SUCCESS });

      return Promise.resolve("");
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return (
    <AuthedUserContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </AuthedUserContext.Provider>
  );
};

export const AuthConsumer = AuthedUserContext.Consumer;
export const useAuthValue = (): IAuthContext => useContext(AuthedUserContext);
