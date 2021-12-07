export const setTrialTitle = (title) => ({
  type: "SET_TRIAL_TITLE",
  title,
});
export const setTrialDescription = (description) => ({
  type: "SET_TRIAL_DESCRIPTION",
  description,
});
export const setTrialQualified = (qualified) => ({
  type: "SET_TRIAL_QUALIFIED",
  qualified,
});
export const setTrialNotQualified = (notQualified) => ({
  type: "SET_TRIAL_NOT_QUALIFIED",
  notQualified,
});

export const setTrialPrerequisite = (prerequisite) => ({
  type: "SET_TRIAL_PREREQUISITE",
  prerequisite,
});

export const setTrialLocation = (location) => ({
  type: "SET_TRIAL_LOCATION",
  location,
});
export const setTrialPayout = (payout) => ({
  type: "SET_TRIAL_PAYOUT",
  payout,
});
export const setTrialStatus = (status) => ({
  type: "SET_TRIAL_STATUS",
  status,
});

export const setTrialDate = (start, end) => ({
  type: "SET_TRIAL_DATE",
  start,
  end,
});
