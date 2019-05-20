const initialState = {
  loginData:{}
}
export default (state = initialState ,action) => {
    switch(action.type) {
    case 'LOGIN_ACTION':
      return {
        ...state, 
        user:action.payload
      }
      default:
      return state
  }
}