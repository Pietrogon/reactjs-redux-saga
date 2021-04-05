import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';

import AuthService from '../services/auth.service';

const login = function (username: string, password: string) {
  return (dispatch: any) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
      },
      () => {
        dispatch({
          type: LOGIN_FAIL,
          payload: null,
        });
      }
    );
  };
};

const logout = () => (dispatch: any) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export default {
  login,
  logout,
};
