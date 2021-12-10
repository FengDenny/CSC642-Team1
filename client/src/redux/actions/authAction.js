export const setUserFirstName = (firstName) => ({
  type: "SET_USER_FIRST_NAME",
  firstName,
});
export const setUserLastName = (lastName) => ({
  type: "SET_USER_LAST_NAME",
  lastName,
});
export const setUserEmail = (email) => ({
  type: "SET_USER_EMAIL",
  email,
});
export const setUserAddress = (address) => ({
  type: "SET_USER_ADDRESS",
  address,
});
export const setUserAptNo = (aptno) => ({
  type: "SET_USER_APTNO",
  aptno,
});
export const setUserCityState = (citystate) => ({
  type: "SET_USER_CITYSTATE",
  citystate,
});
export const setUserZipcode = (zipcode) => ({
  type: "SET_USER_ZIPCODE",
  zipcode,
});
export const setUserPassword = (password) => ({
  type: "SET_USER_PASSWORD",
  password,
});
export const setUserID = (userId) => ({
  type: "SET_USER_ID",
  userId,
});
export const setIsLoggedIn = (isLoggedIn) => ({
  type: "SET_USER_IS_LOGGED_IN",
  isLoggedIn,
});

export const setCompanyName = (companyName) => ({
  type: "SET_USER_COMPANY_NAME",
  companyName,
});

export const setClinicalEmail = (clinicalEmail) => ({
  type: "SET_USER_CLINICAL_EMAIL",
  clinicalEmail,
});
export const setClinicalPassword = (clinicalPassword) => ({
  type: "SET_USER_CLINICAL_PASSWORD",
  clinicalPassword,
});
export const setClinicalID = (clinicalID) => ({
  type: "SET_USER_CLINICAL_ID",
  clinicalID,
});
export const setClinicalLoggedIn = (clinicalLoggedIn) => ({
  type: "SET_USER_CLINICAL_LOGGED_IN",
  clinicalLoggedIn,
});

export const deleteUserInfo = () =>({
  type: 'DELETE_USER_INFO',
})
