const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  userId: "",
  isLoggedIn: false,
  companyName: "",
  clinicalEmail: "",
  clinicalPassword: "",
  clinicalID: "",
  clinicalLoggedIn: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_FIRST_NAME":
      return {
        ...state,
        firstName: action.firstName,
      };
    case "SET_USER_LAST_NAME":
      return {
        ...state,
        lastName: action.lastName,
      };
    case "SET_USER_EMAIL":
      return {
        ...state,
        email: action.email,
      };
    case "SET_USER_PASSWORD":
      return {
        ...state,
        password: action.password,
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.userId,
      };
    case "SET_USER_IS_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case "SET_USER_COMPANY_NAME":
      return {
        ...state,
        companyName: action.companyName,
      };
    case "SET_USER_CLINICAL_EMAIL":
      return {
        ...state,
        clinicalEmail: action.clinicalEmail,
      };
    case "SET_USER_CLINICAL_PASSWORD":
      return {
        ...state,
        clinicalPassword: action.clinicalPassword,
      };
    case "SET_USER_CLINICAL_ID":
      return {
        ...state,
        clinicalID: action.clinicalID,
      };
    case "SET_USER_CLINICAL_LOGGED_IN":
      return {
        ...state,
        clinicalLoggedIn: action.clinicalLoggedIn,
      };
    default:
      return state;
  }
};

export default authReducer;
