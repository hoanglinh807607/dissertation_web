import {UserModel} from "../../models/userModel";
import * as AuthActions from './auth.actions'

export const authFeatureKey = 'auth';

export interface AuthState {
  loading: boolean;
  payload: UserModel | null;
  error?: string;
}

export const initialState: AuthState = {
  loading: false,
  payload: null,
  error: ''
};

export function authReducer(state = initialState, action: AuthActions.AuthActions): AuthState {
  switch(action.type) {
    case AuthActions.LOGIN:
      return {...state, loading: true};
    case AuthActions.LOGIN_SUCCESS:
      return {...state, payload: action.userLogin, loading: false, error: ''};
    case AuthActions.LOGIN_FAIL:
      return {...state, loading: false, error: action.error};
    case AuthActions.AUTH_UPDATE:
      return {...state, payload: action.userLogin};
    default:
      return state;
  }
}


