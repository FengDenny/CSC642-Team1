const INITIAL_STATE = {
  select: [{ value: "" }],
  searchValue: [{ text: "" }],
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SEARCH_SELECT":
      return {
        ...state,
        select: [{ value: action.value }],
      };
    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchValue: [{ text: action.text }],
      };

    default:
      return state;
  }
};

export default searchReducer;
