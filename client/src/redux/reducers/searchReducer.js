const INITIAL_STATE = {
  select: [{ value: "" }],
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SEARCH_SELECT":
      return {
        ...state,
        select: [{ value: action.value }],
      };

    default:
      return state;
  }
};

export default searchReducer;
