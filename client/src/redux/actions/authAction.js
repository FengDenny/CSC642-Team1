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
