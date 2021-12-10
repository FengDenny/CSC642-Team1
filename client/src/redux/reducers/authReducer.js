const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  aptno: "", 
  citystate: "",
  zipcode: "",
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
    case "SET_USER_ADDRESS":
      return{
        ...state,
        address: action.address,
      }
    case "SET_USER_APTNO":
      return{
        ...state,
        aptno: action.aptno,
      }
    case "SET_USER_CITYSTATE":
      return{
        ...state,
        citystate: action.citystate,
      }
    case "SET_USER_ZIPCODE":
      return{
        ...state,
        zipcode: action.zipcode,
      }
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
    case "DELETE_USER_INFO":
      return{
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        aptno: "", 
        citystate: "",
        zipcode: "",
        password: "",
        userId: "",
        isLoggedIn: false,
        companyName: "",
        clinicalEmail: "",
        clinicalPassword: "",
        clinicalID: "",
        clinicalLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
