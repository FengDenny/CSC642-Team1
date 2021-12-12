const INITIAL_STATE = {
  name: [{ first: "", last: "" }],
  email: "",
  appliedID: "",
  url: "",
  trialTitle: "",
  participants: "",
  description: "",
};

const appliedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_APPLIED_NAME":
      return {
        ...state,
        name: [{ first: action.first, last: action.last }],
      };
    case "SET_APPLIED_EMAIL":
      return {
        ...state,
        email: action.email,
      };
    case "SET_APPLIED_ID":
      return {
        ...state,
        appliedID: action.appliedID,
      };

    case "SET_APPLIED_URL":
      return {
        ...state,
        url: action.url,
      };
    case "SET_APPLIED_TITLE":
      return {
        ...state,
        trialTitle: action.trialTitle,
      };
    case "SET_APPLIED_PARTICIPANTS":
      return {
        ...state,
        participants: action.participants,
      };
    case "SET_APPLIED_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };

    default:
      return state;
  }
};

export default appliedReducer;
