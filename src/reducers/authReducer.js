export const initialState = {
    user: null,
    isAuthenticated: false,
  };
  
  export const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      case 'REGISTER':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      default:
        return state;
    }
  };
  