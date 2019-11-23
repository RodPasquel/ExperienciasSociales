const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...state,
        startDate: action.payload,
      };
    case 'GET_STATE':
      return {
        ...state,
        startDate: action.payload,
      };
    case 'VIEW_EXPERIENCES':
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
