export const loginAction = (user) => {
  return {
    type: 'LOGIN_ACTION',
    payload: user
  };
}