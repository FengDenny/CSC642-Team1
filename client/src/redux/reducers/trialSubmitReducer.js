const INITIAL_STATE = {
  title: "",
  description: "",
  qualified: [],
  participants: "",
  notQualified: [],
  prerequisite: [],
  location: [{ address: "", coordinates: [{ lat: "", lng: "" }] }],
  payout: "",
  status: "",
  studyType: "",
  trialID: "",
  date: [{ start: "", end: "" }],
  poster: "",
};

const trialSubmitReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TRIAL_TITLE":
      return {
        ...state,
        title: action.title,
      };
    case "SET_TRIAL_PARTICIPANTS":
      return {
        ...state,
        participants: action.participants,
      };
    case "SET_TRIAL_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "SET_TRIAL_QUALIFIED":
      return {
        ...state,
        qualified: [action.qualified],
      };
    case "SET_TRIAL_NOT_QUALIFIED":
      return {
        ...state,
        notQualified: [action.notQualified],
      };
    case "SET_TRIAL_PREREQUISITE":
      return {
        ...state,
        prerequisite: [action.prerequisite],
      };
    case "SET_TRIAL_LOCATION":
      return {
        ...state,
        location: {
          address: action.address,
          coordinates: [{ lat: action.lat, lng: action.lng }],
        },
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
    case "SET_TRIAL_TYPE":
      return {
        ...state,
        studyType: action.studyType,
      };
    case "SET_TRIAL_ID":
      return {
        ...state,
        trialID: action.trialID,
      };
    case "SET_TRIAL_DATE":
      return {
        ...state,
        date: [{ start: action.start, end: action.end }],
      };
    case "SET_TRIAL_POSTER":
      return {
        ...state,
        poster: action.poster,
      };
    default:
      return state;
  }
};

export default trialSubmitReducer;
