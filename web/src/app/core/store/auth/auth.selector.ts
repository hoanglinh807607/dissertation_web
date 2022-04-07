import {authFeatureKey, AuthState} from "./auth.reduce";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const getAuth = createFeatureSelector<AuthState>(authFeatureKey);
export const getState = createSelector(getAuth, state => state);

export const authQuery = {
  getAuth,
  getState
};
