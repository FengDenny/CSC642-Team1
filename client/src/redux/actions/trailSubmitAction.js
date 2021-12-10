export const setTrialTitle = (title) => ({
  type: "SET_TRIAL_TITLE",
  title,
});
export const setTrialDescription = (description) => ({
  type: "SET_TRIAL_DESCRIPTION",
  description,
});
export const setTrialParticipants = (participants) => ({
  type: "SET_TRIAL_PARTICIPANTS",
  participants,
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

export const setTrialLocation = (address, coordinates) => ({
  type: "SET_TRIAL_LOCATION",
  address,
  coordinates,
});
export const setTrialPayout = (payout) => ({
  type: "SET_TRIAL_PAYOUT",
  payout,
});
export const setTrialStatus = (status) => ({
  type: "SET_TRIAL_STATUS",
  status,
});
export const setTrialID = (trialID) => ({
  type: "SET_TRIAL_ID",
  trialID,
});

export const setTrialDate = (start, end) => ({
  type: "SET_TRIAL_DATE",
  start,
  end,
});

export const setTrialPoster = (poster) => ({
  type: "SET_TRIAL_POSTER",
  poster,
});
