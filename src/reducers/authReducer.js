const initialState = {
  isAuthenticated: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_AUTH':
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
      }
    default:
      return state
  }
}
