// Validator for last and first name
export const nameValidation = (nameType, name, setError) => {
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*){0,39}$/;
  switch (nameType) {
    case nameType:
      if (nameType.length === 0) {
        setError(`${name} is required.`);
      } else if (nameType.length >= 40 || !nameType.match(nameRegex)) {
        setError(`${name} can only be 40 characters.`);
      } else {
        setError("");
      }
      break;
    default:
      break;
  }
};

export const emailValidation = (nameType, setError) => {
  const emailRegex =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!nameType.match(emailRegex)) {
    setError("Enter a valid email.");
  } else {
    setError("");
  }
};

export const passwordValidation = (nameType, setError) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (!nameType.match(passwordRegex)) {
    setError(
      "Password must be between 6 to 20 characters containing one numeric digit, one uppercase and one lowercase letter "
    );
  } else {
    setError("");
  }
};
