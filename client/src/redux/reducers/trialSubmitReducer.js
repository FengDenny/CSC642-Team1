const INITIAL_STATE = {
  title: "",
  description: "",
  qualified: "",
  notQualified: "",
  prerequisite: "",
  location: "",
  payout: "",
  status: "",
  date: [{ start: "", end: "" }],
};

const trialSubmitReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TRIAL_TITLE":
      return {
        ...state,
        title: action.title,
      };
    case "SET_TRIAL_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "SET_TRIAL_QUALIFIED":
      return {
        ...state,
        qualified: action.qualified,
      };
    case "SET_TRIAL_NOT_QUALIFIED":
      return {
        ...state,
        notQualified: action.notQualified,
      };
    case "SET_TRIAL_PREREQUISITE":
      return {
        ...state,
        prerequisite: action.prerequisite,
      };
    case "SET_TRIAL_LOCATION":
      return {
        ...state,
        location: action.location,
      };
    case "SET_TRIAL_PAYOUT":
      return {
        ...state,
        payout: action.payout,
      };
    case "SET_TRIAL_STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "SET_TRIAL_DATE":
      return {
        ...state,
        date: [{ start: action.start, end: action.end }],
      };
    default:
      return state;
  }
};

export default trialSubmitReducer;
