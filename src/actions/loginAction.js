import { dispatch } from "rxjs/internal/observable/pairs";

export const loginAction = (user) => {
  return {
    type: 'LOGIN_ACTION',
    payload: user
  };
}