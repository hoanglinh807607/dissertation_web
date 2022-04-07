import {ActionType, createAction, props} from "@ngrx/store";
import {UserModel} from "../../models/userModel";

// Khai báo all type
export const LOGIN = '@auth/Login';
export const LOGIN_SUCCESS = '@auth/LoginSuccess';
export const LOGIN_FAIL = '@auth/LoginFail';
export const AUTH_UPDATE = '@auth/UpdateUserInfo';

// Tạo ra các action director
export const login = createAction(LOGIN, props<{userLogin: UserModel}>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{userLogin: UserModel}>());
export const loginFail = createAction(LOGIN_FAIL, props<{error?: string}>());
export const authUpdate = createAction(AUTH_UPDATE, props<{userLogin: UserModel}>());

// export các action director ra bên ngoài để map typing
export type AuthActions = ActionType<typeof login>
    | ActionType<typeof loginSuccess>
    | ActionType<typeof loginFail>
    | ActionType<typeof authUpdate>;
